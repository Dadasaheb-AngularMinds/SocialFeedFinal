import React from "react";
import "./Navbar.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logout } from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import { Avatar, Box, Button } from "@mui/material";

export type NavbarProps = {
  /**
   * To be triggered on logout click
   */
  onLogout?: any;
};

export const Navbar = ({ onLogout }: NavbarProps) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{ flex: 1 }}
        >
          MUI Template
        </Typography>
        <Tooltip title="Logout">
          <Button variant="text" style={{ color: '#fff' }} onClick={onLogout}>
            <Logout />
          </Button>
        </Tooltip>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Avatar
              id="basic-button"
              // aria-controls={open ? 'basic-menu' : undefined}
              // aria-haspopup="true"
              // aria-expanded={open ? 'true' : undefined}
              // style={{marginTop:"10px",marginRight:"10px"}}
              // onClick={handleClick}
              // title={`Hello ${userObj.data.firstname}`}
              >
                {/* {userObj.data.firstname[0]} */}
                {/* {userObj.profilePicture ?
                <img src={userObj.profilePicture} />  :userObj.firstname[0]}   */}
                </Avatar>
                {/* <h3>{`Hello ${userObj.firstname} ${userObj.lastname}`}</h3> */}
          </Box>
      </Toolbar>
    </AppBar>
  );
};
