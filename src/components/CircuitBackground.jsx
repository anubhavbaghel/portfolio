import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Iron Man JARVIS Circuit & Network Background
 * Renders an animated futuristic canvas of PCB traces, angled bends,
 * copper junction pads, and glowing electrical pulses inspired by the
 * Stark Industries / JARVIS holographic interface in rich copper/gold.
 */
export default function CircuitBackground() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let isDark = document.documentElement.classList.contains("dark");

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Track mouse position for subtle interactive proximity glow
    let mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Circuit Data Structures
    let traces = [];
    let pulses = [];
    let nodes = [];
    let hudElements = [];

    // Helper: Snap to grid
    const GRID_SIZE = 48;
    const snap = (val) => Math.round(val / GRID_SIZE) * GRID_SIZE;

    // Generate PCB traces with authentic 90° and 45° chamfers
    const generateCircuits = (w, h) => {
      traces = [];
      pulses = [];
      nodes = [];
      hudElements = [];

      const cols = Math.ceil(w / GRID_SIZE);
      const rows = Math.ceil(h / GRID_SIZE);
      const numTraces = Math.min(Math.floor((cols * rows) / 8), 45);

      // Node Map to share junctions
      const nodeKey = (x, y) => `${x},${y}`;
      const nodeMap = new Map();

      const registerNode = (x, y, isSpecial = false) => {
        const key = nodeKey(x, y);
        if (!nodeMap.has(key)) {
          const node = {
            x,
            y,
            radius: isSpecial ? 4 : Math.random() > 0.6 ? 2.5 : 1.5,
            isHollow: Math.random() > 0.5,
            isSpecial,
            pulseIntensity: 0,
          };
          nodeMap.set(key, node);
          nodes.push(node);
        }
        return nodeMap.get(key);
      };

      for (let i = 0; i < numTraces; i++) {
        const startCol = Math.floor(Math.random() * cols);
        const startRow = Math.floor(Math.random() * rows);
        const startX = startCol * GRID_SIZE;
        const startY = startRow * GRID_SIZE;

        const path = [{ x: startX, y: startY }];
        registerNode(startX, startY);

        let currX = startX;
        let currY = startY;
        const segments = Math.floor(Math.random() * 3) + 2; // 2 to 4 segments

        for (let s = 0; s < segments; s++) {
          const dir = Math.floor(Math.random() * 4); // 0: right, 1: down, 2: left, 3: up
          const length = (Math.floor(Math.random() * 4) + 2) * GRID_SIZE;
          const use45 = Math.random() > 0.5;

          if (use45) {
            // 45-degree chamfer
            const diagOffset = GRID_SIZE;
            if (dir === 0) {
              currX += diagOffset;
              currY += diagOffset * (Math.random() > 0.5 ? 1 : -1);
            } else if (dir === 1) {
              currX += diagOffset * (Math.random() > 0.5 ? 1 : -1);
              currY += diagOffset;
            } else if (dir === 2) {
              currX -= diagOffset;
              currY += diagOffset * (Math.random() > 0.5 ? 1 : -1);
            } else {
              currX += diagOffset * (Math.random() > 0.5 ? 1 : -1);
              currY -= diagOffset;
            }
            path.push({ x: currX, y: currY });
          }

          // Straight run
          if (dir === 0) currX += length;
          else if (dir === 1) currY += length;
          else if (dir === 2) currX -= length;
          else currY -= length;

          // Boundary clamp
          currX = Math.max(0, Math.min(w, currX));
          currY = Math.max(0, Math.min(h, currY));

          path.push({ x: currX, y: currY });
        }

        const endNode = registerNode(currX, currY, true);

        // Calculate total path length for smooth interpolation
        let totalLen = 0;
        const segLengths = [];
        for (let p = 0; p < path.length - 1; p++) {
          const dx = path[p + 1].x - path[p].x;
          const dy = path[p + 1].y - path[p].y;
          const segDist = Math.sqrt(dx * dx + dy * dy);
          segLengths.push(segDist);
          totalLen += segDist;
        }

        if (totalLen > 0) {
          const traceObj = {
            id: i,
            path,
            totalLen,
            segLengths,
            endNode,
          };
          traces.push(traceObj);

          // Spawn electrical pulses along this trace
          const numPulsesForTrace = Math.random() > 0.4 ? 1 : 2;
          for (let pIdx = 0; pIdx < numPulsesForTrace; pIdx++) {
            pulses.push({
              trace: traceObj,
              progress: Math.random(), // 0 to 1
              speed: 0.0015 + Math.random() * 0.002, // smooth movement
              length: 0.12 + Math.random() * 0.08, // pulse tail length
              active: true,
              colorShift: Math.random(),
            });
          }
        }
      }

      // Add a couple of subtle JARVIS Arc / HUD ring motifs
      hudElements = [
        {
          x: snap(w * 0.88),
          y: snap(h * 0.22),
          radius: 36,
          angle: 0,
          speed: 0.005,
          type: "arc",
        },
        {
          x: snap(w * 0.08),
          y: snap(h * 0.72),
          radius: 28,
          angle: Math.PI / 4,
          speed: -0.004,
          type: "arc",
        },
        {
          x: snap(w * 0.82),
          y: snap(h * 0.82),
          radius: 24,
          angle: 0,
          speed: 0.006,
          type: "radar",
        },
      ];
    };

    // Resize handler with High-DPI support
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      isDark = document.documentElement.classList.contains("dark");
      generateCircuits(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    // Observer for dark mode class toggles on <html>
    const observer = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Helper: Interpolate coordinates along a segmented path given progress (0 to 1)
    const getPointAtProgress = (trace, progress) => {
      const targetDist = Math.max(0, Math.min(1, progress)) * trace.totalLen;
      let accumulated = 0;

      for (let i = 0; i < trace.segLengths.length; i++) {
        const segDist = trace.segLengths[i];
        if (accumulated + segDist >= targetDist || i === trace.segLengths.length - 1) {
          const segProgress = segDist === 0 ? 0 : (targetDist - accumulated) / segDist;
          const p1 = trace.path[i];
          const p2 = trace.path[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * segProgress,
            y: p1.y + (p2.y - p1.y) * segProgress,
          };
        }
        accumulated += segDist;
      }
      return trace.path[trace.path.length - 1];
    };

    // Main Animation Loop
    let lastTime = performance.now();

    const render = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Colors: Iron Man Copper / Stark Bronze Palette
      // Dark mode: Glowing bronze, copper, bright molten amber pulses
      // Light mode: Refined architectural warm copper traces with metallic sheen
      const traceColor = isDark
        ? "rgba(194, 98, 38, 0.18)"
        : "rgba(180, 83, 9, 0.12)";
      const traceColorHighlight = isDark
        ? "rgba(245, 158, 11, 0.35)"
        : "rgba(180, 83, 9, 0.28)";
      const nodeColor = isDark
        ? "rgba(217, 119, 6, 0.45)"
        : "rgba(180, 83, 9, 0.35)";
      const pulseHead = isDark
        ? "rgba(251, 191, 36, 0.95)"
        : "rgba(180, 83, 9, 0.85)";
      const pulseGlow = isDark
        ? "rgba(245, 158, 11, 0.7)"
        : "rgba(194, 65, 12, 0.4)";

      // 1. Draw Static / Passive Circuit Traces
      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        const path = trace.path;
        if (path.length < 2) continue;

        // Check proximity to mouse for interactive ambient glow
        let isNearMouse = false;
        if (mouse.x > 0) {
          const midPoint = path[Math.floor(path.length / 2)];
          const dx = midPoint.x - mouse.x;
          const dy = midPoint.y - mouse.y;
          if (dx * dx + dy * dy < 180 * 180) {
            isNearMouse = true;
          }
        }

        ctx.strokeStyle = isNearMouse ? traceColorHighlight : traceColor;
        ctx.beginPath();
        ctx.moveTo(path[0].x, path[0].y);
        for (let p = 1; p < path.length; p++) {
          ctx.lineTo(path[p].x, path[p].y);
        }
        ctx.stroke();
      }

      // 2. Draw Moving Electrical Pulses (Data packets travelling through the circuits)
      if (!prefersReducedMotion) {
        ctx.save();
        for (let i = 0; i < pulses.length; i++) {
          const pulse = pulses[i];
          pulse.progress += pulse.speed;

          // When pulse reaches terminal, flare the end node and loop
          if (pulse.progress >= 1) {
            if (pulse.trace.endNode) {
              pulse.trace.endNode.pulseIntensity = 1; // flare
            }
            pulse.progress = 0;
            pulse.speed = 0.0015 + Math.random() * 0.002;
          }

          const headProg = pulse.progress;
          const tailProg = Math.max(0, pulse.progress - pulse.length);

          const headPt = getPointAtProgress(pulse.trace, headProg);
          const tailPt = getPointAtProgress(pulse.trace, tailProg);

          // Draw the luminous gradient pulse line
          const grad = ctx.createLinearGradient(tailPt.x, tailPt.y, headPt.x, headPt.y);
          grad.addColorStop(0, "rgba(217, 119, 6, 0)");
          grad.addColorStop(0.7, pulseGlow);
          grad.addColorStop(1, pulseHead);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(tailPt.x, tailPt.y);
          ctx.lineTo(headPt.x, headPt.y);
          ctx.stroke();

          // Glowing energy head
          ctx.fillStyle = pulseHead;
          ctx.shadowColor = pulseGlow;
          ctx.shadowBlur = isDark ? 6 : 2;
          ctx.beginPath();
          ctx.arc(headPt.x, headPt.y, 1.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0; // reset shadow
        }
        ctx.restore();
      }

      // 3. Draw Junction Nodes & Solder Terminal Pads
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Cool down pulse intensity
        if (node.pulseIntensity > 0) {
          node.pulseIntensity = Math.max(0, node.pulseIntensity - dt * 2);
        }

        const currentRadius = node.radius + node.pulseIntensity * 2;
        const currentAlpha = Math.min(1, 0.4 + node.pulseIntensity * 0.6);

        ctx.fillStyle = isDark
          ? `rgba(245, 158, 11, ${currentAlpha})`
          : `rgba(180, 83, 9, ${currentAlpha})`;
        ctx.strokeStyle = isDark
          ? `rgba(217, 119, 6, ${currentAlpha})`
          : `rgba(180, 83, 9, ${currentAlpha})`;

        if (node.isHollow) {
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Concentric ring for special terminals
        if (node.isSpecial) {
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 3, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // 4. Draw Rotating Futuristic JARVIS HUD Targeting/Radar Rings
      if (!prefersReducedMotion) {
        ctx.save();
        for (let i = 0; i < hudElements.length; i++) {
          const hud = hudElements[i];
          hud.angle += hud.speed;

          ctx.strokeStyle = isDark
            ? "rgba(217, 119, 6, 0.22)"
            : "rgba(180, 83, 9, 0.16)";
          ctx.lineWidth = 0.8;

          // Main ring
          ctx.beginPath();
          ctx.arc(hud.x, hud.y, hud.radius, 0, Math.PI * 2);
          ctx.stroke();

          // Inner rotating dashed arc
          ctx.save();
          ctx.translate(hud.x, hud.y);
          ctx.rotate(hud.angle);

          ctx.setLineDash([6, 6]);
          ctx.beginPath();
          ctx.arc(0, 0, hud.radius - 8, 0, Math.PI * 1.5);
          ctx.stroke();

          // Small crosshair ticks
          ctx.setLineDash([]);
          ctx.beginPath();
          ctx.moveTo(-hud.radius - 4, 0);
          ctx.lineTo(-hud.radius + 2, 0);
          ctx.moveTo(hud.radius - 2, 0);
          ctx.lineTo(hud.radius + 4, 0);
          ctx.stroke();

          ctx.restore();
        }
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
