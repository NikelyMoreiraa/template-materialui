import React, { useState } from 'react';
import { FormControl, Input, FormHelperText, Box, Button, Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// DataGrid Columns
const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

// DataGrid Rows
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jonhi', age: 14 },
  { id: 2, lastName: 'Paulo', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Selma', firstName: 'Monique', age: 19 },
  { id: 4, lastName: 'Ton', firstName: 'Lais', age: 11 },
  { id: 5, lastName: 'Nivia', firstName: 'Daenerys', age: 41 },
  { id: 6, lastName: 'Melisandre', firstName: 'Lola', age: 55 },
  { id: 7, lastName: 'Clifford', firstName: 'Naiely', age: 44 },
  { id: 8, lastName: 'Carlos', firstName: 'Ronaldo', age: 36 },
  { id: 9, lastName: 'Luis', firstName: 'Bruno', age: 22 },
];

// Login Component
const Login = () => {
  const [login, setLogin] = useState('');

  return (
    <Box item xs={12}>
      <FormControl fullWidth>
        <Input
          id="login_nome"
          aria-describedby="login_nome_helper_text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
      </FormControl>
    </Box>
  );
};

// Drawer Component
export function AnchorTemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

// Main Component
export default function App() {
  return (
    <Box sx={{ padding: 3 }}>
      <Login />
      <DataGridDemo />
      <AnchorTemporaryDrawer />
    </Box>
  );
}

// DataGrid Demo Component
function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: '100%', marginTop: 3 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
