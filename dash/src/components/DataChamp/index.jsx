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



const useStyles = makeStyles({
  root: {
    
    backgroundColor:'#C8AA6E',
    border:'#C89B3C solid',
    height:"100%",
    

  },
  container: {
    maxHeight: 800, 
  
    
  },
});

const DataChamp = ({ rows, columns, onClickRow }) => {
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
    <Paper className={classes.root} borderRadius="7px" width='100%'>
      <TableContainer  className={classes.container}>
        <Table stickyHeader aria-label="a dense table" size="small" borderCollapse="collapse" width='100%'>
          <TableHead>
            <TableRow>
              {columns.map((column, ck) => (
                <TableCell
                  key={ck}
                  align={'center'}
                  style={{ color:'#C89B3C', backgroundColor:'#010A13' }}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rk) => {
              return (
                <TableRow  tabIndex={-1} key={rk} onClick={onClickRow} >
                  {columns.map((column, colk) => {
                    const value = row[column.value];
                    return (
                      <TableCell key={colk} align={'center'} color='#F0E6D2' >
                       {value.toString().endsWith('.png') ? <img src={value} width='50px' height='50px' /> : value }
                       
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

export { DataChamp };
