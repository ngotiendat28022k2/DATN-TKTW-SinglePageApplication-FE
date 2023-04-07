import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";

const initialFValues = {
  view: "",
  description: "",
  name: "",
  price: "",
  purchases: "",
  image: "",
  images: "",
  sale: "",
  quantity: "",
  isHidden: "",
  categorieId: "",
  publishingHousId: "",
  formBookId: "",
  authorId: "",
  supplieresId: "",
};

export default function FormAddOrEdit(props) {
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

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form");
    // if (validate()) {
      addOrEdit(values, resetForm);
    // }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <div className="w-full">
            <label htmlFor=""></label>
            <input
              type="text"
              className="w-full py-[7px] border-[2px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[2px] transition-all"
              placeholder="name"
              value={values.name}
            />
          </div>

          <div className="text-right mt-[30px]">
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
