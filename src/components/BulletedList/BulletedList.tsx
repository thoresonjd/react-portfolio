import React from 'react';
import { BulletPoint } from './BulletPoint';

interface Props {
  items: any
}

export const BulletedList: React.FC<Props> = (props: Props): JSX.Element => {
	return (
		<>
			{props.items.map((item: any, bIndex: number) => (
				<BulletPoint text={item} index={bIndex} key={bIndex} />
			))}
		</>
	);
};
