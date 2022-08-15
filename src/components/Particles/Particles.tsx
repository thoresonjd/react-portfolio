import { useCallback } from "react";
import { Particles as ReactParticles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "tsparticles-engine";
import particlesConfig from "./particles-config.json";

export const Particles: React.FC = () => {

    const initParticles = useCallback(async (engine: any) => {
        await loadFull(engine);
    }, []);

    return (
        <ReactParticles init={initParticles} options={particlesConfig as ISourceOptions} />
    )
}