import React from 'react';
import { Box, Typography } from '@mui/material';
import TabTitle from '../TabTitle';
import { useStyles } from '../../theme';
import thisIsFine from '../../assets/images/this-is-fine.png';

export const NotFound: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const title: string = '404 Not Found';

	return (
		<>
			<TabTitle title={title} />
			<Box className={classes.errorBox}>
				<Typography className={classes.notFoundTitle}>404</Typography>
				<Typography className={classes.notFoundSubtitle}>Not Found</Typography>
				<img className={classes.notFoundimage} src={thisIsFine} alt='404' />
			</Box>
		</>
	);
};
