import { Button as MuiButton } from "@mui/material";
import React from "react";

export default function Button(props) {
  const { text, size, color, variant, onClick, ...other } = props;

  return (
    <MuiButton
      variant={variant || "contained"}
      size={size || "large"}
      color={color || "primary"}
      sx={{ margin: 0.5, textTransform: "none" }}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  );
}
