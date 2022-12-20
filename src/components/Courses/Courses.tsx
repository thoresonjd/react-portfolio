import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import courses from '../../db/courses.json';

export const Courses: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Institution</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Quarter</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course: any, cIndex: number) => (
            <TableRow key={cIndex}>
              <TableCell>{course.institution}</TableCell>
              <TableCell>{course.number}</TableCell>
              <TableCell>{course.name}</TableCell>
              <TableCell>{course.quarter}</TableCell>
              <TableCell>{course.year}</TableCell>
              <TableCell>{course.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
