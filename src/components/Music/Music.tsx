import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Typography } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';

export const Music: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Music';
	const musicSource: string = 'https://soundcloud.com/exulgor/primordial';

	return (
		<>
			<TabTitle title={title} />
			<Container className={classes.musicContainer}>
				<Typography className={classes.musicTitle}>
                    Listen to some of my music! :)
				</Typography>
				<ReactPlayer
					className={classes.audioPlayer}
					playing
					loop
					url={musicSource}
				/>
			</Container>
		</>
	);
};
