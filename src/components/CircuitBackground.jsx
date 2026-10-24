import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Iron Man J.A.R.V.I.S. Cinematic HUD & Copper Circuit Network
 *
 * Engineered for maximum visual impact AND 60fps zero-lag performance:
 * - Dual-layer architecture: Static schematic (hexagonal lattice, parallel bus highways,
 *   IC terminals, corner calipers, and grid ticks) is pre-rendered ONCE onto an offscreen canvas.
 * - Dynamic 60fps animation layer: Only renders moving electrical pulses, the rotating
 *   Arc Reactor telemetry ring, and cursor holographic energy glow.
 * - Tab visibility listener pauses animation when the tab is blurred/hidden.
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
    let isTabVisible = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Offscreen canvas for zero-overhead static background rendering
    let offscreenCanvas = document.createElement("canvas");
    let offscreenCtx = offscreenCanvas.getContext("2d");

    // Interactive mouse coordinates with smooth easing
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      active: false,
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -2000;
      mouse.targetY = -2000;
      mouse.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Tab visibility handling (prevents background GPU drain)
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Circuit Data Structures
    let pulseHighwayTraces = [];
    let movingPulses = [];
    let terminalFlares = [];

    // Grid sizing
    const GRID_SIZE = 56;
    const snap = (v) => Math.round(v / GRID_SIZE) * GRID_SIZE;

    // Build the high-tech J.A.R.V.I.S. Schematics & Parallel Bus Highways
    const generateSchematics = (w, h) => {
      pulseHighwayTraces = [];
      movingPulses = [];
      terminalFlares = [];

      // 1. Offscreen Canvas Sizing
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      offscreenCanvas.width = Math.floor(w * dpr);
      offscreenCanvas.height = Math.floor(h * dpr);
      offscreenCtx.setTransform(1, 0, 0, 1, 0, 0);
      offscreenCtx.scale(dpr, dpr);
      offscreenCtx.clearRect(0, 0, w, h);

      // Color Definitions based on current theme
      const hexColor = isDark
        ? "rgba(217, 119, 6, 0.05)"
        : "rgba(180, 83, 9, 0.035)";
      const busTraceBase = isDark
        ? "rgba(194, 98, 38, 0.16)"
        : "rgba(180, 83, 9, 0.10)";
      const busTraceAccent = isDark
        ? "rgba(245, 158, 11, 0.28)"
        : "rgba(194, 65, 12, 0.18)";
      const hudDim = isDark
        ? "rgba(217, 119, 6, 0.24)"
        : "rgba(180, 83, 9, 0.16)";
      const padColor = isDark
        ? "rgba(245, 158, 11, 0.45)"
        : "rgba(180, 83, 9, 0.35)";

      // --- A. Hexagonal Matrix Clusters (Stark Armor Lattice) ---
      const hexRadius = 18;
      const hexW = Math.sqrt(3) * hexRadius;
      const hexH = 2 * hexRadius * 0.75;
      const drawHex = (cx, cy) => {
        offscreenCtx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + Math.PI / 6;
          const hx = cx + hexRadius * Math.cos(angle);
          const hy = cy + hexRadius * Math.sin(angle);
          if (i === 0) offscreenCtx.moveTo(hx, hy);
          else offscreenCtx.lineTo(hx, hy);
        }
        offscreenCtx.closePath();
        offscreenCtx.stroke();
      };

      offscreenCtx.strokeStyle = hexColor;
      offscreenCtx.lineWidth = 0.75;

      // Cluster 1: Top right region
      const cluster1X = snap(w * 0.82);
      const cluster1Y = snap(h * 0.25);
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          if (Math.abs(r) + Math.abs(c) <= 3) {
            const hx = cluster1X + c * hexW + (r % 2 ? hexW / 2 : 0);
            const hy = cluster1Y + r * hexH;
            drawHex(hx, hy);
          }
        }
      }

      // Cluster 2: Bottom left region
      const cluster2X = snap(w * 0.14);
      const cluster2Y = snap(h * 0.78);
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          if (Math.abs(r) + Math.abs(c) <= 2) {
            const hx = cluster2X + c * hexW + (r % 2 ? hexW / 2 : 0);
            const hy = cluster2Y + r * hexH;
            drawHex(hx, hy);
          }
        }
      }

      // --- B. Parallel High-Speed Copper Bus Highways ---
      // Real motherboard / IC architecture: multiple parallel traces bending together at 45°
      const createBusHighway = (startX, startY, count, spacing, segments) => {
        const busLines = [];

        for (let b = 0; b < count; b++) {
          const offset = (b - (count - 1) / 2) * spacing;
          let currentPt = { x: startX + offset, y: startY };
          const path = [{ ...currentPt }];

          for (let s = 0; s < segments.length; s++) {
            const seg = segments[s];
            if (seg.type === "straight") {
              currentPt.x += seg.dx;
              currentPt.y += seg.dy;
              path.push({ ...currentPt });
            } else if (seg.type === "45deg") {
              currentPt.x += seg.dx;
              currentPt.y += seg.dy;
              path.push({ ...currentPt });
            }
          }

          // Compute path length
          let totalLen = 0;
          const segLengths = [];
          for (let p = 0; p < path.length - 1; p++) {
            const dist = Math.hypot(path[p + 1].x - path[p].x, path[p + 1].y - path[p].y);
            segLengths.push(dist);
            totalLen += dist;
          }

          const lineObj = {
            path,
            totalLen,
            segLengths,
            endPt: path[path.length - 1],
            isAccent: b === 0 || b === count - 1,
          };

          busLines.push(lineObj);
          pulseHighwayTraces.push(lineObj);

          // Draw the bus trace on offscreen canvas
          offscreenCtx.strokeStyle = lineObj.isAccent ? busTraceAccent : busTraceBase;
          offscreenCtx.lineWidth = lineObj.isAccent ? 1.2 : 0.9;
          offscreenCtx.beginPath();
          offscreenCtx.moveTo(path[0].x, path[0].y);
          for (let p = 1; p < path.length; p++) {
            offscreenCtx.lineTo(path[p].x, path[p].y);
          }
          offscreenCtx.stroke();

          // Solder Terminal Pad at start and end
          offscreenCtx.fillStyle = padColor;
          offscreenCtx.beginPath();
          offscreenCtx.arc(path[0].x, path[0].y, 2, 0, Math.PI * 2);
          offscreenCtx.fill();

          offscreenCtx.beginPath();
          offscreenCtx.arc(path[path.length - 1].x, path[path.length - 1].y, 2.5, 0, Math.PI * 2);
          offscreenCtx.fill();

          // Outer solder ring for terminal
          offscreenCtx.strokeStyle = padColor;
          offscreenCtx.lineWidth = 0.75;
          offscreenCtx.beginPath();
          offscreenCtx.arc(path[path.length - 1].x, path[path.length - 1].y, 5, 0, Math.PI * 2);
          offscreenCtx.stroke();
        }
      };

      // Bus Highway 1: Top-Left to Mid-Center
      createBusHighway(snap(w * 0.05), snap(h * 0.15), 3, 10, [
        { type: "straight", dx: w * 0.25, dy: 0 },
        { type: "45deg", dx: 60, dy: 60 },
        { type: "straight", dx: w * 0.15, dy: 0 },
      ]);

      // Bus Highway 2: Right Edge diagonally inward
      createBusHighway(snap(w * 0.95), snap(h * 0.45), 4, 9, [
        { type: "straight", dx: -w * 0.2, dy: 0 },
        { type: "45deg", dx: -70, dy: 70 },
        { type: "straight", dx: -w * 0.1, dy: 0 },
      ]);

      // Bus Highway 3: Bottom-Left rising
      createBusHighway(snap(w * 0.1), snap(h * 0.9), 3, 10, [
        { type: "straight", dx: 0, dy: -h * 0.2 },
        { type: "45deg", dx: 80, dy: -80 },
        { type: "straight", dx: w * 0.25, dy: 0 },
      ]);

      // Bus Highway 4: Top-Center to Top-Right
      createBusHighway(snap(w * 0.45), snap(h * 0.08), 3, 8, [
        { type: "straight", dx: w * 0.22, dy: 0 },
        { type: "45deg", dx: 50, dy: 50 },
        { type: "straight", dx: 0, dy: h * 0.18 },
      ]);

      // --- C. Singular Branching Micro-Traces with 45° bends ---
      const numSingles = Math.min(Math.floor((w * h) / 75000), 22);
      for (let i = 0; i < numSingles; i++) {
        const sx = snap(Math.random() * w);
        const sy = snap(Math.random() * h);
        const path = [{ x: sx, y: sy }];

        let cx = sx;
        let cy = sy;
        const steps = Math.floor(Math.random() * 3) + 2;

        for (let s = 0; s < steps; s++) {
          const isHoriz = Math.random() > 0.5;
          const dir = Math.random() > 0.5 ? 1 : -1;
          const len = (Math.floor(Math.random() * 3) + 1) * GRID_SIZE;

          if (Math.random() > 0.4) {
            // 45 deg chamfer
            cx += 28 * dir;
            cy += 28 * (Math.random() > 0.5 ? 1 : -1);
            path.push({ x: cx, y: cy });
          }

          if (isHoriz) cx += len * dir;
          else cy += len * dir;

          cx = Math.max(20, Math.min(w - 20, cx));
          cy = Math.max(20, Math.min(h - 20, cy));
          path.push({ x: cx, y: cy });
        }

        let totalLen = 0;
        const segLengths = [];
        for (let p = 0; p < path.length - 1; p++) {
          const dist = Math.hypot(path[p + 1].x - path[p].x, path[p + 1].y - path[p].y);
          segLengths.push(dist);
          totalLen += dist;
        }

        if (totalLen > 60) {
          const singleObj = {
            path,
            totalLen,
            segLengths,
            endPt: path[path.length - 1],
            isAccent: Math.random() > 0.6,
          };
          pulseHighwayTraces.push(singleObj);

          offscreenCtx.strokeStyle = busTraceBase;
          offscreenCtx.lineWidth = 0.8;
          offscreenCtx.beginPath();
          offscreenCtx.moveTo(path[0].x, path[0].y);
          for (let p = 1; p < path.length; p++) {
            offscreenCtx.lineTo(path[p].x, path[p].y);
          }
          offscreenCtx.stroke();

          // Terminal pad
          offscreenCtx.fillStyle = padColor;
          offscreenCtx.beginPath();
          offscreenCtx.arc(path[path.length - 1].x, path[path.length - 1].y, 2, 0, Math.PI * 2);
          offscreenCtx.fill();
        }
      }

      // --- D. Stark HUD Corner Calipers & Telemetry Labels ---
      const margin = 24;
      const caliperLen = 32;
      offscreenCtx.strokeStyle = hudDim;
      offscreenCtx.lineWidth = 1.2;

      // Top-Left Caliper
      offscreenCtx.beginPath();
      offscreenCtx.moveTo(margin, margin + caliperLen);
      offscreenCtx.lineTo(margin, margin);
      offscreenCtx.lineTo(margin + caliperLen, margin);
      offscreenCtx.stroke();

      // Top-Right Caliper
      offscreenCtx.beginPath();
      offscreenCtx.moveTo(w - margin - caliperLen, margin);
      offscreenCtx.lineTo(w - margin, margin);
      offscreenCtx.lineTo(w - margin, margin + caliperLen);
      offscreenCtx.stroke();

      // Bottom-Left Caliper
      offscreenCtx.beginPath();
      offscreenCtx.moveTo(margin, h - margin - caliperLen);
      offscreenCtx.lineTo(margin, h - margin);
      offscreenCtx.lineTo(margin + caliperLen, h - margin);
      offscreenCtx.stroke();

      // Bottom-Right Caliper
      offscreenCtx.beginPath();
      offscreenCtx.moveTo(w - margin - caliperLen, h - margin);
      offscreenCtx.lineTo(w - margin, h - margin);
      offscreenCtx.lineTo(w - margin, h - margin - caliperLen);
      offscreenCtx.stroke();

      // Small Stark HUD Micro-Labels (rendered once in crisp mono)
      offscreenCtx.fillStyle = hudDim;
      offscreenCtx.font = "9px 'Helvetica Neue', Helvetica, monospace";
      offscreenCtx.fillText("// STARK.SYS_01", margin + 6, margin + 14);
      offscreenCtx.fillText("ARC.CORE // 432.8 MHz", w - margin - 110, margin + 14);
      offscreenCtx.fillText("SYS.STATUS // NOMINAL", margin + 6, h - margin - 6);
      offscreenCtx.fillText("TELEMETRY.LOC // 28.61° N", w - margin - 128, h - margin - 6);

      // --- E. Pre-populate Electrical Pulses along Highways ---
      const totalPulses = Math.min(pulseHighwayTraces.length * 2, 38);
      for (let i = 0; i < totalPulses; i++) {
        const trace = pulseHighwayTraces[Math.floor(Math.random() * pulseHighwayTraces.length)];
        movingPulses.push({
          trace,
          progress: Math.random(),
          speed: 0.0018 + Math.random() * 0.0025, // silky smooth
          tailLen: 0.09 + Math.random() * 0.08,
          headRadius: trace.isAccent ? 2.0 : 1.5,
        });
      }
    };

    // Interpolate coordinate along pre-computed trace
    const getPointAlongTrace = (trace, progress) => {
      const targetDist = Math.max(0, Math.min(1, progress)) * trace.totalLen;
      let accumulated = 0;

      for (let i = 0; i < trace.segLengths.length; i++) {
        const segDist = trace.segLengths[i];
        if (accumulated + segDist >= targetDist || i === trace.segLengths.length - 1) {
          const ratio = segDist === 0 ? 0 : (targetDist - accumulated) / segDist;
          const p1 = trace.path[i];
          const p2 = trace.path[i + 1];
          return {
            x: p1.x + (p2.x - p1.x) * ratio,
            y: p1.y + (p2.y - p1.y) * ratio,
          };
        }
        accumulated += segDist;
      }
      return trace.path[trace.path.length - 1];
    };

    // Resize handler
    const handleResize = () => {
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
      generateSchematics(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Watch dark mode toggle on root
    const observer = new MutationObserver(() => {
      const currentDark = document.documentElement.classList.contains("dark");
      if (currentDark !== isDark) {
        isDark = currentDark;
        generateSchematics(width, height);
      }
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Arc Reactor HUD rotating parameters
    let arcAngleClockwise = 0;
    let arcAngleCounter = 0;
    let lastTime = performance.now();

    // 60 FPS Dynamic Animation Loop
    const render = (currentTime) => {
      if (!isTabVisible) return;

      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      // 1. Blit the pre-rendered static schematic in a SINGLE instant draw call (Zero Lag)
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(offscreenCanvas, 0, 0, width, height);

      // Dynamic Colors
      const pulseHead = isDark ? "rgba(251, 191, 36, 0.98)" : "rgba(194, 65, 12, 0.92)";
      const pulseMid = isDark ? "rgba(245, 158, 11, 0.85)" : "rgba(217, 119, 6, 0.75)";
      const pulseTail = isDark ? "rgba(217, 119, 6, 0)" : "rgba(180, 83, 9, 0)";
      const flareCore = isDark ? "rgba(253, 230, 138, 0.95)" : "rgba(217, 119, 6, 0.8)";
      const flareAura = isDark ? "rgba(245, 158, 11, 0.4)" : "rgba(194, 65, 12, 0.25)";

      // 2. Interactive Holographic Cursor Glow
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;

        const cursorGlow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          160
        );
        cursorGlow.addColorStop(0, isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(194, 65, 12, 0.06)");
        cursorGlow.addColorStop(0.5, isDark ? "rgba(217, 119, 6, 0.05)" : "rgba(180, 83, 9, 0.02)");
        cursorGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = cursorGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 160, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Animate Electrical Pulses (Fast, vectorized rendering)
      if (!prefersReducedMotion) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 0; i < movingPulses.length; i++) {
          const pulse = movingPulses[i];
          pulse.progress += pulse.speed;

          // Loop & Flare terminal
          if (pulse.progress >= 1) {
            // Trigger a warm copper flare at the end point
            terminalFlares.push({
              x: pulse.trace.endPt.x,
              y: pulse.trace.endPt.y,
              radius: 3,
              maxRadius: 10,
              alpha: 0.9,
            });

            pulse.progress = 0;
            pulse.speed = 0.0016 + Math.random() * 0.0026;
          }

          const headT = pulse.progress;
          const tailT = Math.max(0, pulse.progress - pulse.tailLen);

          const head = getPointAlongTrace(pulse.trace, headT);
          const tail = getPointAlongTrace(pulse.trace, tailT);

          // Draw the electric comet tail
          const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
          grad.addColorStop(0, pulseTail);
          grad.addColorStop(0.5, pulseMid);
          grad.addColorStop(1, pulseHead);

          ctx.strokeStyle = grad;
          ctx.lineWidth = pulse.trace.isAccent ? 2.0 : 1.4;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          ctx.lineTo(head.x, head.y);
          ctx.stroke();

          // Electric packet head
          ctx.fillStyle = pulseHead;
          ctx.beginPath();
          ctx.arc(head.x, head.y, pulse.headRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // 4. Render Terminal Flares (Energy dissipation upon packet arrival)
        for (let f = terminalFlares.length - 1; f >= 0; f--) {
          const flare = terminalFlares[f];
          flare.radius += dt * 18;
          flare.alpha -= dt * 2.5;

          if (flare.alpha <= 0 || flare.radius >= flare.maxRadius) {
            terminalFlares.splice(f, 1);
            continue;
          }

          ctx.strokeStyle = `rgba(245, 158, 11, ${flare.alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(flare.x, flare.y, flare.radius, 0, Math.PI * 2);
          ctx.stroke();

          ctx.fillStyle = `rgba(253, 230, 138, ${flare.alpha * 0.5})`;
          ctx.beginPath();
          ctx.arc(flare.x, flare.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }

        // 5. Arc Reactor Holographic Telemetry Rings (Right-side HUD Anchor)
        arcAngleClockwise += dt * 0.35;
        arcAngleCounter -= dt * 0.22;

        const arcX = snap(width * 0.88);
        const arcY = snap(height * 0.32);

        ctx.save();
        ctx.translate(arcX, arcY);

        // Core dot
        ctx.fillStyle = isDark ? "rgba(251, 191, 36, 0.7)" : "rgba(194, 65, 12, 0.5)";
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner dashed ring (Counter-clockwise)
        ctx.save();
        ctx.rotate(arcAngleCounter);
        ctx.strokeStyle = isDark ? "rgba(245, 158, 11, 0.28)" : "rgba(180, 83, 9, 0.2)";
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 8]);
        ctx.beginPath();
        ctx.arc(0, 0, 22, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Outer segmented ring with tick marks (Clockwise)
        ctx.save();
        ctx.rotate(arcAngleClockwise);
        ctx.strokeStyle = isDark ? "rgba(217, 119, 6, 0.32)" : "rgba(180, 83, 9, 0.22)";
        ctx.lineWidth = 1.2;
        ctx.setLineDash([18, 12, 4, 12]);
        ctx.beginPath();
        ctx.arc(0, 0, 36, 0, Math.PI * 2);
        ctx.stroke();

        // 4 Cardinal Axis Crosshair ticks (0°, 90°, 180°, 270°)
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-42, 0);
        ctx.lineTo(-32, 0);
        ctx.moveTo(32, 0);
        ctx.lineTo(42, 0);
        ctx.moveTo(0, -42);
        ctx.lineTo(0, -32);
        ctx.moveTo(0, 32);
        ctx.lineTo(0, 42);
        ctx.stroke();

        ctx.restore();

        ctx.restore();
      }

      if (!prefersReducedMotion && isTabVisible) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
