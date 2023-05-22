import React, { useState, useEffect } from "react";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import Select from "../../../../components/AdminComponent/controls/Select";
import Ckeditor from "../../../../components/CKeditor/Ckeditor";
import helper from "../../../../utiliti/helper/helper";
// import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";

const initialFValues = {
    code: "",
    discount: undefined,
    createdAt: Date,
    expirationDate: Date,
    usageLimit: undefined,
    usedCount: undefined,
    description: "",
    user: [],
    isActive: true,
};

export default function NewVoucher({ recordForEdit, addOrEdit, optionUser }) {
    // const { recordForEdit, addOrEdit, optionUser } = props;
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit,
            });
    }, [recordForEdit]);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("code" in fieldValues)
            temp.code = fieldValues.code ? "" : "Code is required.";
        // if ("icon" in fieldValues) {
        //     temp.icon = fieldValues.icon ? "" : "Icon is required.";
        // }
        // if ("image" in fieldValues) {
        //     console.log(fieldValues.image);
        //     temp.image =
        //         fieldValues.image.length > 0 ? "" : "Image is required.";
        // }
        // console.log("temp", temp);
        // if ("user" in fieldValues) {
        //     console.log(temp);
        //     temp.user = fieldValues.user.length > 0 ? "" : "User is required.";
        // }
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
        handleChange,
        handleInputChange,
        handleCheckedChange,
        handleImageChange,
        resetForm,
    } = useForm(initialFValues, true, validate);
    // console.log("values-use", use);
    const handleEditorChange = (name, value) => {
        setValues((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    };
    // console.log("value", values);

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <div className="w-full">
                        <label htmlFor="">Code:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="code"
                            value={values.code}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <br />
                        <span className="text-red-600 mt-2">{errors.code}</span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-full">
                        <label htmlFor="">Discount:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="discount"
                            value={helper.maskValuePrice(values.discount)}
                            onChange={(e) =>
                                handleInputChange(helper.maskPrice(e))
                            }
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.discount}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-full pt-[20px]">
                        <label htmlFor="">Usage Limit:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="text"
                            name="usageLimit"
                            value={helper.maskValuePrice(values.usageLimit)}
                            onChange={(e) =>
                                handleInputChange(helper.maskPrice(e))
                            }
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.usageLimit}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="w-full pt-[20px]">
                        <label htmlFor="">Expiration Date:</label>
                        <br />
                        <input
                            className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
                            type="date"
                            name="expirationDate"
                            value={helper.formatDate(values.expirationDate)}
                            onChange={(e) =>
                                handleChange(
                                    "expirationDate",
                                    helper.formatDate(e.target.value)
                                )
                            }
                        />
                        <br />
                        <span className="text-red-600 mt-2">
                            {errors.expirationDate}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="w-full mt-[20px]">
                        <label htmlFor="">Description:</label>
                        <br />
                        <Ckeditor
                            value={values.description}
                            name="description"
                            onChange={handleEditorChange}
                        />
                        <span className="text-red-600">
                            {errors.description}
                        </span>
                    </div>
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
                {/* <Grid item xs={12}>
                    <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11 mt-[20px]">
                        <div className="w-full max-w-[250px] ">
                            <label htmlFor="">User:</label>
                            <br />
                            <Select
                                name="user"
                                closeMenuOnSelect={false}
                                // components={animatedComponents}
                                value={values.user?.map((a) => ({
                                    ...a,
                                    label: a.email,
                                    value: a.email,
                                }))}
                                isMulti
                                options={optionUser}
                                onChange={(value) =>
                                    handleChange("user", value)
                                }
                            />
                            <span className="text-red-600">{errors.user}</span>
                        </div>
                    </div>
                </Grid> */}
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
