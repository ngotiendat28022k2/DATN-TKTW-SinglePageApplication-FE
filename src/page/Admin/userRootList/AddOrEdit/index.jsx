import React, { useState, useEffect } from "react";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
const initialFValues = {
    avatar: [],
    name: "",
    email: "",
    phone: "",
    address: "",
    isActive: true,
};

export default function NewSupplier(props) {
    const { recordForEdit, addOrEdit } = props;
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("name" in fieldValues)
            temp.name = fieldValues.name ? "" : "Name is required.";
        if ("email" in fieldValues) {
            if (!fieldValues.email) {
                temp.email = "Email is required.";
            } else if (
                !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                    fieldValues.email
                )
            ) {
                temp.email = "Email is not valid.";
            } else {
                temp.email = "";
            }
        }
        if ("phone" in fieldValues) {
            if (!fieldValues.phone) {
                temp.phone = "Phone number is required.";
            } else if (!/^\d+$/.test(fieldValues.phone)) {
                temp.phone = "Phone number must only contain numbers.";
            } else if (fieldValues.phone.length < 10) {
                temp.phone = "Phone number must contain at least 10 digits.";
            } else {
                temp.phone = "";
            }
        }
        if ("address" in fieldValues)
            temp.address = fieldValues.address ? "" : "Address is required.";
        if ("avatar" in fieldValues)
            temp.avatar =
                fieldValues.avatar.length != 0 ? "" : "Avatar is required.";
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
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    };

    console.log("values", values);
    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={7}>
                    <Controls.Input
                        name="name"
                        label="Name"
                        value={values.name}
                        onChange={handleInputChange}
                        error={errors.name}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="phone"
                        name="phone"
                        value={values.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                    />
                    <Controls.Input
                        label="Address"
                        name="address"
                        value={values.address}
                        onChange={handleInputChange}
                        error={errors.address}
                    />
                </Grid>
                <Grid item xs={5}>
                    <UploadImage
                        name="avatar"
                        imageUrls={values.avatar}
                        setImageUrls={handleImageChange}
                    />
                    <span className="ml-[20px] text-red-600 text-[12px]">
                        {errors.avatar}
                    </span>
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
