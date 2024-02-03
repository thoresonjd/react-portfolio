import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import TabTitle from '../TabTitle';
import Timeline from '../Timeline';
import { EducationItem } from './EducationItem';
import { useStyles } from '../../theme';
import education from '../../db/education.json';

export const Education: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Education';

	return (
		<>
			<TabTitle title={title} />
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
