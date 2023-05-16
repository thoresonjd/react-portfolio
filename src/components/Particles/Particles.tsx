import React from 'react';
import { useCallback } from 'react';
import { Particles as ReactParticles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { ISourceOptions, Engine } from 'tsparticles-engine';
import particlesConfig from './particles-config.json';

export const Particles: React.FC = (): JSX.Element => {

	const initParticles = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	return (
		<ReactParticles init={initParticles} options={particlesConfig as ISourceOptions} />
	);
};
