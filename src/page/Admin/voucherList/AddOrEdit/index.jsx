import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";
import helper from "../../../../utiliti/helper/helper";
import Ckeditor from "../../../../components/CKeditor/Ckeditor";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const initialFValues = {
    code: "",
    discount: null,
    createdAt: "",
    expirationDate: null,
    usageLimit: 1,
    usedCount: 0,
    description: "",
    isActive: false
};

export default function NewVoucher(props) {
    const { recordForEdit, addOrEdit } = props;

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("code" in fieldValues)
            temp.code = fieldValues.code ? "" : "Code is required.";

        if ("discount" in fieldValues)
            temp.discount = fieldValues.discount ? "" : "Discount is required.";

        if ("expirationDate" in fieldValues)
            temp.expirationDate = fieldValues.expirationDate
                ? ""
                : "Expiration Date is required.";

        if ("createdAt" in fieldValues)
            temp.createdAt = fieldValues.createdAt ? "" : "Created At is required.";

        if ("usageLimit" in fieldValues)
            temp.usageLimit = fieldValues.usageLimit ? "" : "Usage Limit is required.";

        if ("usedCount" in fieldValues)
            temp.usedCount = fieldValues.usedCount ? "" : "Used Count is required.";

        if ("description" in fieldValues)
            temp.description = fieldValues.description
                ? ""
                : "Description is required.";

        setErrors({
            ...temp,
        });

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleChangeDate,
        handleChange,
        resetForm,
    } = useForm(initialFValues, true, validate);

    useEffect(() => {
        if (recordForEdit != null) {
            setValues({
                ...recordForEdit,
            });
        }
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
                <Grid item xs={12}>
                    <Controls.Input
                        name="code"
                        label="Code"
                        value={values.code}
                        onChange={handleInputChange}
                        error={errors.code}
                    />

                    <Controls.Input
                        name="discount"
                        label="Discount"
                        value={helper.maskValuePrice(values.discount)}
                        onChange={handleInputChange}
                        error={errors.discount}
                    />

                    <Controls.Input
                        name="createdAt"
                        label="Created At"
                        type="date"
                        value={values.createdAt}
                        onChange={handleInputChange}
                        error={errors.createdAt}
                    />

                    <Controls.Input
                        name="expirationDate"
                        label="expirationDate"
                        type="date"
                        value={values.expirationDate}
                        onChange={handleInputChange}
                        error={errors.expirationDate}
                    />

                    <Controls.Input
                        name="usageLimit"
                        label="Usage Limit"
                        value={helper.maskValuePrice(values.usageLimit)}
                        onChange={handleInputChange}
                        error={errors.usageLimit}
                    />

                    <Controls.Input
                        name="usedCount"
                        label="Used Count"
                        value={values.usedCount}
                        onChange={handleInputChange}
                        error={errors.usedCount}
                    />

                    <div>
                        <label htmlFor="">Description:</label>
                        <Ckeditor
                            value={values.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </div>

                    <Controls.Input
                        name="isActive"
                        label="Active"
                        value={helper.maskValuePrice(values.isActive)}
                        onChange={handleInputChange}
                        error={errors.isActive}
                    />

                    <div className="text-right">
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button text="Reset" onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
}
