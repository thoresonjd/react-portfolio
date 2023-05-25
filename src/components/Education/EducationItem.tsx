import React from 'react';
import { Typography } from '@mui/material';
import Bullet from '../Bullet';
import { useStyles } from '../../theme';

interface Props {
  educationItem: any
}

export const EducationItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Typography className={classes.itemTimeframe}>{props.educationItem.from} - {props.educationItem.to}</Typography>
			<Typography className={classes.itemHeader}>{props.educationItem.institution}</Typography>
			<Typography className={classes.itemHeader}>{props.educationItem.degree}</Typography>
			{props.educationItem.majors.length > 0 ? (
				<Typography className={classes.bodyText}>
                    Major(s): {props.educationItem.majors.join(', ')}
				</Typography>
			) : <></>}
			{props.educationItem.minors.length > 0 ? (
				<Typography className={classes.bodyText}>
                    Minor(s): {props.educationItem.minors.join(', ')}
				</Typography>
			) : <></>}
			{props.educationItem.gpa ? (
				<Typography className={classes.bodyText}>
                    GPA: {props.educationItem.gpa}
				</Typography>
			) : <></>}
			<Bullet points={props.educationItem['bullet-points']} />
		</>
	);
};
