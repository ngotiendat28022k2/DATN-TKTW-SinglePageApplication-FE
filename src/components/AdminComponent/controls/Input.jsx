import React from "react";
import { TextField } from "@mui/material";

export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        placeholder: " ", // Đặt placeholder là một khoảng trắng
      }}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
