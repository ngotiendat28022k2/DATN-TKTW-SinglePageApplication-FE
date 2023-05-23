import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
import Select from "react-select";
const initialFValues = {
    name: "",
    image: [],
    author: "",
    publishing: "",
    categories: [],
};

export default function FormAddOrEdit({
    recordForEdit,
    addOrEdit,
    optionCategories,
}) {
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "Full name is required.";
        if ("author" in fieldValues) {
            temp.author = fieldValues.author ? "" : "Author is required.";
        }
        if ("publishing" in fieldValues) {
            temp.publishing = fieldValues.publishing
                ? ""
                : "Publishing is required.";
        }
        if ("image" in fieldValues)
            temp.image =
                fieldValues.image.length > 0 ? "" : "Image is required.";
        if ("categories" in fieldValues)
            temp.categories =
                fieldValues.categories.length > 0
                    ? ""
                    : "Category is required.";
        console.log(temp);
        setErrors({
            ...temp,
        });

        if (fieldValues == values)
            return Object.values(temp).every((x) => x == "");
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

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit,
            });
    }, [recordForEdit]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    };
    console.log("lmm", values);
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <div className="w-full mb-5">
                        <label htmlFor="">Name:</label>
                        <br />
                        <input
                            name="name"
                            type="text"
                            className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            value={values.name}
                            onChange={handleInputChange}
                        />
                        <br />
                        <span className="text-red-600 mt-2">{errors.name}</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-[90%] mb-5">
                        <label htmlFor="">Author:</label>
                        <br />
                        <input
                            name="author"
                            type="text"
                            className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            value={values.author}
                            onChange={handleInputChange}
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.author}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-[90%] mb-5 float-right">
                        <label htmlFor="">Publishing:</label>
                        <br />
                        <input
                            name="publishing"
                            type="text"
                            className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            value={values.publishing}
                            onChange={handleInputChange}
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.publishing}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11 mb-3">
                        <div className="w-full">
                            <label htmlFor="">Categories:</label>
                            <br />
                            <Select
                                name="categories"
                                // closeMenuOnSelect={false}
                                value={values.categories.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionCategories}
                                onChange={(value) => {
                                    console.log("mmm", value),
                                        handleChange("categories", value);
                                }}
                            />
                            <span className="text-red-600">
                                {errors.categories}
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <UploadImage
                        name="image"
                        imageUrls={values.image}
                        setImageUrls={handleImageChange}
                    />
                    <span className="ml-[20px] text-red-600 text-[12px]">
                        {errors.image}
                    </span>
                </Grid>
                <Grid item xs={14}>
                    <div className="text-right mt-[30px]">
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button text="Reset" onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
}
