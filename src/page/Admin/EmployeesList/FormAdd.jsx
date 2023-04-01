import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../components/AdminComponent/useForm";
import * as employeeService from "../../../services/employeeService";
// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

const initialFValues = {
  id: 0,
  name: "",
  image: "",
  description: "",
  quantity: "",
  price: "",
  sale: "",
  hireDate: new Date(),
  isPermanent: false,
};

export default function NewProduct(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("Name" in fieldValues)
      temp.name = fieldValues.Name ? "" : "This field is required.";
    if ("Image" in fieldValues)
      temp.image = fieldValues.Image ? "" : "This field is required.";
    if ("Description" in fieldValues)
      temp.description = fieldValues.Image ? "" : "This field is required.";
    if ("Quantity" in fieldValues)
      temp.quantity = fieldValues.Quantity ? "" : "This field is required.";
    if ("Price" in fieldValues)
      temp.price = fieldValues.Price ? "" : "This field is required.";
    if ("Sale" in fieldValues)
      temp.sale = fieldValues.Sale ? "" : "This field is required.";
    if ("departmentId" in fieldValues)
      temp.departmentId =
        fieldValues.departmentId.length != 0 ? "" : "This field is required.";
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

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);


  const dispatch = useDispatch();
  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Controls.Input
            name="name"
            label="Name"
            value={values.name}
            onChange={handleInputChange}
            error={errors.Name}
            {...register("name")}
          />
          <Controls.Input
            label="Image"
            name="image"
            value={values.image}
            onChange={handleInputChange}
            error={errors.Image}
          />
          <Controls.Input
            label="Description"
            name="description"
            value={values.description}
            onChange={handleInputChange}
            error={errors.Description}
          />
          <Controls.DatePicker
            name="hireDate"
            label="Hire Date"
            value={values.hireDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="Quantity"
            name="quantity"
            value={values.quantity}
            onChange={handleInputChange}
            error={errors.Quantity}
          />
          <Controls.Input
            label="Price"
            name="price"
            value={values.price}
            onChange={handleInputChange}
            error={errors.Price}
          />
          <Controls.Input
            label="Sale"
            name="sale"
            value={values.sale}
            onChange={handleInputChange}
            error={errors.Sale}
          />
          <Controls.Checkbox
            name="isPermanent"
            label="Permanent Employee"
            value={values.isPermanent}
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
}
