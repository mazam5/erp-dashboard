import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
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
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// user defined components
import Header from "../global/Header";

// user defined data
import { categories } from "../../data";
import { actions } from "../../store";
import { tokens } from "../../theme";

function Products() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [addDialog, setAddDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [id, setId] = useState(undefined);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: undefined,
    stock: undefined,
    id: undefined,
  });
  useEffect(() => {
    console.log(id);
  }, [id]);
  const addAProduct = () => {
    if (
      product.name === "" ||
      product.category === "" ||
      product.price === 0 ||
      product.stock === 0
    )
      return;
    const newId = products.length + 1;
    const newProduct = { ...product, id: newId };
    dispatch(actions.addProduct(newProduct));
    setAddDialog(false);
    setProduct({
      name: "",
      category: "",
      price: undefined,
      stock: undefined,
      id: undefined,
    });
  };

  const editProduct = () => {
    dispatch(actions.editProduct(product));
    setEditDialog(false);
    setProduct({
      name: "",
      category: "",
      price: undefined,
      stock: undefined,
      id: undefined,
    });
  };
  const deleteProduct = () => {
    dispatch(actions.deleteProduct(product.id));
    setDeleteDialog(false);
  };
  const columns = [
    { field: "name", headerName: "Product Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      valueFormatter: (params) =>
        `₹ ${params.value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    },
    { field: "stock", headerName: "Stock", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        return (
          <Box display="flex" justifyContent={"space-between"}>
            <IconButton
              onClick={() => {
                setEditDialog(true);
                setId(params.row.id);
                setProduct(params.row);
              }}
            >
              <EditOutlined />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => {
                setDeleteDialog(true);
                setId(params.row.id);
                setProduct(params.row);
              }}
            >
              <DeleteOutline />
            </IconButton>
          </Box>
        );
      },
    },
  ];
  return (
    <Box mx="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Products" subtitle="Manage your products here" />
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            color="secondary"
            sx={{ fontWeight: 600 }}
            startIcon={<AddOutlined />}
            onClick={() => setAddDialog(true)}
          >
            Add Product
          </Button>
        </Box>
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
          rows={products}
          columns={columns}
          getRowId={(row) => row.id}
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
      {/* Add Dialog */}
      <Dialog
        open={addDialog}
        onClose={() => setAddDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <FormControl>
          <DialogTitle>Add Product</DialogTitle>
          <DialogContent>
            <Box display="flex">
              <TextField
                sx={{ mb: 2, mr: 2 }}
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <FormControl>
                <Select
                  autoWidth
                  sx={{ mb: 2, ml: 2 }}
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              sx={{ mb: 2, mr: 2 }}
              label="Price"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <TextField
              sx={{ mb: 2, mr: 2 }}
              label="Stock"
              type="number"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => setAddDialog(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={addAProduct}
            >
              Add
            </Button>
          </DialogActions>
        </FormControl>
      </Dialog>
      {/* Edit Dialog */}
      <Dialog
        open={editDialog}
        onClose={() => setEditDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <FormControl>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogContent>
            <Box display="flex">
              <TextField
                sx={{ mb: 2, mr: 2 }}
                type="text"
                placeholder="Product Name"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
              <FormControl>
                <Select
                  autoWidth
                  sx={{ mb: 2, ml: 2 }}
                  value={product.category}
                  onChange={(e) =>
                    setProduct({ ...product, category: e.target.value })
                  }
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <TextField
              sx={{ mb: 2, mr: 2 }}
              label="Price"
              color="info"
              prefix="₹"
              type="number"
              value={product.price}
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
            <TextField
              sx={{ mb: 2, mr: 2 }}
              label="Stock"
              type="number"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="inherit"
              variant="outlined"
              onClick={() => {
                setEditDialog(false);
                setProduct({
                  name: "",
                  category: "",
                  price: undefined,
                  stock: undefined,
                  id: undefined,
                });
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              onClick={editProduct}
            >
              Save
            </Button>
          </DialogActions>
        </FormControl>
      </Dialog>
      {/* Delete Dialog */}
      <Dialog
        open={deleteDialog}
        onClose={() => setDeleteDialog(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Are you sure you want to delete {product.name}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" onClick={() => setDeleteDialog(false)}>
            Cancel
          </Button>
          <Button color="secondary" onClick={deleteProduct}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Products;
