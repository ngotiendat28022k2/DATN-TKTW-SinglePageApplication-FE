import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import * as employeeService from "../../../../services/employeeService";

const initialFValues = {
  id: 0,
  name: "",
  image: "",
  icon: "",
  banner: "",
};

export default function NewCategory(props) {
  const { recordForEdit, addOrEdit } = props;
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    // if ("email" in fieldValues)
    //   temp.email = /$^|.+@.+..+/.test(fieldValues.email)
    //     ? ""
    //     : "Email is not valid.";
    // if ("phone" in fieldValues)
    //   temp.phone =
    //     fieldValues.phone.length > 9 ? "" : "Minimum 10 numbers required.";
    // if ("address" in fieldValues)
    //   temp.address =
    //     fieldValues.address.length != 0 ? "" : "This field is required.";
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
        <Grid item xs={12}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Image"
            name="image"
            value={values.image}
            onChange={handleInputChange}
            error={errors.image}
          />
          <Controls.Input
            label="Icon"
            name="icon"
            value={values.icon}
            onChange={handleInputChange}
            error={errors.icon}
          />
          <Controls.Input
            label="Banner"
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
