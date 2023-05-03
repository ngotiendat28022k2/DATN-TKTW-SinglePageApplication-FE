import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload"
const initialFValues = {
  name: "",
  avatar:[]
};

export default function NewSupplier(props) {
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
    
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, handleImageChange, resetForm } =
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
          <UploadImage name="avatar" imageUrls={values.avatar} setImageUrls={handleImageChange}/>
        </Grid>
        <Grid item xs={12}>
          <Controls.Input
            name="name"
            label="Full Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
          />
        </Grid>
        <Grid item xs={12}>
        <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
      </Grid>
      </Grid>
    </Form>
  );
}
