import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from '../../theme';

interface Props {
    text: string,
    index: number
}

export const BulletPoint: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();
	const bullet = '\u2022';
	const spacing = '\u00A0';

	return (
		<span className={classes.bulletPoint} key={props.index}>
			<Typography className={classes.bodyText}>
				{bullet}{spacing}{props.text}
			</Typography>
		</span>
	);
};
