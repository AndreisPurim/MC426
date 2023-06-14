import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import TocIcon from '@mui/icons-material/Toc';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import FormCard from './FormCard';

export default function UserTable(props: { example: any; setControl: (arg0: any) => void; control: { user: { username: string | number; favorites: { indexOf: (arg0: any) => number; length: string; }; recents: any; created: { indexOf: (arg0: any) => number; length: string; }; admin: any; }; }; setExample: (arg0: any) => void; }) {
  const [table, setTable] = React.useState({
    tab: 0,
    page: 0,
    perPage: 10,
    search: '',
    anchorSelect: null,
    selectedColumns: [],
    defaultColumns: [],
    columns: [],
    rows: [],
    favorites: 0
  } as any);
  const changeTab = (event: any, newTab: any) => { setTable({ ...table, tab: newTab }) };
  const changePage = (event: any, newPage: any) => { setTable({ ...table, page: newPage }) };
  const changePerPage = (event: { target: { value: string | number; }; }) => { setTable({ ...table, page: 0, perPage: +event.target.value }) };
  const changeSearch = (event: { target: { value: any; }; }) => { setTable({ ...table, search: event.target.value }) };
  const openSelect = (event: { currentTarget: any; }) => { setTable({ ...table, anchorSelect: event.currentTarget }) }
  const closeSelect = () => { setTable({ ...table, anchorSelect: null }) }
  const resetColumns = () => { setTable({ ...table, selectedColumns: table.defaultColumns }) }
  function changeSelectedColumns(i: number) {
    const newSelected: any = table.selectedColumns
    newSelected[i] = !newSelected[i]
    setTable({ ...table, selectedColumns: newSelected })
  }
  const showResetButton = () => {
    for (let i = 0; i < table.selectedColumns.length; ++i) {
      if (table.selectedColumns[i] !== table.defaultColumns[i]) {
        // console.log(table.selectedColumns[i],table.defaultColumns[i])
        // return false
      }
      else {
        // console.log(table.selectedColumns[i],table.defaultColumns[i])
        // return false
      }
    }
    return true;
  }
  React.useEffect(() => {
    const fetchData = async () => {
      const rows = props.example.rows;
      const columns = props.example.columns;
      let favs = 0;
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].favorite) {
          favs++
        }
      }
      const defaultColumns = columns.filter(function (row: { default: any; }) { return row.default })
      setTable({ ...table, columns: columns, selectedColumns: defaultColumns, defaultColumns: defaultColumns, rows: rows, favorites: favs })
      // props.setAlert({open: true, text: "Error in fetching rows", severity: "error"})

    }
    const fetchUser = async () => {
      props.setControl({ ...props.control, user: props.example.users[props.control.user.username] });
    }
    fetchData();
    fetchUser();
  }, [props.example]);
  function handleFavorite(row: any) {
    // Make que API here
    const userFavorites: any = props.control.user.favorites;
    const index = userFavorites.indexOf(row.id);
    if (index === -1) {
      userFavorites.push(row.id)
    }
    else {
      userFavorites.splice(index, 1)
    }
    const newUsers = props.example.users;
    newUsers[props.control.user.username].favorites = userFavorites;
    props.setExample({ ...props.example, users: newUsers })
  }
  function textTab() {
    switch (table.tab) {
      case 1: return 'Favorites'
      case 2: return 'Recent Forms'
      case 3: return 'My forms'
      default: return 'All'
    }
  }
  function selectRows() {
    let rows: any = []
    if (table.tab === 1) {
      rows = table?.rows.filter(function (row: any) {
        return props.control.user.favorites.indexOf(row.id) !== -1;
      })
    }
    else if (table.tab === 2) {
      rows = table.rows.filter(function (row: any) {
        return row.id in props.control.user.recents;
      })
    }
    else if (table.tab === 3) {
      rows = table.rows.filter(function (row: any) {
        return props.control.user.created.indexOf(row.id) !== -1;
      })
    }
    else {
      rows = table.rows
    }
    if (table.search !== '') {
      rows = rows.filter(function (row: any) {
        for (let i = 0; i < table.columns.length; i++) {
          if (table.selectedColumns[i] && table.columns[i].id !== 'favorite' && row[table.columns[i].id].toString().toLowerCase().includes(table.search.toLowerCase())) {
            return true
          }
        }
        return false
      })
    }
    return rows
  }
  return (
    <Grid item container direction="column" justifyContent="center" alignItems="center" style={{ paddingTop: '2rem' }}>
      <Grid item>
        <Tabs value={table.tab} onChange={changeTab} indicatorColor={table.tab === 3 ? "secondary" : "primary"} textColor={table.tab === 3 ? "secondary" : "primary"}>
          <Tab label="Public" />
          <Tab label={"Favorites (" + props.control.user.favorites.length + ")"} />
          <Tab label="Recent" />
          {!props.control.user.admin ? null : <Tab label={"My Forms (" + props.control.user.created.length + ")"} />}
        </Tabs>
      </Grid>
      <Grid item>
        <Paper elevation={3}>
          <Toolbar>
            <Typography variant="h6" id="tableTitle" style={{ flex: '1 1 100%' }}>
              {textTab()} {table.search !== '' ? '(Searching)' : null}
            </Typography>
            <Tooltip title="Search">
              <TextField onChange={changeSearch} InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }} placeholder="Search" variant="outlined" />
            </Tooltip>
            <Tooltip title="Select Columns">
              <IconButton onClick={openSelect}>
                <TocIcon />
              </IconButton>
            </Tooltip>
            <Menu keepMounted anchorEl={table.anchorSelect} open={Boolean(table.anchorSelect)} onClose={closeSelect}>
              {table.columns.map((column: { id: React.Key | null | undefined; label: any }, i: number) => (
                <ListItem key={column.id}>
                  <FormControlLabel control={<Checkbox checked={table.selectedColumns[i]} onChange={() => changeSelectedColumns(i)} />} label={column.label} />
                </ListItem>
              ))}
              {showResetButton() ? null :
                <MenuItem onClick={resetColumns}>
                  Reset to Default
                </MenuItem>
              }
            </Menu>
          </Toolbar>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {table.columns.map((column: {
                    align: "right" | "left" | "center" | "inherit" | "justify" | undefined; id: any; minWidth: any; label: any;
                  }, i: string | number) => {
                    if (table.selectedColumns[i]) return (
                      <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                        <b>{column.label}</b>
                      </TableCell>
                    )
                    else return null
                  })}
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {selectRows().slice(table.page * table.perPage, table.page * table.perPage + table.perPage).map((row: { [x: string]: any }) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {table.columns.map((column: { id: any; align: "right" | "left" | "center" | "inherit" | "justify" | undefined; }, i: string | number) => {
                        if (table.selectedColumns[i]) {
                          if (column.id === 'favorite') {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                <IconButton onClick={() => handleFavorite(row)}>
                                  {props.control.user.favorites.indexOf(row.id) !== -1 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                              </TableCell>
                            )
                          }
                          else if (column.id === 'last_updated') {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {new Date(row[column.id]).toISOString().slice(0, 10)}
                              </TableCell>
                            )
                          }
                          else if (column.id === 'keywords') {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id].join(', ')}
                              </TableCell>
                            )
                          }
                          else {
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {row[column.id]}
                              </TableCell>
                            )
                          }
                        }
                        else return null
                      })}
                      <FormCard {...props} row={row}/>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination rowsPerPageOptions={table.perPageOptions} component="div" count={selectRows().length} rowsPerPage={table.perPage} page={table.page} onPageChange={changePage} onRowsPerPageChange={changePerPage} />
        </Paper>
      </Grid>
    </Grid>
  );
}