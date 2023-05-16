import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import Timeline from '../Timeline';
import { ExperienceItem } from './ExperienceItem';
import { useStyles } from '../../theme';
import experience from '../../db/experience.json';

export const Experience: React.FC = (): JSX.Element => {
	const title: string = 'Experience';
	const classes: any = useStyles();

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Typography className={classes.timelineTitle} variant='h4'>
				{title}
			</Typography>
			<Timeline
				data={experience}
				icon={WorkIcon}
				element={(timelineItem: any) =>
					<ExperienceItem experienceItem={timelineItem} />
				}
			/>
		</>
	);
};
