import {useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { gridClasses } from '@mui/system';

function CustomPaginationActionsTable({rowsData, columnsData, rowId, setRowId}) {
  const [isLoading, setIsLoading] = useState(false)
  const [columns, setColumns] = useState([...columnsData] || [])
  const [rows, setRows] = useState([...rowsData] || [])
  const [pageSize, setPageSize] = useState(10)

  useEffect(() => {
    setIsLoading(true)
    setRows(rowsData)
    setColumns(columnsData)
    setIsLoading(false)
  }, [columnsData, rowsData])


  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        checkboxSelection
        loading={isLoading}
        getRowSpacing={params => ({
          top:params.isFirstVisible ? 0 : 5,
          bottom:params.isLastVisible ? 0: 5
        })}
        sx={{
          [`&.${gridClasses.row}`]:{
            bgcolor:"#8baf67"
          }
        }}
        getRowId={(row) =>  row._id}
        onCellEditCommit={params => setRowId(params.id)}
      />
      
    </div>
  );
}

export default CustomPaginationActionsTable