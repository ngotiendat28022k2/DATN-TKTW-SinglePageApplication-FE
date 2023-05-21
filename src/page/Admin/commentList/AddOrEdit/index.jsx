import React, { useState, useEffect } from "react";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
const initialFValues = {
  avatar: [],
  name: "",
  email: "",
  phone: "",
  address: "",
  isActive: true,
};

export default function NewSupplier(props) {
  const { recordForEdit, addOrEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("phone" in fieldValues)
      temp.phone =
        fieldValues.phone.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("address" in fieldValues)
      temp.address =
        fieldValues.address.length != 0 ? "" : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleImageChange,
    handleCheckedChange,
    resetForm,
  } = useForm(initialFValues, true, validate);
  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    addOrEdit(values, resetForm);
    // }
  };

  console.log("values", values)
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={7}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
          <Controls.Input
            label="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            label="phone"
            name="phone"
            value={values.phone}
            onChange={handleInputChange}
            error={errors.phone}
          />
          <Controls.Input
            label="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={5}>
          <UploadImage
            name="avatar"
            imageUrls={values.avatar}
            setImageUrls={handleImageChange}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                checked={Boolean(values.isActive)}
                onChange={handleCheckedChange}
                color="primary"
                name="isActive"
              />
            }
            label="Active: "
            labelPlacement="start"
          />
        </Grid>
        <Grid item xs={12}>
          <div className="text-right mt-[20px]">
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
