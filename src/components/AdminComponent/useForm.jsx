import React, { useState } from "react";
// import { makeStyles } from "@material-ui/core";
import { styled } from "@mui/material/styles";

export function useForm(initialFValues, validateOnChange = false, validate) {
  const [values, setValues] = useState(initialFValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name, value", name, value);
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const handleChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,

      // [name]: value.map(({ _id }) => ({ id: _id })),
    });
  };
  const handleImageChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleCheckedChange = (event) => {
    const { name, checked } = event.target;
    setValues({ ...values, [name]: checked });
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
    handleChange,
    handleImageChange,
    handleCheckedChange,
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
