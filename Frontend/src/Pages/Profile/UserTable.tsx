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
import axios from "axios";

import FormCard from './FormCard';
import { columns } from '../../Source/example';

function UserTableSelector(props: any){
  const changeTab = (event: any, newTab: any) => { props.setTable({ ...props.table, tab: newTab }) };
  return(
    <Grid item>
      <Tabs value={props.table.tab} onChange={changeTab} indicatorColor={props.table.tab === 3 ? "secondary" : "primary"} textColor={props.table.tab === 3 ? "secondary" : "primary"}>
        <Tab label="Public" />
        <Tab label={"Favorites (" + (props.control.user?.favorites?.length ?? 0) + ")"} />
        <Tab label="Recent" />
        {!props.control.user?.admin ? null : <Tab label={"My Forms (" + (props.control.user?.created?.length ?? 0) + ")"} />}
      </Tabs>
    </Grid>
  )
}

function UserTableToolbar(props: any){
  const changeSearch = (event: { target: { value: any; }; }) => { props.setTable({ ...props.table, search: event.target.value }) };
  const openSelect = (event: { currentTarget: any; }) => { props.setTable({ ...props.table, anchorSelect: event.currentTarget }) }
  const closeSelect = () => { props.setTable({ ...props.table, anchorSelect: null }) }
  const resetColumns = () => { props.setTable({ ...props.table, selectedColumns: props.table.defaultColumns }) }
  function changeSelectedColumns(i: number) {
    const newSelected: any = props.table.selectedColumns
    newSelected[i] = !newSelected[i]
    props.setTable({ ...props.table, selectedColumns: newSelected })
  }
  const showResetButton = () => {
    // Not working
    for (let i = 0; i < props.table.selectedColumns.length; ++i) {
      if (props.table.selectedColumns[i] !== props.table.defaultColumns[i]) {
        return true
      }
    }
    return false;
  }
  function textTab() {
    switch (props.table.tab) {
      case 1: return 'Favorites'
      case 2: return 'Recent Forms'
      case 3: return 'My forms'
      default: return 'All'
    }
  }
  return (
		<Toolbar sx={{minWidth: "800px"}}>
			<Grid container flexDirection={"row"} justifyContent={"space-between"} sx={{marginTop: "8px"}}>
					<Grid item container flexDirection={"row"} justifyContent={"flex-start"} alignItems={"center"} xs={3}>
						<Typography variant="h5" id="tableTitle">
							{textTab()} {props.table.search !== "" ? "(Searching)" : null}
						</Typography>
					</Grid>
					<Grid item container flexDirection={"row"} justifyContent={"center"} xs={6}>
						<Tooltip title="Search">
							<TextField
								onChange={changeSearch}
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<SearchIcon />
										</InputAdornment>
									),
								}}
								placeholder="Search"
								variant="outlined"
                sx={{paddingTop: "4px"}}
							/>
						</Tooltip>
					</Grid>
				<Grid container item flexDirection={"row"} justifyContent={"end"} xs>
						<Tooltip title="Select Columns">
							<IconButton onClick={openSelect}>
								<TocIcon />
							</IconButton>
						</Tooltip>
				</Grid>
			</Grid>
			<Menu keepMounted anchorEl={props.table?.anchorSelect} open={Boolean(props.table?.anchorSelect)} onClose={closeSelect}>
				{props?.table.columns.map((column: {id: React.Key | null | undefined; label: any}, i: number) => (
					<ListItem key={column?.id}>
						<FormControlLabel
							control={<Checkbox checked={props?.table?.selectedColumns[i]} onChange={() => changeSelectedColumns(i)} />}
							label={column?.label}
						/>
					</ListItem>
				))}
				{showResetButton() ? null : <MenuItem onClick={resetColumns}>Reset to Default</MenuItem>}
			</Menu>
		</Toolbar>
  );
}

function UserTableHead(props: any){
  return(
    <TableHead>
      <TableRow>
        {props.table?.columns.map((column: {
          align: "right" | "left" | "center" | "inherit" | "justify" | undefined; id: any; minWidth: any; label: any;
        }, i: string | number) => {
          if (props.table.selectedColumns[i]) return (
            <TableCell key={column?.id} align={column.align} style={{ minWidth: column.minWidth }}>
              <b>{column.label}</b>
            </TableCell>
          )
          else return null
        })}
        <TableCell />
      </TableRow>
    </TableHead>
  )
}

