import React from 'react';
import { Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import TabTitle from '../TabTitle';
import Timeline from '../Timeline';
import { ExperienceItem } from './ExperienceItem';
import { useStyles } from '../../theme';
import experience from '../../db/experience.json';

export const Experience: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Experience';

	return (
		<>
			<TabTitle title={title} />
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
