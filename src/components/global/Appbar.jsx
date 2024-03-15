import {
  BusinessCenterOutlined,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ColorModeContext, tokens } from "../../theme";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        ".active": { backgroundColor: colors.blueAccent[700], fontWeight: 700 },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BusinessCenterOutlined
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            ERP ADMIN
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={NavLink}
                to="/"
                activeclassname="active"
                onClick={handleCloseNavMenu}
              >
                Dashboard
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/products"
                activeclassname="active"
                onClick={handleCloseNavMenu}
              >
                Products
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/orders"
                activeclassname="active"
                onClick={handleCloseNavMenu}
              >
                Orders
              </MenuItem>
              <MenuItem
                component={NavLink}
                to="/calendar"
                activeclassname="active"
                onClick={handleCloseNavMenu}
              >
                Calendar
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            ERP ADMIN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                component={NavLink}
                to="/"
                activeclassname="active"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Dashboard
              </Button>
              <Button
                component={NavLink}
                to="/products"
                activeclassname="active"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Products
              </Button>
              <Button
                component={NavLink}
                to="/orders"
                activeclassname="active"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Orders
              </Button>
              <Button
                component={NavLink}
                to="/calendar"
                activeclassname="active"
                color="inherit"
                sx={{ mr: 2 }}
              >
                Calendar
              </Button>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box display="flex" alignItems={"center"}>
              <IconButton
                color="inherit"
                onClick={() => {
                  colorMode.toggleMode();
                }}
              >
                {theme.palette.mode === "light" ? (
                  <DarkModeOutlined />
                ) : (
                  <LightModeOutlined />
                )}
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
