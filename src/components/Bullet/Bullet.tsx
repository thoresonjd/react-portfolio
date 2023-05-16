import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from '../../theme';

interface Props {
  points: []
}

export const Bullet: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			{props.points.map((bullet: any, bIndex: number) => (
				<span className={classes.bulletPoint} key={bIndex}>
					<Typography className={classes.bodyText}>•&nbsp;</Typography>
					<Typography className={classes.bodyText}>{bullet}</Typography>
				</span>
			))}
		</>
	);
};
