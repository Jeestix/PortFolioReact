
import { useEffect, useRef } from 'react';

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    const cellSize = 35;
    const radius = 100;
    const color = { r: 29, g: 158, b: 117 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const W = canvas.width;
      const H = canvas.height;
      const cols = Math.ceil(W / cellSize) + 1;
      const rows = Math.ceil(H / cellSize) + 1;

      // vertikale Linien
      for (let col = 0; col <= cols; col++) {
        const x = col * cellSize;
        for (let seg = 0; seg < rows; seg++) {
          const y1 = seg * cellSize;
          const y2 = y1 + cellSize;
          const dx = mouse.current.x - x;
          const dy = mouse.current.y - (y1 + y2) / 2;
          const inf = Math.max(0, 1 - Math.sqrt(dx*dx + dy*dy) / radius);
          ctx.beginPath();
          ctx.moveTo(x, y1);
          ctx.lineTo(x, y2);
          ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},${0.1 + inf * 0.75})`;
          ctx.lineWidth = 1 + inf * 2.5;
          ctx.stroke();
        }
      }

      // horizontale Linien
      for (let row = 0; row <= rows; row++) {
        const y = row * cellSize;
        for (let seg = 0; seg < cols; seg++) {
          const x1 = seg * cellSize;
          const x2 = x1 + cellSize;
          const dx = mouse.current.x - (x1 + x2) / 2;
          const dy = mouse.current.y - y;
          const inf = Math.max(0, 1 - Math.sqrt(dx*dx + dy*dy) / radius);
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},${0.1 + inf * 0.75})`;
          ctx.lineWidth = 1 + inf * 2.5;
          ctx.stroke();
        }
      }

      requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  );
}