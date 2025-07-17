"use client";
import React, { useEffect, useId, useMemo } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";
const init=true;
const SparklesBackground = ({
  color = "#FFFFFF",
  density = 120,
  minSize = 0.4,
  maxSize = 1.4,
  speed = 0.5,
  className = "",
}) => {
  const generatedId = useId();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
  }, []);

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    detectRetina: true,
    fpsLimit: 120,
    particles: {
      number: {
        value: density,
        density: { enable: true, width: 400, height: 400 },
      },
      color: { value: color },
      size: { value: { min: minSize, max: maxSize } },
      opacity: {
        value: { min: 0.1, max: 1 },
        animation: {
          enable: true,
          speed,
          startValue: "random",
          destroy: "none",
        },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: speed },
      },
    },
  }), [color, density, minSize, maxSize, speed]);

  return (
    <>
      {init && (
        <Particles
          id={generatedId}
          className={`absolute inset-0 w-full h-full z-0 ${className}`}
          options={options}
        />
      )}
    </>
  );
};

export default SparklesBackground;
