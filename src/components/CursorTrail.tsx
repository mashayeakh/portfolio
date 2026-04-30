"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouse = { x: width / 2, y: height / 2 };
    
    // Trail settings
    const numPoints = 50; // Length of the trail
    const points = Array.from({ length: numPoints }, () => ({ x: mouse.x, y: mouse.y }));

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Spring physics for smooth following
      points[0].x += (mouse.x - points[0].x) * 0.5;
      points[0].y += (mouse.y - points[0].y) * 0.5;

      for (let i = 1; i < numPoints; i++) {
        points[i].x += (points[i - 1].x - points[i].x) * 0.4;
        points[i].y += (points[i - 1].y - points[i].y) * 0.4;
      }

      // Draw the trailing ribbon
      for (let i = 1; i < numPoints; i++) {
        const p1 = points[i - 1];
        const p2 = points[i];

        // Fade out and thin out towards the end of the tail
        const progress = i / numPoints;
        const opacity = 1 - progress;
        const thickness = 3 * opacity;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        
        // Brand color: #ff014f
        ctx.strokeStyle = `rgba(255, 1, 79, ${opacity})`;
        ctx.lineWidth = thickness;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // pointer-events-none ensures it doesn't block clicks
  // z-[9999] puts it above everything else
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[9999]" />;
}
