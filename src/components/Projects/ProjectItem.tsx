import React from 'react';
import { Typography, Link } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import Bullet from '../Bullet';
import { useStyles } from '../../theme';

interface Props {
  projectItem: any
}

export const ProjectItem: React.FC<Props> = (props: Props): JSX.Element => {
	const classes: any = useStyles();

	return (
		<>
			<Typography className={classes.itemTimeframe}>
				{props.projectItem.from === props.projectItem.to ? '' : `${props.projectItem.from} -`} {props.projectItem.to}
			</Typography>
			{props.projectItem.ref ? (
				<span style={{ display: 'flex' }}>
					<LinkIcon fontSize='small' />&nbsp;
					<Link href={props.projectItem.ref} target='_blank' underline='none'>
						<Typography className={`${classes.itemHeader} ${classes.textButton}`}>
							{props.projectItem.title}
						</Typography>
					</Link>
				</span>
			) : (
				<Typography className={classes.itemHeader}>{props.projectItem.title}</Typography>
			)}
			<Typography className={classes.bodyText}>{props.projectItem.description}</Typography>
			<Bullet points={props.projectItem['bullet-points']} />
		</>
	);
};
