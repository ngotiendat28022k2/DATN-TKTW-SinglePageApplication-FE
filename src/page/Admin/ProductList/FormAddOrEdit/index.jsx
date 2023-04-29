import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import helper from "../../../../utiliti/helper/helper";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
import Select from 'react-select'
import Ckeditor from "../../../../components/CKeditor/Ckeditor";
import { HeatPump } from "@mui/icons-material";
import FormDynamic from "../../../../components/AdminComponent/formdynamic/FormDynamic";
import { v4 as uuidv4 } from 'uuid';

const initialFValues = {
  descriptionShort:"",
  descriptionLong:"",
  name:"",
  price:undefined,
  productImage:[],
  previewImage:[],
  sale:undefined,
  quantity:"",
  isHidden:false,
  categories:[],
  publishings:[],
  formbooks:[],
  authors:[],
  supplieres:[],
  other:[
    {id: uuidv4(), k:"", v:""}
  ]
};

export default function FormAddOrEdit({recordForEdit, addOrEdit, optionCategory, optionSupplier, optionPublish, optionFormBook, optionAuthor}) {
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
  const { values, setValues, errors, setErrors, handleInputChange, handleChange, resetForm } =
    useForm(initialFValues, true, validate);

  useEffect(() => {
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit form", values);
    // if (validate()) {
      addOrEdit(values, resetForm);
    // }
  };
 
  const handleEditorChange = (name, value) => {
    setValues((prev) => ({...prev, [name]:value}))
  }
  const handleDyanmicChange = (value) => {
    setValues((prev) => ({...prev, other:value}))
  }
  const handleImageChange = (name, value) => {
    console.log("name", name)
    console.log("value", value)
    setValues((prev) => ({...prev, previewImage:value}))
  }


  
  // const filterColors = (option, inputValue) => {
  //   return option.filter((i) =>
  //     i.label.toLowerCase().includes(inputValue.toLowerCase())
  //   );
  // };
  // const loadOptions = (event) => {
  //   setTimeout(() => {
  //     console.log("event", event)
  //     // filterColors(valueCategory, e)
  //   }, 1000);
  // };
  console.log("values", values)
  return (
    <Box onSubmit={handleSubmit} width="100%">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="w-full">
              <label htmlFor="">Product Name:</label><br />
              <input
                name="name"
                type="text"
                className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                value={values.name}
                onChange={handleInputChange}
              />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-full">
          <label htmlFor="">Price:</label><br />
              <input
                className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                type="text"
                name="price"
                value={helper.maskValuePrice(values.price)}
                onChange={(e) => handleInputChange(helper.maskPrice(e)) }
              />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-full">
          <label htmlFor="">Sale:</label><br />
              <input
                className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                type="text"
                name="sale"
                value={helper.maskValuePrice(values.sale)}
                onChange={(e) => handleInputChange(helper.maskPrice(e)) }
              />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-full">
          <label htmlFor="">Quantity:</label><br />
              <input
                className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                type="text"
                name="quantity"
                value={values.quantity}
                onChange={(e) => handleInputChange(e) }
              />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
          <label htmlFor="">Image Product:</label><br />
              <UploadImage name="productImage" imageUrls={values.productImage} setImageUrls={handleImageChange}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
          <label htmlFor="">Preview Product:</label><br />
              <UploadImage name="previewImage" imageUrls={values.previewImage} setImageUrls={handleImageChange}/>
          </div>
        </Grid>
        <Grid item xs={12} >
          <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11">
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Category:</label><br />
              <Select
                name="categories"
                closeMenuOnSelect={false}
                // components={animatedComponents}
                value={values.categories}
                isMulti
                options={optionCategory}
                onChange={(value) => handleChange("categories", value)}
              />
            </div>
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Publishings:</label><br />
              <Select
                name="publishings"
                closeMenuOnSelect={false}
                // components={animatedComponents}
                value={values.publishings}
                isMulti
                options={optionPublish}
                onChange={(value) => handleChange("publishings", value)}
              />
            </div>
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Supplieres:</label><br />
              <Select
                name="supplieres"
                closeMenuOnSelect={false}
                // components={animatedComponents}
                value={values.supplieres}
                isMulti
                options={optionSupplier}
                onChange={(value) => handleChange("supplieres", value)}
              />
            </div>
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Formbook:</label><br />
              <Select
                name="formbooks"
                closeMenuOnSelect={false}
                // components={animatedComponents}
                value={values.formbooks}
                isMulti
                options={optionFormBook}
                onChange={(value) => handleChange("formbooks", value)}
              />
            </div>
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Author:</label><br />
              <Select
                name="authors"
                closeMenuOnSelect={false}
                // components={animatedComponents}
                value={values.authors}
                isMulti
                options={optionAuthor}
                onChange={(value) => handleChange("authors", value)}
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
          <label htmlFor="">Description Short:</label><br />
            <Ckeditor value={values.descriptionShort} name="shortDescription" onChange={handleEditorChange}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
          <label htmlFor="">Description Long:</label><br />
            <Ckeditor value={values.descriptionLong} name="longDescription" onChange={handleEditorChange}/>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
          <label htmlFor="">More detailed description:</label><br />
          <div>
            <FormDynamic name="other" inputFields={values.other} setInputFields={handleDyanmicChange}  />
          </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="text-right mt-[30px]">
            <Controls.Button type="submit" text="Submit" onClick={handleSubmit} />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
       
      </Grid>
    </Box>
  );
}
