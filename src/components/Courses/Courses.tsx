import React from 'react';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Fade, Typography } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';
import courses from '../../db/courses.json';

const columns: string[] = ['Institution', 'Number', 'Name', 'Quarter', 'Year', 'Grade'];

export const Courses: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Courses';
	const transitionDelay: number = 25;

	return (
		<>
			<TabTitle title={title} />
			<Typography className={classes.timelineTitle} variant='h4'>
				{title}
			</Typography>
			<TableContainer className={classes.courseContainer}>
				<Table>
					<TableHead>
						<TableRow>
							{columns.map((col: string, colIndex: number) => (
								<TableCell className={classes.itemHeader} key={colIndex}>{col}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{courses.map((course: any, courseIndex: number) => (
							<Fade key={courseIndex} in={true} style={{ transitionDelay: `${transitionDelay * courseIndex}ms` }}>
								<TableRow>
									<TableCell className={classes.bodyText}>{course.institution}</TableCell>
									<TableCell className={classes.bodyText}>{course.number}</TableCell>
									<TableCell className={classes.bodyText}>{course.name}</TableCell>
									<TableCell className={classes.bodyText}>{course.quarter}</TableCell>
									<TableCell className={classes.bodyText}>{course.year}</TableCell>
									<TableCell className={classes.bodyText}>{course.grade}</TableCell>
								</TableRow>
							</Fade>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
