import React, { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../components/AdminComponent/useForm";
import * as employeeService from "../../../services/employeeService";

const initialFValues = {
  id: 0,
  name: "",
  image: "",
  icon: "",
  banner: "",
};

export default function NewCategory(props) {
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    // if ("image" in fieldValues)
    //   temp.image = /$^|.+@.+..+/.test(fieldValues.image)
    //     ? ""
    //     : "image is not valid.";
    // if ("icon" in fieldValues)
    //   temp.icon =
    //     fieldValues.icon.length > 9 ? "" : "Minimum 10 numbers required.";
    // if ("banner" in fieldValues)
    //   temp.banner =
    //     fieldValues.banner.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={"100%"}>
          <Controls.Input
            name="name"
            label="Full Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="image"
            name="image"
            value={values.image}
            onChange={handleInputChange}
            error={errors.image}
          />
          <Controls.Input
            label="icon"
            name="icon"
            value={values.icon}
            onChange={handleInputChange}
            error={errors.icon}
          />
          <Controls.Input
            label="banner"
            name="banner"
            value={values.banner}
            onChange={handleInputChange}
          />

          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
  //   return(
  //     <div>
  //       newEmployees
  //     </div>
  //   )
}
