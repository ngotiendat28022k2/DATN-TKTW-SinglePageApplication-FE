import React, { useState, useEffect } from "react";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
const initialFValues = {
  content: "",
  rating: "",
  isActive: true,
};

export default function NewSupplier(props) {
  const { recordForEdit, addOrEdit } = props;
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("rating" in fieldValues)
      temp.rating = fieldValues.rating ? "" : "This field is required.";
      if ("content" in fieldValues)
      temp.content = fieldValues.content ? "" : "This field is required.";
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
    console.log("submit form", values);
    if (validate()) {
        addOrEdit(values, resetForm);
    }
};

  console.log("values", values)
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={7}>
          <Controls.Input
            name="rating"
            label="Đánh giá"
            value={values.rating}
            onChange={handleInputChange}
            error={errors.rating}
          />
          <Controls.Input
            label="Nội dung bình luận"
            name="content"
            value={values.content}
            onChange={handleInputChange}
            error={errors.content}
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
