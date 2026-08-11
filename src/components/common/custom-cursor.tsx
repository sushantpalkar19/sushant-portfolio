import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Premium desktop-only custom cursor.
 * Hidden automatically on touch/coarse-pointer devices via CSS and JS detection.
 * Consists of:
 *  - A small solid 6px dot that tracks exactly with the cursor
 *  - A 24px outer ring that follows with a subtle spring lag
 * On interactive elements (a, button, [role="button"]) the ring expands + tints.
 */
export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Raw mouse position for the dot (no lag)
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Spring-lagged position for the ring
  const ringRawX = useMotionValue(-100);
  const ringRawY = useMotionValue(-100);
  const ringX = useSpring(ringRawX, { stiffness: 160, damping: 22, mass: 0.6 });
  const ringY = useSpring(ringRawY, { stiffness: 160, damping: 22, mass: 0.6 });

  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsVisible(true);

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        dotX.set(e.clientX);
        dotY.set(e.clientY);
        ringRawX.set(e.clientX);
        ringRawY.set(e.clientY);
      });
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    // Detect if the cursor is over a clickable element
    const isInteractive = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName.toLowerCase();
      if (tag === "a" || tag === "button") return true;
      const role = el.getAttribute("role");
      if (role === "button" || role === "link") return true;
      if ((el as HTMLElement).style?.cursor === "pointer") return true;
      return false;
    };

    const handleMouseOver = (e: MouseEvent) => {
      let el: Element | null = e.target as Element;
      // Walk up to 4 levels to find an interactive ancestor
      for (let i = 0; i < 5 && el; i++) {
        if (isInteractive(el)) {
          setIsHovering(true);
          return;
        }
        el = el.parentElement;
      }
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, [dotX, dotY, ringRawX, ringRawY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring — spring-lagged */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border will-change-transform"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: isHovering ? "rgba(20,241,149,0.65)" : "rgba(20,241,149,0.35)",
          width: isHovering ? 38 : 26,
          height: isHovering ? 38 : 26,
          boxShadow: isHovering
            ? "0 0 14px rgba(20,241,149,0.22)"
            : "0 0 0px rgba(20,241,149,0)",
          transition: "width 0.18s ease, height 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease",
          mixBlendMode: "normal",
        }}
        aria-hidden="true"
      />

      {/* Center dot — no lag, exact tracking */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 5 : 6,
          height: isHovering ? 5 : 6,
          background: "#14F195",
          opacity: isHovering ? 0.6 : 1,
          transition: "width 0.14s ease, height 0.14s ease, opacity 0.14s ease",
        }}
        aria-hidden="true"
      />
    </>
  );
}
