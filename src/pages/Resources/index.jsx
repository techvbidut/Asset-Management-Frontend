import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import './style.css';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import {AllServices} from '../../services/allServices';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material'

// import * as React from 'react';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#140047',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));


const ResourceList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    AllServices.getAllResources().then((res) => {console.log(res.data.data)
    setData(res.data.data);
    }).catch(err=>console.log(err));
  }, [])

  return (
    <Box sx={{mx: '230px', my: '30px'}}>
        <div class="tableEmp">
        {/* <p>Resources table</p>
        <Stack spacing={2} direction="row">
          <Link to="/">Go back</Link>
        </Stack> */}
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700, width: 1200 }} aria-label="customized table">
                <TableHead>
                <TableRow>
                    <StyledTableCell>Resource Name</StyledTableCell>
                    <StyledTableCell align="right">Model</StyledTableCell>
                    <StyledTableCell align="right">Qty</StyledTableCell>
                    <StyledTableCell align="right">Per Qty Value</StyledTableCell>
                    {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {data.map((row) => (
                    <StyledTableRow 
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <StyledTableCell component="th" scope="row">
                        {row.resource_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.model}</StyledTableCell>
                    <StyledTableCell align="right">{row.qty}</StyledTableCell>
                    <StyledTableCell align="right">{row.per_qty_value}</StyledTableCell>
                    {/* <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell> */}
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    </Box>

  )


}

export default ResourceList