import React from 'react';
import { Typography } from '@mui/material';
import BulletedList from '../BulletedList';
import { useStyles } from '../../theme';

interface Props {
  experienceItem: any
}

export const ExperienceItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Typography className={classes.itemTimeframe}>{props.experienceItem.from} - {props.experienceItem.to}</Typography>
			<Typography className={classes.itemHeader}>{props.experienceItem.position}</Typography>
			<Typography className={classes.itemHeader}>{props.experienceItem.employer}</Typography>
			<Typography className={classes.bodyText}>{props.experienceItem.description}</Typography>
			<BulletedList items={props.experienceItem['bullet-points']} />
		</>
	);
};
