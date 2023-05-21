import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Ckeditor from "../../../../components/CKeditor/Ckeditor";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";

const initialFValues = {
  content: "",
  rating: 5,
  images: [],

};

export default function CreateComment(props) {
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

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    handleImageChange,
    handleChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  console.log("values", values);
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <div className="text-center">
            <Rating
              name="rating"
              value={values.rating}
              onChange={handleInputChange}
              style={{ fontSize: "35px" }}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="mt-[20px]">
            <span>Hình ảnh về sản phẩm: </span>
            <UploadImage
              name="images"
              imageUrls={values.images}
              setImageUrls={handleImageChange}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="">
            <span>Nhập nhận xét của bạn về sản phẩm: </span>
            <Ckeditor
              value={values.content}
              name="content"
              onChange={handleChange}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="text-right mt-[20px]">
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Gửi nhận xét
            </Button>
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
