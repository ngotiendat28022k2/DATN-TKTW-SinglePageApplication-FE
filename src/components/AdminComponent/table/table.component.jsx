import {useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gridClasses } from '@mui/system';

function CustomPaginationActionsTable({rowsData, columnsData, rowId, setRowId, isLoading}) {
  const [pageSize, setPageSize] = useState(10)
  const [columns, setColumns] = useState(columnsData || [])
  const [rows, setRows] = useState( rowsData || [])

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
        checkboxSelection
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
        getRowId={(row) =>  row._id}
        onCellEditCommit={params => setRowId(params.id)}
        // key={(row) => console.log("rowww", row) }
      />
      
    </div>
  );
}

export default CustomPaginationActionsTable