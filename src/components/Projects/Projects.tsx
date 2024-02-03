import React from 'react';
import { Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import TabTitle from '../TabTitle';
import Timeline from '../Timeline';
import { ProjectItem } from './ProjectItem';
import { useStyles } from '../../theme';
import projects from '../../db/projects.json';

export const Projects: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Projects';

	return (
		<>
			<TabTitle title={title} />
			<Typography className={classes.timelineTitle} variant='h4'>
				{title}
			</Typography>
			<Timeline
				data={projects}
				icon={BuildIcon}
				element={(timelineItem: any) =>
					<ProjectItem projectItem={timelineItem} />
				}
			/>
		</>
	);
};
