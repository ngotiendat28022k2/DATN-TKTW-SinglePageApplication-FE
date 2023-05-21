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
    console.log("values", values);
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
                {/* <Grid item xs={6}>
                    <div className="w-full">
                        <label htmlFor="">Price:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="price"
                            value={helper.maskValuePrice(values.price)}
                            onChange={(e) =>
                                handleInputChange(helper.maskPrice(e))
                            }
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.price}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-full">
                        <label htmlFor="">Sale:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="sale"
                            value={helper.maskValuePrice(values.sale)}
                            onChange={(e) =>
                                handleInputChange(helper.maskPrice(e))
                            }
                        />
                        <br />
                        <span className="text-red-600 mt-2">{errors.sale}</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-full">
                        <label htmlFor="">Quantity:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="quantity"
                            value={values.quantity}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.quantity}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">Image Product:</label>
                        <br />
                        <UploadImage
                            name="productImage"
                            imageUrls={values.productImage}
                            setImageUrls={handleImageChange}
                        />
                        <span className="text-red-600">
                            {errors.productImage}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">Preview Product:</label>
                        <br />
                        <UploadImage
                            name="previewImage"
                            imageUrls={values.previewImage}
                            setImageUrls={handleImageChange}
                        />
                        <span className="text-red-600">
                            {errors.previewImage}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11">
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Category:</label>
                            <br />
                            <Select
                                name="categories"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.categories.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionCategory}
                                onChange={(value) =>
                                    handleChange("categories", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.categories}
                            </span>
                        </div>
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Publishings:</label>
                            <br />
                            <Select
                                name="publishings"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.publishings.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionPublish}
                                onChange={(value) =>
                                    handleChange("publishings", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.publishings}
                            </span>
                        </div>
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Supplieres:</label>
                            <br />
                            <Select
                                name="supplieres"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.supplieres.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionSupplier}
                                onChange={(value) =>
                                    handleChange("supplieres", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.supplieres}
                            </span>
                        </div>
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Formbook:</label>
                            <br />
                            <Select
                                name="formbooks"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.formbooks.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionFormBook}
                                onChange={(value) =>
                                    handleChange("formbooks", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.formbooks}
                            </span>
                        </div>
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">Author:</label>
                            <br />
                            <Select
                                name="authors"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.authors.map((a) => ({
                                    ...a,
                                    label: a.name,
                                    value: a.name,
                                }))}
                                isMulti
                                options={optionAuthor}
                                onChange={(value) =>
                                    handleChange("authors", value)
                                }
                            />
                            <span className="text-red-600">
                                {errors.authors}
                            </span>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">Description Short:</label>
                        <br />
                        <Ckeditor
                            value={values.descriptionShort}
                            name="descriptionShort"
                            onChange={handleEditorChange}
                        />
                        <span className="text-red-600">
                            {errors.descriptionShort}
                        </span>
                    </div>
                </Grid> */}
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
                {/* <Grid item xs={12}>
                    <div className="w-full">
                        <label htmlFor="">More detailed description:</label>
                        <br />
                        <div>
                            <FormDynamic
                                name="other"
                                inputFields={values.other}
                                setInputFields={handleDyanmicChange}
                            />
                        </div>
                    </div>
                </Grid> */}
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
