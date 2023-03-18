import React, { useState } from "react";
// import "./productList.css";
import { Search, Add, EditOutlined, Close } from "@mui/icons-material";
import {
  Paper,
  makeStyles,
  TableBody,
  TableRow,
  TableCell,
  Toolbar,
  InputAdornment,
} from "@mui/material";
import useTable from "../../../components/AdminComponent/useTable";
import Controls from "../../../components/AdminComponent/controls/Controls";
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
import NewProduct from "../newEmployees";
// Services
import * as employeeService from "../../../services/employeeService";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const useStyles = makeStyles((theme) => ({
//   pageContent: {
//     margin: theme.spacing(5),
//     padding: theme.spacing(3),
//   },
//   searchInput: {
//     width: "75%",
//   },
//   newButton: {
//     position: "absolute",
//     right: "10px",
//   },
// }));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email Address (Personal)" },
  { id: "mobile", label: "Mobile Number" },
  { id: "department", label: "Department" },
  { id: "actions", label: "Actions", disableSorting: true },
];

export default function ProductList() {
  // const [data, setData] = useState(productRows);
  // const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  const addOrEdit = (employee, resetForm) => {
    if (employee.id == 0) employeeService.insertEmployee(employee);
    else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
  };

  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  // function CustomPagination() {
  //   const apiRef = useGridApiContext();
  //   const page = useGridSelector(apiRef, gridPageSelector);
  //   const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  //   return (
  //     <Pagination
  //       color="primary"
  //       count={pageCount}
  //       page={page + 1}
  //       onChange={(event, value) => apiRef.current.setPage(value - 1)}
  //     />
  //   );
  // }

  // const columns = [
  //   { field: "id", headerName: "ID", width: 90 },
  //   {
  //     field: "product",
  //     headerName: "Product",
  //     width: 300,
  //     renderCell: (params) => {
  //       return (
  //         <div className="productListItem">
  //           <img className="productListImg" src={params.row.img} alt="" />
  //           {params.row.name}
  //         </div>
  //       );
  //     },
  //   },
  //   { field: "stock", headerName: "Stock", width: 200 },
  //   {
  //     field: "status",
  //     headerName: "Status",
  //     width: 160,
  //   },
  //   {
  //     field: "price",
  //     headerName: "Price",
  //     width: 160,
  //   },
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 150,
  //     renderCell: (params) => {
  //       return (
  //         <>
  //           <Link to={"/admin/product/" + params.row.id}>
  //             <button className="productListEdit">Edit</button>
  //           </Link>
  //           <DeleteOutline
  //             className="productListDelete"
  //             onClick={() => handleDelete(params.row.id)}
  //           />
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <>
      {/* <PageHeader
        title="New Employee"
        subTitle="Form design with validation"
        icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
      /> */}
      <Paper
        sx={{
          margin: 5,
          padding: 3,
          flex: 4,
        }}
      >
        <Toolbar>
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
          <Controls.Button
            text="Add New"
            variant="outlined"
            startIcon={<Add />}
            sx={{ position: "absolute", right: "10px" }}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>
                  <Controls.ActionButton
                    color="primary"
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined fontSize="small" />
                  </Controls.ActionButton>
                  <Controls.ActionButton
                    color="secondary"
                    onClick={() => {
                      handleDelete(item);
                    }}
                  >
                    <Close fontSize="small" />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <NewProduct recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </>
  );
}
