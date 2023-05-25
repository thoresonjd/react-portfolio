import React from 'react';
import { Typography } from '@mui/material';
import { useStyles } from '../../theme';

interface Props {
  awardItem: any
}

export const AwardItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Typography className={classes.itemTimeframe}>{props.awardItem.date}</Typography>
			<Typography className={classes.itemHeader}>{props.awardItem.title}</Typography>
			<Typography className={classes.bodyText}>Issued by {props.awardItem.issuer}</Typography>
			<Typography className={classes.bodyText}>{props.awardItem.description}</Typography>
		</>
	);
};
