import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
    title: string
}

export const TabTitle: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<Helmet>
			<title>{props.title}</title>
		</Helmet>
	);
};
