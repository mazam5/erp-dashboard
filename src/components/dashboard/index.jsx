import {
  AddShoppingCartOutlined,
  AddShoppingCartRounded,
  DownloadOutlined,
  PointOfSaleSharp,
  RemoveRedEye,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import StatBox from "../StatBox";
import Header from "../global/Header";
import { useSelector } from "react-redux";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { barData, pieData } from "../../data";
import { Link } from "react-router-dom";

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const products = useSelector((state) => state.products);
  const orders = useSelector((state) => state.orders);

  return (
    <Box mx="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to the dashboard" />
        <Button
          variant="contained"
          sx={{
            background: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlined sx={{ color: colors.grey[100], mr: "10px" }} />
          <Typography variant="h5" sx={{ color: colors.grey[100] }}>
            Download Report
          </Typography>
        </Button>
      </Box>
      {/* Grid */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap={15}
      >
        {/* Row 1 */}
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <PointOfSaleSharp
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
            title="1,250,000"
            subtitle="Total Sales"
            progress="0.75"
            increase="+15%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <RemoveRedEye
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
            title="25,000"
            subtitle="Visitors"
            progress="0.5"
            increase="+10%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <AddShoppingCartOutlined
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
            title="5,000"
            subtitle="Orders"
            progress="0.85"
            increase="+20%"
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor={colors.primary[400]}
          borderRadius="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            icon={
              <AddShoppingCartRounded
                sx={{ fontSize: "26px", color: colors.greenAccent[600] }}
              />
            }
            title="3,000"
            subtitle="Products"
            progress="0.65"
            increase="+25%"
          />
        </Box>
      </Box>
      <Box my="20px">
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="300px"
          gap={15}
        >
          <Box
            gridColumn="span 8"
            bgcolor={colors.primary[400]}
            borderRadius="10px"
          >
            <ResponsiveBar
              data={barData}
              keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
              ]}
              indexBy="country"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "fries",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "sandwich",
                  },
                  id: "lines",
                },
              ]}
              borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: 32,
                truncateTickAt: 0,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
                legendPosition: "middle",
                legendOffset: -40,
                truncateTickAt: 0,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              }
            />
          </Box>
          <Box
            gridColumn="span 4"
            bgcolor={colors.primary[400]}
            borderRadius="10px"
          >
            <ResponsivePie
              data={pieData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{
                from: "color",
                modifiers: [["darker", 0.2]],
              }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 2]],
              }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "rgba(255, 255, 255, 0.3)",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: colors.grey[100],
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "ruby",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "c",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "go",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "python",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "scala",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "lisp",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "elixir",
                  },
                  id: "lines",
                },
                {
                  match: {
                    id: "javascript",
                  },
                  id: "lines",
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box width="100%" mr="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
              Recent Orders
            </Typography>
            <Link to="/orders" style={{ color: "inherit" }}>
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                View All
              </Button>
            </Link>
          </Box>
          {orders.slice(0, 3).map((order, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor={colors.primary[400]}
              borderRadius="10px"
              p="10px"
              my="10px"
            >
              <Box>
                <Typography variant="h5" color={colors.grey[100]}>
                  {order.items.map((item) => item.name).join(", ")}
                </Typography>
                <Typography variant="h6" color={colors.grey[100]}>
                  {order.customer} - {order.deliveryDate}
                </Typography>
              </Box>
              <Typography variant="h5" color={colors.grey[100]}>
                {order.total}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box width="100%" ml="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
              Top Selling Products
            </Typography>
            <Link to="/products" style={{ color: "inherit" }}>
              <Button
                variant="contained"
                sx={{
                  background: colors.blueAccent[700],
                  color: colors.grey[100],
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 20px",
                }}
              >
                View All
              </Button>
            </Link>
          </Box>
          {products.slice(0, 3).map((product, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              bgcolor={colors.primary[400]}
              borderRadius="10px"
              p="10px"
              my="10px"
            >
              <Box>
                <Typography variant="h5" color={colors.grey[100]}>
                  {product.name}
                </Typography>
                <Typography variant="h6" color={colors.grey[100]}>
                  {product.category}
                </Typography>
              </Box>
              <Typography variant="h5" color={colors.grey[100]}>
                {product.price}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Dashboard;
