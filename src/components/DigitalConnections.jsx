import React, { useEffect, useRef } from "react";

const DigitalConnections = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener("resize", handleResize);

    const nodeCount = Math.min(Math.floor((width * height) / 18000), 45);
    let nodes = [];

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.5 + 1,
          pulse: Math.random() * Math.PI,
          pulseSpeed: 0.02 + Math.random() * 0.02,
        });
      }
    };

    initNodes();

    const maxDistance = 140;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();

            // Occasional subtle pulse on lines
            if (dist < maxDistance * 0.6) {
              const midX = (nodes[i].x + nodes[j].x) / 2;
              const midY = (nodes[i].y + nodes[j].y) / 2;
              const pulseAlpha = Math.sin(nodes[i].pulse) * 0.15;
              if (pulseAlpha > 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
                ctx.beginPath();
                ctx.arc(midX, midY, 1, 0, Math.PI * 2);
                ctx.fill();
              }
            }
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        const currentRadius = node.radius + Math.sin(node.pulse) * 0.4;
        const alpha = 0.2 + Math.sin(node.pulse) * 0.15;

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();

        // Node subtle halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.1})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-10 opacity-75"
    />
  );
};

export default DigitalConnections;
