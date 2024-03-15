import {
  DeleteOutlineOutlined,
  EditOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
  useTheme,
} from "@mui/material";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// user defined components
import Header from "../global/Header";

// user defined data
import { actions } from "../../store";
import { tokens } from "../../theme";

function Orders() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [viewDialog, setViewDialog] = useState(false);
  const [id, setId] = useState(undefined);
  // const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [order, setOrder] = useState({});
  const status = [
    "Processing",
    "Dispatched",
    "Shipped",
    "Out for Delivery",
    "Delivered",
  ];
  useEffect(() => {
    console.log(id);
  }, [id]);
  const columns = [
    { field: "orderId", headerName: "Order ID", flex: 1 },
    { field: "customer", headerName: "Customer", flex: 1 },
    { field: "orderDate", headerName: "Order Date", flex: 1 },
    { field: "deliveryDate", headerName: "Delivery Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    {
      field: "items",
      flex: 1,
      headerName: "Items",
      renderCell: (params) => {
        return (
          <Box>
            {params.row.items.map((item, index) => (
              <Box key={index}>
                {item.name} ({item.quantity})
              </Box>
            ))}
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent="center">
            <IconButton
              onClick={() => {
                setViewDialog(true);
                setId(params.row.orderId);
                setOrder(params.row);
              }}
            >
              <VisibilityOutlined />
            </IconButton>
            <IconButton
              onClick={() => {
                setEditDialog(true);
                setId(params.row.orderId);
                setOrder(params.row);
              }}
            >
              <EditOutlined />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                setDeleteDialog(true);
                setId(params.row.orderId);
                setOrder(params.row);
              }}
            >
              <DeleteOutlineOutlined />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const editOrder = () => {
    dispatch(actions.editOrder(order));
    setEditDialog(false);
    setOrder({});
  };

  const deleteOrder = () => {
    dispatch(actions.deleteOrder(order.orderId));
    setDeleteDialog(false);
    setOrder({});
  };

  return (
    <Box mx="20px">
      <Box>
        <Header title="Orders" subtitle="Manage your orders here" />
      </Box>
      <Box
        m="40 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-cellContent": {
            display: "flex",
            alignItems: "center",
            fontWeight: 500,
            fontSize: "1rem",
          },
        }}
      >
        <DataGrid
          rows={orders}
          columns={columns}
          getRowId={(row) => row.orderId}
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 20, 30]}
          pageSize={10}
          rowsPerPageOptions={[5, 10, 20, 30]}
          disableSelectionOnClick
          disableColumnMenu
        />
      </Box>

      {/* View Dialog */}
      <Dialog
        open={viewDialog}
        onClose={() => {
          setViewDialog(false);
        }}
      >
        <DialogTitle>View Order</DialogTitle>
        <DialogContent>
          <Typography>{order.orderId}</Typography>
          <Typography>{order.customer}</Typography>
          <Typography>Order Date: {order.orderDate}</Typography>
          <Typography>Delivery Date: {order.deliveryDate}</Typography>
          <Typography>{order.status}</Typography>
          <Typography>Items:</Typography>
          {Object.keys(order).length > 0 ? (
            <Box>
              {order.items.map((item, index) => (
                <Box key={index}>
                  <Typography key={index}>
                    {index + 1}. {item.name} ({item.quantity})
                    {item.price ? ` -  ₹${item.price}` : ""}
                  </Typography>
                </Box>
              ))}
            </Box>
          ) : (
            <Box>No items found</Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
              setViewDialog(false);
              setOrder({});
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog
        open={editDialog}
        onClose={() => {
          setEditDialog(false);
        }}
      >
        <FormControl>
          <DialogTitle>Edit Order</DialogTitle>
          <DialogContent>
            <Typography>{order.orderId}</Typography>
            <Typography>{order.customer}</Typography>
            <Typography>Order Date: {order.orderDate}</Typography>
            <Typography>Delivery Date: {order.deliveryDate}</Typography>
            <Select
              sx={{ mt: 2 }}
              value={order.status || ""}
              onChange={(e) => {
                setOrder({ ...order, status: e.target.value });
              }}
            >
              {status.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => {
                setEditDialog(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              type="submit"
              color="secondary"
              onClick={() => {
                editOrder();
              }}
            >
              Save
            </Button>
          </DialogActions>
        </FormControl>
      </Dialog>

      {/* Delete Dialog */}
      <Dialog
        open={deleteDialog}
        onClose={() => {
          setDeleteDialog(false);
        }}
      >
        <DialogTitle>Delete Order</DialogTitle>
        <DialogContent>
          Are you sure you want to delete order of {order.customer} ?
        </DialogContent>
        <DialogActions>
          <Button
            color="inherit"
            variant="outlined"
            onClick={() => {
              setDeleteDialog(false);
            }}
          >
            Cancel
          </Button>
          <Button variant="contained" onClick={deleteOrder}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Orders;
