import React from 'react';
import { Typography } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TabTitle from '../TabTitle';
import Timeline from '../Timeline';
import { AwardItem } from './AwardItem';
import { useStyles } from '../../theme';
import awards from '../../db/awards.json';

export const Awards: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Honors & Awards';

	return (
		<>
			<TabTitle title={title} />
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
