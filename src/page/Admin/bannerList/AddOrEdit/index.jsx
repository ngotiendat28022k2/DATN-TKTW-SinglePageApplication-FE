import React, { useState, useEffect } from "react";
import { FormControlLabel, Grid, Switch } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import UploadImage from "../../../../components/AdminComponent/uploadImg/upload";
const initialFValues = {
    image: [],
    link: "",
    isHidden: false
};

export default function NewBanner(props) {
    const { recordForEdit, addOrEdit } = props;
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit,
            });
    }, [recordForEdit]);
    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("link" in fieldValues)
            temp.link = fieldValues.link ? "" : "Link is required.";
        if ("image" in fieldValues)
            temp.image =
                fieldValues.image.length > 0 ? "" : "Image is required.";
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
        handleCheckedChange,
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
                <Grid item xs={12}>
                    <Controls.Input
                        name="link"
                        label="Link"
                        value={values.link}
                        onChange={handleInputChange}
                        error={errors.link}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Switch
                                defaultChecked
                                checked={Boolean(values.isHidden)}
                                onChange={handleCheckedChange}
                                color="primary"
                                name="isHidden"
                            />
                        }
                        label="Hidden: "
                        labelPlacement="start"
                    />
                </Grid>
                <Grid item xs={14}>
                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button text="Reset" onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
}
