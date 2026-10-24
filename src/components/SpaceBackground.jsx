import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import galaxyBg from "../assets/galaxy.jpg";

/**
 * SpaceBackground - Pure Deep Space Galaxy & Twinkling Stellar Field
 *
 * Layer 1: GPU-accelerated NASA deep-space spiral galaxy with subtle blur and cosmic vignette.
 * Layer 2: Subtle twinkling stars, deep-sky clusters, and celestial beacons on 60 FPS HTML5 Canvas.
 */
export default function SpaceBackground() {
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

    // Distant twinkling stars array
    let stars = [];

    const initStars = (w, h) => {
      stars = [];
      const starCount = isDark ? 110 : 35;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          radius: Math.random() * 1.5 + 0.4,
          baseAlpha: Math.random() * 0.6 + 0.2,
          twinkleSpeed: Math.random() * 1.5 + 0.5,
          twinklePhase: Math.random() * Math.PI * 2,
          // Color variation: celestial white, soft sapphire, gentle warm starlight
          colorType: Math.random() > 0.8 ? "warm" : Math.random() > 0.5 ? "blue" : "white",
          hasCorona: Math.random() > 0.9,
        });
      }
    };

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initStars(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new MutationObserver(() => {
      const newDark = document.documentElement.classList.contains("dark");
      if (newDark !== isDark) {
        isDark = newDark;
        initStars(width, height);
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    let lastTime = performance.now();

    const render = (currentTime) => {
      animationFrameId = requestAnimationFrame(render);

      if (!isTabVisible) return;

      const dt = Math.min((currentTime - lastTime) / 1000, 0.05);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Render Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.twinklePhase += dt * star.twinkleSpeed;
        }

        const alphaMultiplier = prefersReducedMotion
          ? 1
          : 0.65 + 0.35 * Math.sin(star.twinklePhase);
        const currentAlpha = star.baseAlpha * alphaMultiplier;

        // Choose color based on theme and star type
        let fillStyle;
        if (isDark) {
          if (star.colorType === "warm") {
            fillStyle = `rgba(253, 230, 138, ${currentAlpha})`;
          } else if (star.colorType === "blue") {
            fillStyle = `rgba(186, 230, 253, ${currentAlpha * 0.95})`;
          } else {
            fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
          }
        } else {
          // Subtle soft stars in light mode
          fillStyle = `rgba(100, 116, 139, ${currentAlpha * 0.35})`;
        }

        ctx.fillStyle = fillStyle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle corona halo for brighter stars
        if (star.hasCorona && isDark) {
          ctx.fillStyle = `rgba(224, 231, 255, ${currentAlpha * 0.2})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
    };
  }, [theme]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Layer 1: Authentic Space Galaxy with Subtle Blur (GPU Composited) */}
      <div className="absolute inset-0 transition-opacity duration-700 pointer-events-none">
        {/* Deep space void base */}
        <div className="absolute inset-0 bg-[#ffffff] dark:bg-[#020206] transition-colors duration-500" />

        {/* Dark Mode: Authentic Subtle Blurred NASA Galaxy Photography */}
        <div className="hidden dark:block absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Blurred Space Galaxy */}
          <img
            src={galaxyBg}
            alt=""
            loading="eager"
            aria-hidden="true"
            className="w-full h-full object-cover opacity-35 filter blur-[10px] scale-105 pointer-events-none select-none transition-opacity duration-1000"
          />

          {/* Deep Space Vignette: Smooth radial transition to deep obsidian void */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 45%, rgba(2, 2, 6, 0.2) 0%, rgba(2, 2, 6, 0.6) 60%, rgba(2, 2, 6, 0.94) 100%)",
            }}
          />
        </div>

        {/* Light Mode: Crisp & Minimal with Subtle Warm Atmosphere */}
        <div className="block dark:hidden absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full opacity-15 filter blur-[85px]"
            style={{
              background:
                "radial-gradient(circle, rgba(203,213,225,0.3) 0%, rgba(241,245,249,0.1) 60%, transparent 80%)",
            }}
          />
        </div>
      </div>

      {/* Layer 2: Twinkling Space Stars Canvas */}
      <canvas
        ref={canvasRef}
        className="relative z-10 w-full h-full block"
      />
    </div>
  );
}
