import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Timeline from '../Timeline';
import { AwardItem } from './AwardItem';
import { useStyles } from '../../theme';
import awards from '../../db/awards.json';

export const Awards: React.FC = (): JSX.Element => {
	const title: string = 'Honors & Awards';
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
				data={awards}
				icon={EmojiEventsIcon}
				element={(timelineItem: any) =>
					<AwardItem awardItem={timelineItem} />
				}
			/>
		</>
	);
};
