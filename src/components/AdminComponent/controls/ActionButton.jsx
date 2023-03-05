import { styled } from "@mui/material/styles";
import React from "react";

const MyActionBtn = styled("button")(({ theme }) => ({
  "& .MuiButton-label": {
    color: theme.palette.secondary.main,
  },
}));

export default function ActionButton(props) {
  const { color, children, onClick } = props;
  // const classes = MyActionBtn;

  return (
    <MyActionBtn
      sx={{ minWidth: 0, margin: 0.5 }}
      color={[color]}
      onClick={onClick}
    >
      {children}
    </MyActionBtn>
  );
}
