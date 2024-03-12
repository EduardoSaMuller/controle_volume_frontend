import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Legend = ({ color, text }) => {
  return (
    <Box display="flex" alignItems="center" marginBottom="5px">
      <DeleteIcon style={{ color: color, marginRight: "5px" }} />
      <Typography variant="body2">{text}</Typography>
    </Box>
  );
};

export default Legend;
