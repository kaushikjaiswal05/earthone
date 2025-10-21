import React, { useEffect, useRef } from "react";

function SnowfallCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 30 + 10,
      speed: Math.random() * 6 + 1,
    }));

    const drawSnowflakes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((flake) => {
        ctx.font = `${flake.size}px Arial`;
        ctx.fillStyle = "white";
        ctx.fillText("❄", flake.x, flake.y);
        flake.y += flake.speed;

        if (flake.y > canvas.height) flake.y = 0;
        if (flake.x > canvas.width || flake.x < 0)
          flake.x = Math.random() * canvas.width;
      });

      requestAnimationFrame(drawSnowflakes);
    };

    drawSnowflakes();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        opacity: 0.8,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "600px",
        zIndex: 1,
      }}
    />
  );
}

export default SnowfallCanvas;
