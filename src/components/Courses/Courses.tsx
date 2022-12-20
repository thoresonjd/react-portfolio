import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';
import courses from '../../db/courses.json';
import { useStyles } from '../../theme';

const columns: string[] = ["Institution", "Number", "Name", "Quarter", "Year", "Grade"];

export const Courses: React.FC = () => {
  const classes: any = useStyles();

  return (
    <TableContainer>
      <Table className={classes.courseTable}>
        <TableHead>
          <TableRow>
            {columns.map((col: string, colIndex: number) => (
              <TableCell className={classes.itemHeader} key={colIndex}>{col}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course: any, courseIndex: number) => (
            <TableRow key={courseIndex}>
              <TableCell className={classes.bodyText}>{course.institution}</TableCell>
              <TableCell className={classes.bodyText}>{course.number}</TableCell>
              <TableCell className={classes.bodyText}>{course.name}</TableCell>
              <TableCell className={classes.bodyText}>{course.quarter}</TableCell>
              <TableCell className={classes.bodyText}>{course.year}</TableCell>
              <TableCell className={classes.bodyText}>{course.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
