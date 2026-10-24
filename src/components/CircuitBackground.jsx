import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Iron Man J.A.R.V.I.S. Cinematic HUD with Blurred Orbital Space View
 *
 * Layered Experience:
 * 1. Deep Space View: Deep cosmic void with blurred copper and sapphire nebulae clouds,
 *    curved planetary limb scatter, and soft bokeh stellar constellations.
 * 2. 10-Coil Arc Reactor Core: Mark-VI chest Arc Reactor with 10 copper electromagnets
 *    breathing at 70 BPM with counter-rotating telemetry arcs.
 * 3. Moving High-Speed Copper Bus Highways: Coordinated parallel traces with 45° chamfers
 *    and serial data packet bursts (`• • •`) with glowing comet trails.
 * 4. Interactive Holographic Target Reticle: Mouse spring-lagged crosshair with live
 *    telemetry coordinates and click shockwave energy ripples.
 * 5. High Performance: Complex static blueprints and space horizon pre-cached on an
 *    offscreen buffer; cosmic nebulae rendered via GPU-accelerated CSS compositor.
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

    // Dual-layer: Offscreen canvas for zero-overhead static background rendering
    const offscreenCanvas = document.createElement("canvas");
    const offscreenCtx = offscreenCanvas.getContext("2d");

    // Interactive mouse state with spring-lag physics (Tony Stark HUD tracking)
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      active: false,
      reticleX: -2000,
      reticleY: -2000,
    };

    // Click shockwave ring ripples
    const shockwaves = [];

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

    const handleClick = (e) => {
      if (shockwaves.length < 4) {
        shockwaves.push({
          x: e.clientX,
          y: e.clientY,
          radius: 12,
          maxRadius: Math.min(width, height) * 0.45,
          alpha: 0.85,
          speed: 420,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick, { passive: true });

    // Tab visibility handling
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !prefersReducedMotion) {
        lastTime = performance.now();
        animationFrameId = requestAnimationFrame(render);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Circuit & Space Data Structures
    let traces = [];
    let movingPackets = [];
    let terminalFlares = [];
    let distantStars = [];

    const GRID_SIZE = 52;
    const snap = (v) => Math.round(v / GRID_SIZE) * GRID_SIZE;

    // Arc Reactor Core position
    let arcCore = { x: 0, y: 0, radius: 46 };

    // Build the high-tech J.A.R.V.I.S. Schematics, Orbital Horizon & Space View
    const generateSchematics = (w, h) => {
      traces = [];
      movingPackets = [];
      terminalFlares = [];
      distantStars = [];

      arcCore.x = snap(w * 0.86);
      arcCore.y = snap(h * 0.28);

      // 1. Configure Offscreen Buffer
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
        : "rgba(180, 83, 9, 0.09)";
      const busTraceAccent = isDark
        ? "rgba(245, 158, 11, 0.30)"
        : "rgba(194, 65, 12, 0.18)";
      const hudDim = isDark
        ? "rgba(217, 119, 6, 0.24)"
        : "rgba(180, 83, 9, 0.16)";
      const padColor = isDark
        ? "rgba(245, 158, 11, 0.45)"
        : "rgba(180, 83, 9, 0.35)";

      // --- A. Distant Blurred Cosmic Stars & Stellar Field ---
      const starCount = isDark ? 65 : 25;
      for (let s = 0; s < starCount; s++) {
        distantStars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.6 + 0.6,
          baseAlpha: Math.random() * 0.5 + 0.25,
          twinkleSpeed: Math.random() * 1.2 + 0.5,
          twinklePhase: Math.random() * Math.PI * 2,
          isCopperStar: Math.random() > 0.55,
        });
      }

      // --- B. Distant Curved Orbital Horizon (Earth Atmospheric Limb) ---
      if (isDark) {
        offscreenCtx.save();
        const horizonCenterX = w * 0.4;
        const horizonCenterY = h * 1.85;
        const horizonRadius = h * 1.05;

        // Faint atmospheric limb glow
        const horizonGlow = offscreenCtx.createRadialGradient(
          horizonCenterX,
          horizonCenterY,
          horizonRadius - 30,
          horizonCenterX,
          horizonCenterY,
          horizonRadius + 50
        );
        horizonGlow.addColorStop(0, "rgba(217, 119, 6, 0)");
        horizonGlow.addColorStop(0.65, "rgba(217, 119, 6, 0.06)");
        horizonGlow.addColorStop(0.85, "rgba(245, 158, 11, 0.12)");
        horizonGlow.addColorStop(1, "rgba(217, 119, 6, 0)");

        offscreenCtx.fillStyle = horizonGlow;
        offscreenCtx.beginPath();
        offscreenCtx.arc(horizonCenterX, horizonCenterY, horizonRadius + 50, 0, Math.PI * 2);
        offscreenCtx.fill();

        // Delicate horizon line
        offscreenCtx.strokeStyle = "rgba(245, 158, 11, 0.16)";
        offscreenCtx.lineWidth = 1;
        offscreenCtx.beginPath();
        offscreenCtx.arc(horizonCenterX, horizonCenterY, horizonRadius, Math.PI * 1.15, Math.PI * 1.85);
        offscreenCtx.stroke();
        offscreenCtx.restore();
      }

      // --- C. Hexagonal Nanotech Matrix Clusters ---
      const hexRadius = 16;
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

      // Cluster 1: Around the Arc Reactor Core
      for (let r = -2; r <= 2; r++) {
        for (let c = -2; c <= 2; c++) {
          if (Math.abs(r) + Math.abs(c) <= 3) {
            const hx = arcCore.x + c * hexW + (r % 2 ? hexW / 2 : 0);
            const hy = arcCore.y + r * hexH;
            drawHex(hx, hy);
          }
        }
      }

      // Cluster 2: Bottom-left structural matrix
      const cluster2X = snap(w * 0.12);
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

      // --- D. Parallel High-Speed Copper Bus Highways ---
      const createBusHighway = (startX, startY, count, spacing, segments) => {
        for (let b = 0; b < count; b++) {
          const offset = (b - (count - 1) / 2) * spacing;
          let currentPt = { x: startX + offset, y: startY };
          const path = [{ ...currentPt }];

          for (let s = 0; s < segments.length; s++) {
            const seg = segments[s];
            currentPt.x += seg.dx;
            currentPt.y += seg.dy;
            path.push({ ...currentPt });
          }

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
            busGroup: true,
          };

          traces.push(lineObj);

          // Draw the bus trace on offscreen canvas
          offscreenCtx.strokeStyle = lineObj.isAccent ? busTraceAccent : busTraceBase;
          offscreenCtx.lineWidth = lineObj.isAccent ? 1.2 : 0.85;
          offscreenCtx.beginPath();
          offscreenCtx.moveTo(path[0].x, path[0].y);
          for (let p = 1; p < path.length; p++) {
            offscreenCtx.lineTo(path[p].x, path[p].y);
          }
          offscreenCtx.stroke();

          // Solder Terminal Pad at start & end
          offscreenCtx.fillStyle = padColor;
          offscreenCtx.beginPath();
          offscreenCtx.arc(path[0].x, path[0].y, 2, 0, Math.PI * 2);
          offscreenCtx.fill();

          offscreenCtx.beginPath();
          offscreenCtx.arc(path[path.length - 1].x, path[path.length - 1].y, 2.5, 0, Math.PI * 2);
          offscreenCtx.fill();

          offscreenCtx.strokeStyle = padColor;
          offscreenCtx.lineWidth = 0.75;
          offscreenCtx.beginPath();
          offscreenCtx.arc(path[path.length - 1].x, path[path.length - 1].y, 5, 0, Math.PI * 2);
          offscreenCtx.stroke();
        }
      };

      // 1. Bus: Power conduit from Arc Reactor
      createBusHighway(arcCore.x, arcCore.y + 46, 4, 9, [
        { dx: 0, dy: h * 0.18 },
        { dx: -60, dy: 60 },
        { dx: -w * 0.25, dy: 0 },
      ]);

      // 2. Bus: Top-Left to Center CPU pipeline
      createBusHighway(snap(w * 0.04), snap(h * 0.12), 3, 10, [
        { dx: w * 0.26, dy: 0 },
        { dx: 54, dy: 54 },
        { dx: w * 0.16, dy: 0 },
      ]);

      // 3. Bus: Bottom-Left rising telemetry bus
      createBusHighway(snap(w * 0.08), snap(h * 0.92), 3, 10, [
        { dx: 0, dy: -h * 0.22 },
        { dx: 70, dy: -70 },
        { dx: w * 0.28, dy: 0 },
      ]);

      // 4. Bus: Right-edge horizontal feed
      createBusHighway(snap(w * 0.96), snap(h * 0.65), 3, 8, [
        { dx: -w * 0.22, dy: 0 },
        { dx: -50, dy: 50 },
        { dx: -w * 0.12, dy: 0 },
      ]);

      // --- E. Singular Branching Micro-Traces with 45° chamfers ---
      const numSingles = Math.min(Math.floor((w * h) / 72000), 24);
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

          if (Math.random() > 0.35) {
            cx += 26 * dir;
            cy += 26 * (Math.random() > 0.5 ? 1 : -1);
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
            isAccent: Math.random() > 0.65,
            busGroup: false,
          };
          traces.push(singleObj);

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

      // --- F. Stark HUD Corner Calipers & Telemetry Labels ---
      const margin = 20;
      const caliperLen = 30;
      offscreenCtx.strokeStyle = hudDim;
      offscreenCtx.lineWidth = 1.2;

      // 4 Corner Brackets
      offscreenCtx.beginPath();
      // Top-Left
      offscreenCtx.moveTo(margin, margin + caliperLen);
      offscreenCtx.lineTo(margin, margin);
      offscreenCtx.lineTo(margin + caliperLen, margin);
      // Top-Right
      offscreenCtx.moveTo(w - margin - caliperLen, margin);
      offscreenCtx.lineTo(w - margin, margin);
      offscreenCtx.lineTo(w - margin, margin + caliperLen);
      // Bottom-Left
      offscreenCtx.moveTo(margin, h - margin - caliperLen);
      offscreenCtx.lineTo(margin, h - margin);
      offscreenCtx.lineTo(margin + caliperLen, h - margin);
      // Bottom-Right
      offscreenCtx.moveTo(w - margin - caliperLen, h - margin);
      offscreenCtx.lineTo(w - margin, h - margin);
      offscreenCtx.lineTo(w - margin, h - margin - caliperLen);
      offscreenCtx.stroke();

      // Technical Telemetry Annotations
      offscreenCtx.fillStyle = hudDim;
      offscreenCtx.font = "9px 'Helvetica Neue', Helvetica, monospace";
      offscreenCtx.fillText("// J.A.R.V.I.S. ORBITAL HUD [V-2.6]", margin + 6, margin + 14);
      offscreenCtx.fillText("ARC.REACTOR // MK-VI COIL: ACTIVE", w - margin - 176, margin + 14);
      offscreenCtx.fillText("SPACE.VIEW // ORBITAL INCLINATION 51.6°", margin + 6, h - margin - 6);
      offscreenCtx.fillText("PWR.STATUS // 100% NOMINAL", w - margin - 150, h - margin - 6);

      // --- G. Pre-populate Electrical Packets ---
      const totalPulses = Math.min(traces.length * 2, 42);
      for (let i = 0; i < totalPulses; i++) {
        const trace = traces[Math.floor(Math.random() * traces.length)];
        movingPackets.push({
          trace,
          progress: Math.random(),
          speed: 0.0016 + Math.random() * 0.0024,
          tailLen: 0.08 + Math.random() * 0.06,
          headRadius: trace.isAccent ? 2.0 : 1.4,
          isBurst: Math.random() > 0.6,
        });
      }
    };

    // Interpolate coordinate along trace
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

    // Dynamic animation parameters
    let arcAngle = 0;
    let arcPulsePhase = 0;
    let lastTime = performance.now();

    // 60 FPS Dynamic Animation Loop
    const render = (currentTime) => {
      if (!isTabVisible) return;

      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      // 1. Instant offscreen blit (Zero lag static baseline)
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(offscreenCanvas, 0, 0, width, height);

      // Dynamic Colors
      const pulseHead = isDark ? "rgba(251, 191, 36, 0.98)" : "rgba(194, 65, 12, 0.92)";
      const pulseMid = isDark ? "rgba(245, 158, 11, 0.82)" : "rgba(217, 119, 6, 0.72)";
      const pulseTail = "rgba(217, 119, 6, 0)";
      const coilColor = isDark ? "rgba(217, 119, 6, 0.55)" : "rgba(180, 83, 9, 0.4)";
      const coilGlow = isDark ? "rgba(251, 191, 36, 0.75)" : "rgba(194, 65, 12, 0.55)";

      // 2. Animate Soft Twinkling Bokeh Stars (Distant Space Depth)
      if (!prefersReducedMotion && isDark) {
        for (let s = 0; s < distantStars.length; s++) {
          const star = distantStars[s];
          star.twinklePhase += dt * star.twinkleSpeed;
          const currentAlpha = star.baseAlpha * (0.65 + 0.35 * Math.sin(star.twinklePhase));

          ctx.fillStyle = star.isCopperStar
            ? `rgba(251, 191, 36, ${currentAlpha})`
            : `rgba(224, 231, 255, ${currentAlpha * 0.85})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 3. Interactive Cursor Spring HUD Reticle
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;

        mouse.reticleX += (mouse.x - mouse.reticleX) * 0.08;
        mouse.reticleY += (mouse.y - mouse.reticleY) * 0.08;

        // Subtle warm radial copper ambient aura
        const cursorAura = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          180
        );
        cursorAura.addColorStop(0, isDark ? "rgba(245, 158, 11, 0.12)" : "rgba(194, 65, 12, 0.06)");
        cursorAura.addColorStop(0.5, isDark ? "rgba(217, 119, 6, 0.05)" : "rgba(180, 83, 9, 0.02)");
        cursorAura.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = cursorAura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fill();

        // Tony Stark Holographic Target Reticle
        ctx.save();
        ctx.translate(mouse.reticleX, mouse.reticleY);
        ctx.strokeStyle = isDark ? "rgba(245, 158, 11, 0.35)" : "rgba(180, 83, 9, 0.28)";
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.arc(0, 0, 14, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(-18, 0);
        ctx.lineTo(-10, 0);
        ctx.moveTo(10, 0);
        ctx.lineTo(18, 0);
        ctx.moveTo(0, -18);
        ctx.lineTo(0, -10);
        ctx.moveTo(0, 10);
        ctx.lineTo(0, 18);
        ctx.stroke();

        ctx.restore();
      }

      // 4. Click Shockwave Energy Surges
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        sw.radius += sw.speed * dt;
        sw.alpha -= dt * 1.2;

        if (sw.alpha <= 0 || sw.radius >= sw.maxRadius) {
          shockwaves.splice(s, 1);
          continue;
        }

        ctx.strokeStyle = isDark
          ? `rgba(251, 191, 36, ${sw.alpha * 0.7})`
          : `rgba(194, 65, 12, ${sw.alpha * 0.5})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 5. Animate Moving Electrical Data Packets
      if (!prefersReducedMotion) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        for (let i = 0; i < movingPackets.length; i++) {
          const packet = movingPackets[i];
          packet.progress += packet.speed;

          if (packet.progress >= 1) {
            terminalFlares.push({
              x: packet.trace.endPt.x,
              y: packet.trace.endPt.y,
              radius: 3,
              maxRadius: 11,
              alpha: 0.9,
            });

            packet.progress = 0;
            packet.speed = 0.0016 + Math.random() * 0.0024;
          }

          const headT = packet.progress;
          const tailT = Math.max(0, packet.progress - packet.tailLen);

          const head = getPointAlongTrace(packet.trace, headT);
          const tail = getPointAlongTrace(packet.trace, tailT);

          const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
          grad.addColorStop(0, pulseTail);
          grad.addColorStop(0.5, pulseMid);
          grad.addColorStop(1, pulseHead);

          ctx.strokeStyle = grad;
          ctx.lineWidth = packet.trace.isAccent ? 2.0 : 1.4;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          ctx.lineTo(head.x, head.y);
          ctx.stroke();

          ctx.fillStyle = pulseHead;
          ctx.beginPath();
          ctx.arc(head.x, head.y, packet.headRadius, 0, Math.PI * 2);
          ctx.fill();

          if (packet.isBurst && packet.progress > 0.04) {
            const sparkT = packet.progress - 0.035;
            const sparkPt = getPointAlongTrace(packet.trace, sparkT);
            ctx.fillStyle = pulseMid;
            ctx.beginPath();
            ctx.arc(sparkPt.x, sparkPt.y, 1.0, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // 6. Terminal Flare Dissipations
        for (let f = terminalFlares.length - 1; f >= 0; f--) {
          const flare = terminalFlares[f];
          flare.radius += dt * 18;
          flare.alpha -= dt * 2.4;

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

        // 7. Iconic 10-Coil Arc Reactor Core (Breathing Rhythm)
        arcAngle += dt * 0.28;
        arcPulsePhase += dt * 2.2;
        const arcBreathing = (Math.sin(arcPulsePhase) + 1) * 0.5;

        ctx.save();
        ctx.translate(arcCore.x, arcCore.y);

        const coreGlowRad = 16 + arcBreathing * 6;
        const coreGrad = ctx.createRadialGradient(0, 0, 2, 0, 0, coreGlowRad);
        coreGrad.addColorStop(0, isDark ? "rgba(253, 230, 138, 0.95)" : "rgba(245, 158, 11, 0.8)");
        coreGrad.addColorStop(0.4, isDark ? "rgba(245, 158, 11, 0.4)" : "rgba(194, 65, 12, 0.35)");
        coreGrad.addColorStop(1, "rgba(217, 119, 6, 0)");

        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(0, 0, coreGlowRad, 0, Math.PI * 2);
        ctx.fill();

        // 10 Outer Triangular / Trapezoidal Electromagnet Coils
        ctx.save();
        ctx.rotate(arcAngle);
        for (let c = 0; c < 10; c++) {
          const coilAngle = (Math.PI * 2 * c) / 10;
          ctx.save();
          ctx.rotate(coilAngle);

          ctx.fillStyle = coilColor;
          ctx.fillRect(-3.5, 34, 7, 6);

          ctx.fillStyle = coilGlow;
          ctx.fillRect(-2, 35, 4, 4);

          ctx.restore();
        }

        ctx.strokeStyle = isDark ? "rgba(217, 119, 6, 0.38)" : "rgba(180, 83, 9, 0.24)";
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(0, 0, 33, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, 41, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();

        // Counter-rotating outer telemetry dial with degree ticks
        ctx.save();
        ctx.rotate(-arcAngle * 0.7);
        ctx.strokeStyle = isDark ? "rgba(245, 158, 11, 0.28)" : "rgba(180, 83, 9, 0.18)";
        ctx.lineWidth = 0.9;
        ctx.setLineDash([14, 10, 4, 10]);
        ctx.beginPath();
        ctx.arc(0, 0, 52, 0, Math.PI * 2);
        ctx.stroke();

        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-58, 0);
        ctx.lineTo(-46, 0);
        ctx.moveTo(46, 0);
        ctx.lineTo(58, 0);
        ctx.moveTo(0, -58);
        ctx.lineTo(0, -46);
        ctx.moveTo(0, 46);
        ctx.lineTo(0, 58);
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
      window.removeEventListener("click", handleClick);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Layer 1: Blurred Orbital Space View & Cosmic Nebulae (Zero-overhead GPU compositor) */}
      <div className="absolute inset-0 transition-opacity duration-700 pointer-events-none">
        {/* Deep space void base */}
        <div className="absolute inset-0 bg-[#ffffff] dark:bg-[#020206] transition-colors duration-500" />

        {/* Dark Mode Cosmos: Blurred Space Nebulae */}
        <div className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none">
          {/* Warm Copper & Amber Stellar Nebula (Top Right near Arc Reactor) */}
          <div
            className="absolute -top-36 -right-36 w-[680px] h-[680px] rounded-full opacity-40 filter blur-[95px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(217,119,6,0.38) 0%, rgba(180,83,9,0.18) 40%, rgba(120,53,15,0.06) 70%, transparent 100%)",
            }}
          />

          {/* Deep Cosmic Void & Celestial Indigo Starlight (Bottom Left) */}
          <div
            className="absolute -bottom-48 -left-48 w-[780px] h-[780px] rounded-full opacity-35 filter blur-[115px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(30,27,75,0.48) 0%, rgba(15,23,42,0.28) 45%, rgba(2,6,23,0.1) 70%, transparent 100%)",
            }}
          />

          {/* Center Orbital Atmospheric Scatter (Horizon Core) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[550px] rounded-full opacity-25 filter blur-[105px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(146,64,14,0.22) 0%, rgba(15,23,42,0.12) 50%, transparent 80%)",
            }}
          />

          {/* Faint distant stellar dust band across top-left */}
          <div
            className="absolute top-12 left-1/4 w-[500px] h-[250px] rotate-[-25deg] opacity-20 filter blur-[80px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(245,158,11,0.2) 0%, rgba(180,83,9,0.08) 50%, transparent 80%)",
            }}
          />
        </div>

        {/* Light Mode: Subtle High-Altitude Stratosphere Atmospheric Glow */}
        <div className="block dark:hidden absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full opacity-20 filter blur-[85px]"
            style={{
              background:
                "radial-gradient(circle, rgba(251,146,60,0.18) 0%, rgba(254,215,170,0.1) 50%, transparent 80%)",
            }}
          />
        </div>
      </div>

      {/* Layer 2: Sharp J.A.R.V.I.S. Copper Circuits, Arc Reactor & HUD Telemetry */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full block"
      />
    </div>
  );
}
