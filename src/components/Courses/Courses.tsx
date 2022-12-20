import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';

const data = [
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
  {
    number: 'CPSC 100',
    name: 'Computing 1',
    quarter: 'Fall',
    year: '2022',
    institution: 'Seattle University'
  },
]

export const Courses: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quarter</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Institution</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow>
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quarter}</TableCell>
              <TableCell>{row.year}</TableCell>
              <TableCell>{row.institution}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
