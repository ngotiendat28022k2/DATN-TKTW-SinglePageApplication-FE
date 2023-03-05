import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
const MyForm = styled("form")(({ theme }) => ({
  width: "800px",
  "& .MuiFormControl-root": {
    width: "80%",
    margin: theme.spacing(1),
  },
}));

export function Form(props) {
  // const classes = useStyles;
  const { children, ...other } = props;
  return (
    <MyForm autoComplete="off" {...other}>
      {props.children}
    </MyForm>
  );
}
