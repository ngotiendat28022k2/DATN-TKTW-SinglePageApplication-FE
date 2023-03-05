import "./userList.css";
import { 
  DataGrid, 
  GridToolbar, 
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector, } from "@mui/x-data-grid"; 
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import Pagination from '@mui/material/Pagination'
import LinearProgress from '@mui/material/LinearProgress';

export default function UserList() {
  const [data, setData] = useState(userRows);

  // Xóa
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  // Phân trang
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
    return (
      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  // Render giao diện
  return (
    <div className="userList">
      <button className="userListEdit" form='my-form'>ADD</button>
      {/* <Link to={"/admin/newUser/"}>
              <button className="userListEdit">ADD</button>
      </Link> */}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
        pagination
        rowsPerPageOptions={[5]}
        components={{
          Toolbar: GridToolbar,
          Pagination: CustomPagination,
        }}
      />
    </div>
  );
}
