import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";
import Login from "../Login";

const drawerWidth = 240;
const navItems = ["Home", "Stays", "Flights", "Packages"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        trxvl.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ marginLeft: "47px", marginTop: "24px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: "bold",
            }}
          >
            trxvl.
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item}
                style={{
                  color: "#fff",
                  opacity: "0.7",
                  textDecoration: "none",
                  padding: "0 15px",
                }}
                to={"/" + item}
              >
                {item}
              </NavLink>
            ))}
            <Button
              onClick={props.handleOpen}
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                color: "#fff",
                opacity: "0.8",
                margin: "0 50px 0 10px",
                textTransform: "none",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
      </Box>
      <Modal open={props.open} onClose={props.handleClose}>
        <Login />
      </Modal>
    </Box>
  );
}
export default Navbar;
