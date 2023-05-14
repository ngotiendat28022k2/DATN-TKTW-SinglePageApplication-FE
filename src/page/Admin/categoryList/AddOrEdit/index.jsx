import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";

const initialFValues = {
    id: 0,
    name: "",
    image: [],
    icon: "",
};

export default function NewCategory(props) {
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
            temp.name = fieldValues.name ? "" : "Name is required.";
        if ("icon" in fieldValues) {
            temp.icon = fieldValues.icon ? "" : "Icon is required.";
        }
        if ("image" in fieldValues) {
            console.log(fieldValues.image);
            temp.image =
                fieldValues.image.length > 0 ? "" : "Image is required.";
        }
        console.log("temp", temp);
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
        resetForm,
    } = useForm(initialFValues, true, validate);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    };

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
                        label="Icon"
                        name="icon"
                        value={values.icon}
                        onChange={handleInputChange}
                        error={errors.icon}
                    />
                </Grid>
                <Grid item xs={5}>
                    <UploadImage
                        name="image"
                        imageUrls={values.image}
                        setImageUrls={handleImageChange}
                    />
                    <span className="ml-[20px] text-red-600 text-[12px]">
                        {errors && errors.image}
                    </span>
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
