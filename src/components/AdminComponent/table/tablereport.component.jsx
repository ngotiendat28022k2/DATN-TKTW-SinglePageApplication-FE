import {useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gridClasses } from '@mui/system';

function CustomPaginationActionsTableReport({rowsData, columnsData, rowId, setRowId, isLoading}) {
  const [pageSize, setPageSize] = useState(10)
  const [columns, setColumns] = useState(columnsData || [])
  const [rows, setRows] = useState( rowsData || [])
  console.log("rơdata", rows)
  function generateRandom() {
     var length = 8,
         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
         retVal = "";
     for (var i = 0, n = charset.length; i < length; ++i) {
         retVal += charset.charAt(Math.floor(Math.random() * n));
     }
     return retVal;
 }
  useEffect(() => {
    setRows(rowsData)
    setColumns(columnsData)
  }, [rowsData, columnsData])

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowId={(row) =>  generateRandom()}
        // checkboxSelection
        disableColumnMenu

        loading={isLoading}
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: 'primary.light',
          '& .MuiDataGrid-cell:hover': {
            color: 'primary.main',
          },
          padding: "10px",
        }}
        onCellEditCommit={params => setRowId(params.id)}
        key={(row) => console.log("rowww", row) }
      />
      
    </div>
  );
}

export default CustomPaginationActionsTableReport