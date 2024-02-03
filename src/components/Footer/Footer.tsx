import React from 'react';
import { Box, Typography } from '@mui/material';
import { useStyles } from '../../theme';

export const Footer: React.FC = (): JSX.Element => {
	const classes: any = useStyles();
	const year: number = new Date().getFullYear();
	const author: string = 'Justin Thoreson';

	return (
		<Box className={classes.footer}>
			<Typography className={classes.copyright}>
                Copyright © {year} {author}
			</Typography>
		</Box>
	);
};
