import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import cw from "../assets/cw.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { logOut } from "../helpers/firebase";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseRegister = () => {
    setAnchorEl(null);
    navigate("register");
  };
  const handleCloseLogin = () => {
    setAnchorEl(null);
    navigate("login");
  };
  const handleCloseSignOut = () => {
    setAnchorEl(null);
    logOut();
  };
  const handleCloseProfile = () => {
    setAnchorEl(null);

    navigate("profile");
  };
  const handleCloseNew = () => {
    navigate("new-blog");
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            <Link to="/">
              <img src={cw} alt="" style={{ height: "40px" }} />
            </Link>
          </Typography>

          <Typography
            variant="p"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <h2 className="line-through bg-success">
              <span>&lt;HASO BLOG/&gt;</span>
            </h2>
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentUser ? (
                <div>
                  <MenuItem onClick={handleCloseProfile}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseNew}>New</MenuItem>
                  <MenuItem onClick={handleCloseSignOut}>Logout </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem onClick={handleCloseLogin}>Login</MenuItem>
                  <MenuItem onClick={handleCloseRegister}>Register</MenuItem>
                </div>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}