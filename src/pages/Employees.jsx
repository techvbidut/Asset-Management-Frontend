import { Box } from '@mui/material'
// import React from 'react'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './style.css';
import { tableCellClasses } from '@mui/material/TableCell';
// import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Outlet, Link } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import { AllServices } from '../services/allServices';
import { useEffect, useState } from 'react';

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

function Employees() {
    const [data, setData] = useState([])
    useEffect(() => {
        AllServices.getAllEmployees().then((res) => {
        console.log(res.data.data)
        setData(res.data.data);
        }).catch(err => console.log(err));
    }, [])

    return (
        <Box sx={{mx: '180px', my: '-20px'}}>
            <div class="outerDiv">
                <div class="tableEmp">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700,width: 1200 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Username</StyledTableCell>
                                    <StyledTableCell align="right">Role</StyledTableCell>
                                    <StyledTableCell align="right">Team</StyledTableCell>
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
                                            {row.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.role}</StyledTableCell>
                                        <StyledTableCell align="right">{row.team}</StyledTableCell>
                                        {/* <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell> */}
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </Box>
    )
}

export default Employees