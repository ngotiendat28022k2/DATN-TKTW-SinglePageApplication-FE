import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import helper from "../../../../utiliti/helper/helper";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
import Select from "react-select";
import Ckeditor from "../../../../components/CKeditor/Ckeditor";
import { HeatPump } from "@mui/icons-material";
import FormDynamic from "../../../../components/AdminComponent/formdynamic/FormDynamic";
import { v4 as uuidv4 } from "uuid";

const initialFValues = {
    html: "",
    title: "",
    categoryInfor: [],
};

export default function FormAddOrEdit({
    recordForEdit,
    addOrEdit,
    optioncategoryInfor,
}) {
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("title" in fieldValues)
            temp.title = fieldValues.title ? "" : "Title is required.";
        if ("html" in fieldValues) {
            temp.html = fieldValues.html ? "" : "HTML is required.";
        }
        if ("categoryInfor" in fieldValues) {
            console.log(temp);
            temp.categoryInfor =
                fieldValues.categoryInfor.length > 0
                    ? ""
                    : "Category Information is required.";
        }

        setErrors({
            ...temp,
        });
        console.log("temp", temp);
        if (fieldValues == values)
            return Object.values(temp).every((x) => x == "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleChange,
        handleImageChange,
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

    const handleEditorChange = (name, value) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    console.log("submit formssss", values);
    return (
        <Box onSubmit={handleSubmit} width="100%">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">Title:</label>
                        <br />
                        <input
                            name="title"
                            type="text"
                            className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            value={values.title}
                            onChange={handleInputChange}
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.title}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">HTML:</label>
                        <br />
                        <Ckeditor
                            value={values.html}
                            name="html"
                            onChange={handleEditorChange}
                        />
                        <span className="text-red-600">{errors.html}</span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11">
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Category Information:</label>
                            <br />
                            <Select
                                name="categoryInfor"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.categoryInfor.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optioncategoryInfor}
                                onChange={(value) =>
                                    handleChange("categoryInfor", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.categoryInfor}
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="text-right mt-[30px]">
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            onClick={handleSubmit}
                        />
                        <Controls.Button text="Reset" onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
}
