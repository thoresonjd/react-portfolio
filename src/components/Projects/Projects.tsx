import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import Timeline from '../Timeline';
import { ProjectItem } from './ProjectItem';
import { useStyles } from '../../theme';
import projects from '../../db/projects.json';

export const Projects: React.FC = (): JSX.Element => {
	const title: string = 'Projects';
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
				data={projects}
				icon={BuildIcon}
				element={(timelineItem: any) =>
					<ProjectItem projectItem={timelineItem} />
				}
			/>
		</>
	);
};
