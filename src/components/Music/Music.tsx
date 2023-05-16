import React from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import { useStyles } from '../../theme';

export const Music: React.FC = (): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Helmet>
				<title>Music</title>
			</Helmet>
			<Container className={classes.musicContainer}>
				<Typography className={classes.musicTitle}>
          Listen to some of my music! :)
				</Typography>
				<ReactPlayer
					className={classes.audioPlayer}
					playing
					loop
					url='https://soundcloud.com/exulgor/primordial'
				/>
			</Container>
		</>
	);
};
