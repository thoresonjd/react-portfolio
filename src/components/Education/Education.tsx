import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '../Timeline';
import { EducationItem } from './EducationItem';
import { useStyles } from '../../theme';
import education from '../../db/education.json';

export const Education: React.FC = (): JSX.Element => {
	const title: string = 'Education';
	const classes: any = useStyles();

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Typography className={classes.timelineTitle} variant='h4'>
				{title}
			</Typography>
			<div className={classes.center}>
				<Link to={'/courses'}>
					<div className={`${classes.bodyText} ${classes.textButton}`}>See courses taken</div>
				</Link>
			</div>
			<Timeline
				data={education}
				icon={SchoolIcon}
				element={(timelineItem: any) =>
					<EducationItem educationItem={timelineItem} />
				}
			/>
		</>
	);
};
