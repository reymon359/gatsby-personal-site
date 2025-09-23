"use client";

import React, { useRef, useEffect, useState } from "react";
import { useStarColorStore } from "@/app/utils/starColorStore";
import { getRandomBackground } from "@/app/utils";

type Coordinates = {
  x: number | null;
  y: number | null;
};

type Star = {
  x: number;
  y: number;
  z: number;
};

interface StarsProps {
  normalVelocity?: number;
  containerOpacity?: number;
  addEventListeners?: boolean;
  starColor?: string;
}

const Stars: React.FC<StarsProps> = (StarsConfig: StarsProps) => {
  const { containerOpacity = 1, normalVelocity = 0.0001, addEventListeners = true } = StarsConfig;
  const starColor = useStarColorStore((state) => state.starColor);
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mutable state as refs
  const stars = useRef<Star[]>([]);
  const starSize = 3; // Match original thickness
  const starMinScale = 0.2;
  const overflowThreshold = 50;
  const scale = useRef(1);
  const windowWidth = useRef(0);
  const windowHeight = useRef(0);
  const velocity = useRef({ x: 0, y: 0, tx: 0, ty: 0, z: normalVelocity });
  const pointer = useRef<Coordinates>({ x: null, y: null });
  const cursorInsideCanvas = useRef(false);
  const pointerActive = useRef(true);
  const evCache = useRef<PointerEvent[]>([]);
  const prevPointersDistance = useRef(-1);

  // Generate stars
  const generateStars = () => {
    const starsNumber = typeof window !== "undefined" ? (window.innerWidth + window.innerHeight) / 8 : 100;
    for (let i = 0; i < starsNumber; i++) {
      stars.current.push({
        x: 0,
        y: 0,
        z: starMinScale + Math.random() * (1 - starMinScale),
      });
    }
  };

  // Recycle star logic
  const recycleStar = (star: Star) => {
    let direction = "z";
    const vx = Math.abs(velocity.current.x),
      vy = Math.abs(velocity.current.y);
    if (vx > 1 || vy > 1) {
      let axis;
      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? "h" : "v";
      } else {
        axis = Math.random() < vy / (vx + vy) ? "v" : "h";
      }
      if (axis === "h") {
        direction = velocity.current.x > 0 ? "l" : "r";
      } else {
        direction = velocity.current.y > 0 ? "t" : "b";
      }
    }
    star.z = starMinScale + Math.random() * (1 - starMinScale);
    if (direction === "z") {
      star.x = Math.random() * windowWidth.current;
      star.y = Math.random() * windowHeight.current;
      star.z = 0.1;
    } else if (direction === "l") {
      star.x = -overflowThreshold;
      star.y = windowHeight.current * Math.random();
    } else if (direction === "r") {
      star.x = windowWidth.current + overflowThreshold;
      star.y = windowHeight.current * Math.random();
    } else if (direction === "t") {
      star.x = windowWidth.current * Math.random();
      star.y = -overflowThreshold;
    } else if (direction === "b") {
      star.x = windowWidth.current * Math.random();
      star.y = windowHeight.current + overflowThreshold;
    }
  };

  // Place stars
  const placeStars = () => {
    stars.current.forEach((star) => {
      star.x = Math.random() * windowWidth.current;
      star.y = Math.random() * windowHeight.current;
    });
  };

  // Move pointer
  const movePointer = (userPositionX: number, userPositionY: number) => {
    if (!pointerActive.current) return;
    if (typeof pointer.current.x === "number" && typeof pointer.current.y === "number") {
      const ox = userPositionX - pointer.current.x,
        oy = userPositionY - pointer.current.y;
      velocity.current.tx = velocity.current.tx - (ox / 8) * scale.current * (cursorInsideCanvas.current ? 1 : -1);
      velocity.current.ty = velocity.current.ty - (oy / 8) * scale.current * (cursorInsideCanvas.current ? 1 : -1);
    }
    pointer.current = { x: userPositionX, y: userPositionY };
  };

  // Resize canvas
  const resizeCanvas = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    scale.current = window.devicePixelRatio || 1;
    windowWidth.current = window.innerWidth * scale.current;
    windowHeight.current = window.innerHeight * scale.current;
    canvas.width = windowWidth.current;
    canvas.height = windowHeight.current;
    placeStars();
  };

  // Accelerate (warp-drive)
  const maxVelocity = 0.05;
  const accelerate = (acceleration: boolean) => {
    pointer.current = { x: null, y: null };
    pointerActive.current = !acceleration;
    velocity.current.z = acceleration ? maxVelocity : normalVelocity;
    if (!acceleration) {
      setTimeout(() => {
        velocity.current.z = normalVelocity;
      }, 400);
    }
  };

  useEffect(() => {
    // When background changes, reset all starfield state
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Clean up all event listeners before resetting state
    const cleanupListeners = () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointercancel", handlePointerUp);
      canvas.removeEventListener("pointerout", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerUp);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchLeave);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };

    // Event handlers (must be defined outside so cleanup can access them)
    function handleMouseMove(event: MouseEvent) {
      cursorInsideCanvas.current = true;
      movePointer(event.clientX, event.clientY);
    }
    function handleTouchMove(event: TouchEvent) {
      cursorInsideCanvas.current = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    }
    function handleMouseLeave() {
      cursorInsideCanvas.current = false;
      pointer.current = { x: null, y: null };
    }
    function handleTouchLeave() {
      cursorInsideCanvas.current = false;
      pointer.current = { x: null, y: null };
    }
    function handleResize() {
      resizeCanvas(canvasRef.current);
    }
    function handleWheel(event: WheelEvent) {
      accelerate(event.deltaY < 0);
    }
    function handlePointerDown(event: PointerEvent) {
      evCache.current.push(event);
    }
    function handlePointerMove(event: PointerEvent) {
      for (let i = 0; i < evCache.current.length; i++) {
        if (event.pointerId === evCache.current[i].pointerId) {
          evCache.current[i] = event;
          break;
        }
      }
      if (evCache.current.length === 2) {
        const currentPointersDistance = Math.abs(evCache.current[0].clientX - evCache.current[1].clientX);
        accelerate(prevPointersDistance.current > 0 && currentPointersDistance > prevPointersDistance.current);
        prevPointersDistance.current = currentPointersDistance;
      }
    }
    function removeEvent(event: PointerEvent) {
      evCache.current = evCache.current.filter((evCached) => evCached.pointerId !== event.pointerId);
    }
    function handlePointerUp(event: PointerEvent) {
      removeEvent(event);
      if (evCache.current.length < 2) prevPointersDistance.current = -1;
    }

    // Remove listeners before resetting state (in case effect is re-run)
    cleanupListeners();

    setBackgroundImage(getRandomBackground(starColor));

    // Reset all refs
    stars.current = [];
    velocity.current = { x: 0, y: 0, tx: 0, ty: 0, z: normalVelocity };
    pointer.current = { x: null, y: null };
    cursorInsideCanvas.current = false;
    pointerActive.current = true;
    evCache.current = [];
    prevPointersDistance.current = -1;

    const renderCtx = canvas.getContext("2d");
    if (!renderCtx) return;
    generateStars();
    resizeCanvas(canvas);

    // Animation loop
    const renderStars = () => {
      stars.current.forEach((star) => {
        renderCtx.beginPath();
        renderCtx.lineCap = "round";
        renderCtx.lineWidth = starSize * star.z * scale.current;
        renderCtx.strokeStyle = "rgba(255,255,255," + (0.5 + 0.5 * Math.random()) + ")";
        renderCtx.moveTo(star.x, star.y);
        let tailX = velocity.current.x * 2;
        let tailY = velocity.current.y * 2;
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;
        renderCtx.lineTo(star.x + tailX, star.y + tailY);
        renderCtx.stroke();
      });
    };
    const update = () => {
      velocity.current.tx *= 0.96;
      velocity.current.ty *= 0.96;
      velocity.current.x += (velocity.current.tx - velocity.current.x) * 0.8;
      velocity.current.y += (velocity.current.ty - velocity.current.y) * 0.8;
      stars.current.forEach((star) => {
        star.x += velocity.current.x * star.z + (star.x - windowWidth.current / 2) * velocity.current.z * star.z;
        star.y += velocity.current.y * star.z + (star.y - windowHeight.current / 2) * velocity.current.z * star.z;
        star.z += velocity.current.z;
        if (
          star.x < -overflowThreshold ||
          star.x > windowWidth.current + overflowThreshold ||
          star.y < -overflowThreshold ||
          star.y > windowHeight.current + overflowThreshold
        ) {
          recycleStar(star);
        }
      });
    };
    let animationFrameId: number;
    const step = () => {
      renderCtx.clearRect(0, 0, windowWidth.current, windowHeight.current);
      update();
      renderStars();
      animationFrameId = requestAnimationFrame(step);
    };
    step();

    // Attach event listeners
    if (addEventListeners) {
      canvas.addEventListener("pointerdown", handlePointerDown);
      canvas.addEventListener("pointermove", handlePointerMove);
      canvas.addEventListener("pointerup", handlePointerUp);
      canvas.addEventListener("pointercancel", handlePointerUp);
      canvas.addEventListener("pointerout", handlePointerUp);
      canvas.addEventListener("pointerleave", handlePointerUp);
      window.addEventListener("wheel", handleWheel);
      window.addEventListener("resize", handleResize);
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("touchmove", handleTouchMove);
      canvas.addEventListener("touchend", handleTouchLeave);
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    // Cleanup
    return () => {
      // Cancel animation frame
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      stars.current.length = 0;
      cleanupListeners();
    };
  }, [addEventListeners, normalVelocity, starColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
      style={{
        opacity: containerOpacity,
        backgroundImage,
      }}
    />
  );
};

export default Stars;

