import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import Controls from "../../../../components/AdminComponent/controls/Controls";
import { useForm, Form } from "../../../../components/AdminComponent/useForm";

const initialFValues = {
    name: "",
    email: "",
    phone: "",
    address: "",
};

export default function NewSupplier(props) {
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
            temp.name = fieldValues.name ? "" : "Full name is required.";
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
                    <Controls.Input
                        name="name"
                        label="Full Name"
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

                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button text="Reset" onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    );
    //   return(
    //     <div>
    //       newEmployees
    //     </div>
    //   )
}
