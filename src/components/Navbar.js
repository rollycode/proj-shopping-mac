import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import UserIcon from "@mui/icons-material/Person4Outlined";
//import { categroiesName, companyName } from "./../styles/navbarStyle";

const Navbar = (props) => {
  const drawerWidth = 240;
  const navItems = [
    "THE EDIT",
    "NEW ARRIVALS",
    "DESIGNERS",
    "CLOTHING",
    "SHOES",
    "BAGS",
    "ACCESSORIES",
    "JEWERY",
    "BEAUTY",
    "HOME",
  ];

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SHOP BAZZAR
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center", fontFamily: "Helvetica Now Text" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <nav>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#FFFFFF", boxShadow: "none" }}
      >
        <Toolbar
          sx={{
            color: "#000000",
            backgroundColor: "#FFFFFF",
            display: "flex",
            mx: { lg: "68px", sm: "18px" },
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { sm: "flex" },
                cursor: "pointer",
                fontFamily: "Roboto",
                fontWeight: "400",
              }}
            >
              SHOPNOW.COM
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#000000",
                  fontWeight: "400",
                  fontFamily: "Helvetica Now Text",
                  ":hover": { textDecoration: "underLine" },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{ display: "flex", cursor: "pointer", alignItems: "center" }}
          >
            <SearchIcon sx={{ mr: 2 }} />
            <ShoppingCartOutlinedIcon sx={{ mr: 2 }} />
            <Box
              sx={{
                display: { xs: "none", sm: "block", lg: "flex" },
                alignItems: "center",
              }}
            >
              <UserIcon sx={{ mr: 2 }} />
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none", md: "flex", lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
