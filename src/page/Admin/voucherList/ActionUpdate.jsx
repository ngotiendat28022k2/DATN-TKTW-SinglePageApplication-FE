import { Delete, Update } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { useState } from "react";
// import { UpdateCategory } from "../../../slice/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const ActionUpdate = (props) => {
    const { params, openInPopup } = props;
    const dispatch = useDispatch();
    return (
        <Box>
            <Button
                variant="contained"
                color="info"
                onClick={() => openInPopup(params.row)}
            >
                <Update />
            </Button>
        </Box>
    );
};

export default ActionUpdate;
