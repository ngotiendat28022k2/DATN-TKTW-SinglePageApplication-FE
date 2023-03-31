import React from 'react'
import { InputAdornment } from "@mui/material";
import Controls from "../../../components/AdminComponent/controls/Controls";
import { Search } from "@mui/icons-material";
const InputSearch = ({handleSearch}) => {
  return (
    <Controls.Input
            label="Search Employees"
            sx={{ width: "75%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
    />
  )
}

export default InputSearch