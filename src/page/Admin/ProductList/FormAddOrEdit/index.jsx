import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import helper from "../../../../utiliti/helper/helper";
import { useDispatch } from "react-redux";
import {getAllCategory} from "../../../../slice/categoorySlide"
import CreatableSelect from 'react-select/creatable';

const initialFValues = {
  view:"",
  description:"",
  name:"",
  price:"",
  purchases:"",
  productImage:"",
  previewImage:"",
  sale:0,
  quantity:"",
  isHidden:false,
  categorieId:"",
  publishingHousId:"",
  formBookId:"",
  authorId:"",
  supplieresId:""
};

export default function FormAddOrEdit(props) {
  const { recordForEdit, addOrEdit } = props;
  const {valueCategory, setValueCategory} = useState([])
  const dispatch = useDispatch()
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
  useEffect(() => {
    (async() => {
      try {
        const {payload} = await dispatch(getAllCategory())
        if(payload.data?.success){
          setValueCategory(payload.data.data)
        }
        if(payload.data?.errorCode){
        helper.toast("error",payload.data.message )
      }
    } catch (error) {
      helper.toast("error", "Error get data")
    }
  })()
}, [])
  const filterColors = (option, inputValue) => {
    return option.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const loadOptions = (event) => {
    setTimeout(() => {
      console.log("event", event)
      // filterColors(valueCategory, e)
    }, 1000);
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={12}>
        <div className="flex justify-start items-start">
        <div className="w-[50%]">
          <div className="w-full">
            <label htmlFor="Book name">Book Name</label><br />
            <input
              name="name"
              type="text"
              className="w-full mt-[10px] py-[7px] border-[2px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[2px] transition-all"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-between items-start mt-[20px]">
          <div className="w-full max-w-[250px] ">
            <label htmlFor="Book name">Category</label><br />
            {/* <CreatableSelect isClearable options={colourOptions} />; */}
          </div>
        <div className="max-w-[200px] w-full">
        <label htmlFor="Book name">Publishing Hous</label><br />
        {/* <CreatableSelect isClearable options={colourOptions} />; */}
        </div>
          </div>
          </div>
          <div className="w-[50%]"></div>
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
