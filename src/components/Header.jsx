import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import EcoletaImage from "../assets/Ecoleta.png"

const Header = () => {
  return (
    <AppBar position="static" style={{background: 'lightgray'}}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={EcoletaImage} alt="Ecoleta" style={{ height: "50px", marginRight: "10px" }} />

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
