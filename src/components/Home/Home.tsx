import React from 'react';
import { Zoom } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';
import name from '../../assets/gifs/justin-jitter.gif';

export const Home: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = 'Justin Thoreson';

	return (
		<>
			<TabTitle title={title} />
			<div className={classes.homeContainer}>
				<Zoom in={true}>
					<img className={classes.homeName} src={name} alt='name' />
				</Zoom>
			</div>
		</>
	);
};