export default function UserTable(props: any) {
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
    
  const changePage = (event: any, newPage: any) => { setTable({ ...table, page: newPage }) };
  const changePerPage = (event: { target: { value: string | number; }; }) => { setTable({ ...table, page: 0, perPage: +event.target.value }) };


  const fetchData = async () => {
		axios.get("http://localhost:8000/formulario").then(
			(res) => {
				console.log(res);
				let rows: any[] = res.data;
				let favs = 0;
				for (let i = 0; i < rows.length; i++) {
					if (rows[i].favorite) {
						favs++;
					}
				}
				const defaultColumns = columns.filter(function (row: {default: any}) {
					return row.default;
				});
				setTable({
					...table,
					columns: columns,
					selectedColumns: defaultColumns,
					defaultColumns: defaultColumns,
					rows: [],
					favorites: favs,
				});
			},
			(err) => {
				props.setAlert({open: true, text: `Error in fetching forms (${err})`, severity: "error"});
			}
		);
  };

  React.useEffect(() => {
    fetchData();
  }, [props.example]);
  
  function handleFavorite(row: any) {
    const userFavorites: any = props.control.user?.favorites ?? [];
    const index = userFavorites?.indexOf(row?.id);
    if (index === -1) {
      userFavorites.push(row?.id)
    }
    else {
      userFavorites.splice(index, 1)
    }
    props.setControl({...props.control, user: { ...props.control.user, userFavorites }})
  }

  function selectRows() {
    let rows: any = []
    if (table.tab === 1) {
      rows = table?.rows.filter(function (row: any) {
        return props.control.user?.favorites?.indexOf(row?.id) !== -1;
      })
    }
    else if (table.tab === 2) {
      rows = table.rows.filter(function (row: any) {
        return props.control?.user?.recents?.filter(row?.id);
      })
    }
    else if (table.tab === 3) {
      rows = table.rows.filter(function (row: any) {
        return props.control.user?.created?.indexOf(row?.id) !== -1;
      })
    }
    else {
      rows = table.rows
    }
    if (table.search !== '') {
      rows = rows.filter(function (row: any) {
        for (let i = 0; i < table.columns.length; i++) {
          if (table.selectedColumns[i] && table.columns[i]?.id !== 'favorite' && row[table.columns[i]?.id].toString().toLowerCase().includes(table.search.toLowerCase())) {
            return true
          }
        }
        return false
      })
    }
    return rows
  }
  const sendExtraControl: any = {...props, table, setTable}
  return (
    <Grid item container direction="column" justifyContent="center" alignItems="center" style={{ paddingTop: '2rem' }}>
      <UserTableSelector {...sendExtraControl}/>
      <Grid item>
        <Paper elevation={3}>
          <UserTableToolbar {...sendExtraControl}/>
          <TableContainer>
            <Table>
              <UserTableHead {...sendExtraControl}/>
              <TableBody>
                {selectRows().slice(table.page * table.perPage, table.page * table.perPage + table.perPage).map((row: { [x: string]: any }) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row?.id}>
                      {table?.columns.map((column: { id: any; align: "right" | "left" | "center" | "inherit" | "justify" | undefined; }, i: string | number) => {
                        if (table.selectedColumns[i]) {
                          if (column?.id === 'favorite') {
                            return (
                              <TableCell key={column?.id} align={column.align}>
                                <IconButton onClick={() => handleFavorite(row)}>
                                  {props.control.user?.favorites?.indexOf(row?.id) !== -1 ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                </IconButton>
                              </TableCell>
                            )
                          }
                          else{
                            return (
                              <TableCell key={column?.id} align={column.align}>
                                {
                                column?.id === 'last_updated'?
                                  new Date(row[column?.id]).toISOString().slice(0, 10)
                                :column?.id === 'keywords'?
                                  row[column?.id].join(', ')
                                :
                                  row[column?.id]
                                }
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