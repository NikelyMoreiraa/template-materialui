import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First Name', width: 150, editable: true },
  { field: 'lastName', headerName: 'Last Name', width: 150, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
  { 
    field: 'fullName', 
    headerName: 'Full Name', 
    description: 'This column has a value getter and is not sortable.',
    sortable: false, 
    width: 160, 
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` 
  },
];

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', age: 14 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 31 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 31 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', age: 11 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: null },
];

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </Box>
  );
}
