import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {

  const options = useMemo(() => {
    return {
      fpsLimit: window.innerWidth <= 575? 30 : 35,
      particles: {
        links:{
          enable:  true,
          color:{
            value: '#fff'
          }
        },
        number:{
          value: window.innerWidth <= 575? 30 : 150
        },
        move: {
          enable:true,
        },
        size: {
          value: {min: 1, max:1}

        },
        color: {
          value: '#fff'
        },


      }
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine)
  },[])
  return <Particles className="particles" init={particlesInit} options={options}></Particles>;
};

export default ParticlesBackground;
