import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!glowRef.current) return;
      const { clientX, clientY } = e;
      glowRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white/[0.03] to-indigo-500/[0.04] rounded-full blur-[120px] transition-transform duration-75 ease-out z-0 hidden lg:block"
    />
  );
}
