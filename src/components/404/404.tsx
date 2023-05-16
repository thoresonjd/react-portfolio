import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Typography } from '@mui/material';
import { useStyles } from '../../theme';
import thisIsFine from '../../assets/images/this-is-fine.png';

export const NotFound: React.FC = (): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Helmet>
				<title>404 Not Found</title>
			</Helmet>
			<Box className={classes.errorBox}>
				<Typography className={classes.notFoundTitle}>404</Typography>
				<Typography className={classes.notFoundSubtitle}>Not Found</Typography>
				<img className={classes.notFoundimage} src={thisIsFine} alt='404' />
			</Box>
		</>
	);
};
