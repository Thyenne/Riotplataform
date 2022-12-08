import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import {Button} from '@mui/material'


const useStyles = makeStyles({
  root: {
    
    backgroundColor:'#C8AA6E',
    border:'#C89B3C solid',
    height:"100%",
    padding:"0",
    responsive: true

  },
  container: {
    maxHeight: 700, 
    maxWidth:970,
    
  },
});


function returnRow(value) {
  if (value !== null) {
    if (typeof value === 'string') {
      if (value.endsWith('.png')) {
        return <img src={value} width='50px' height='50px' />
      } else { return value }
    //if(value.startsWith('BR1_')) {
      //return <Details matchId={this.state.matchId}/>  
    //}
    }
    if (typeof value === 'boolean') {
      if (value) { 
        return <CheckBoxIcon />
      } else {
        return <IndeterminateCheckBoxIcon color={'#fff'} />
      }
    }
    else {
      return value
    }
  }
}



const DataTable = ({ rows, columns, onClickRow }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root} borderRadius="4px">
      <TableContainer  className={classes.container}>
        <Table stickyHeader aria-label="a dense table" size="small" borderCollapse="collapse">
          <TableHead>
            <TableRow>
              {columns.map((column, ck) => (
                <TableCell
                  key={ck}
                  align={'center'}
                  style={{ minWidth: 0, color:'#C89B3C', backgroundColor:'#010A13' }}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rk) => {
              return (
                <TableRow  tabIndex={-1} key={rk} onClick={onClickRow} hover='#222222'>
                  {columns.map((column, colk) => {
                    const value = row[column.value];
                    return (
                      <TableCell key={colk} align={'center'} color='#F0E6D2' >
                       {returnRow(value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[15, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export { DataTable };
