import React from 'react';
import styled from 'styled-components';

const StarsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.black};
  background-image: radial-gradient(
      circle at top right,
      rgba(121, 68, 154, 0.13),
      transparent
    ),
    radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent);
`;

type Coordinates = {
  x: number | null;
  y: number | null;
};

type Star = {
  x: number;
  y: number;
  z: number;
};

const Stars: React.FC = () => {
  const starsNumber =
    typeof window !== 'undefined' &&
    (window.innerWidth + window.innerHeight) / 8;
  const starSize = 3;
  const starMinScale = 0.2;
  const overflowThreshold = 50;

  let scale = 1; // device/pixel ratio
  let windowWidth: number;
  let windowHeight: number;

  const stars: Star[] = [];
  let cursorInsideCanvas = false;
  let pointer: Coordinates = {x: null, y: null};
  let pointerActive = true;

  const normalVelocity = 0.0005;
  const maxVelocity = 0.1;
  const velocity = {x: 0, y: 0, tx: 0, ty: 0, z: normalVelocity};


  let evCache: PointerEvent[]= [] ;
  let prevPointersDistance = -1;

  const generateStars = () => {
    for (let i = 0; i < starsNumber; i++) {
      stars.push({
        x: 0,
        y: 0,
        z: starMinScale + Math.random() * (1 - starMinScale)
      });
    }
  };

  const recycleStar = (star: Star) => {
    let direction = 'z';

    const vx = Math.abs(velocity.x),
      vy = Math.abs(velocity.y);

    if (vx > 1 || vy > 1) {
      let axis;

      if (vx > vy) {
        axis = Math.random() < vx / (vx + vy) ? 'h' : 'v';
      } else {
        axis = Math.random() < vy / (vx + vy) ? 'v' : 'h';
      }

      if (axis === 'h') {
        direction = velocity.x > 0 ? 'l' : 'r';
      } else {
        direction = velocity.y > 0 ? 't' : 'b';
      }
    }

    star.z = starMinScale + Math.random() * (1 - starMinScale);

    if (direction === 'z') {
      star.x = Math.random() * windowWidth;
      star.y = Math.random() * windowHeight;
      star.z = 0.1;
    } else if (direction === 'l') {
      star.x = -overflowThreshold;
      star.y = windowHeight * Math.random();
    } else if (direction === 'r') {
      star.x = windowWidth + overflowThreshold;
      star.y = windowHeight * Math.random();
    } else if (direction === 't') {
      star.x = windowWidth * Math.random();
      star.y = -overflowThreshold;
    } else if (direction === 'b') {
      star.x = windowWidth * Math.random();
      star.y = windowHeight + overflowThreshold;
    }
  };

  const placeStars = () => {
    stars.forEach((star: Star) => {
      star.x = Math.random() * windowWidth;
      star.y = Math.random() * windowHeight;
    });
  };

  const movePointer = (userPositionX: number, userPositionY: number) => {
    if (!pointerActive) return;
    if (typeof pointer.x === 'number' && typeof pointer.y === 'number') {
      const ox = userPositionX - pointer.x,
        oy = userPositionY - pointer.y;

      velocity.tx =
        velocity.tx - (ox / 8 * scale) * (cursorInsideCanvas ? 1 : -1);
      velocity.ty =
        velocity.ty - (oy / 8 * scale) * (cursorInsideCanvas ? 1 : -1);
    }

    pointer = {x: userPositionX, y: userPositionY};
  };

  const resizeCanvas = (canvas: any) => {
    scale = window.devicePixelRatio || 1;

    windowWidth = window.innerWidth * scale;
    windowHeight = window.innerHeight * scale;

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    placeStars();
  };

  const accelerate = (acceleration: boolean) => {
    console.log('accelerates');

    pointer = {x: null, y: null};
    pointerActive = !acceleration;
    velocity.z = acceleration ? maxVelocity : normalVelocity;
  };

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(
    null
  );

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cursorInsideCanvas = true;
      movePointer(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      cursorInsideCanvas = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    };

    const handleMouseLeave = () => {
      cursorInsideCanvas = false;
      pointer = {x: null, y: null};
    };

    const handleTouchLeave = () => {
      cursorInsideCanvas = false;
      pointer = {x: null, y: null};
    };

    const handleResize = () => {
      resizeCanvas(canvasRef.current);
    };

    const handleWheel = (event: WheelEvent) => {
      accelerate(event.deltaY < 0);
    };


    const handlePointerDown = (event: PointerEvent) => {
      evCache.push(event);
    };
    const handlePointerMove = (event: PointerEvent) => {
      for (var i = 0; i < evCache.length; i++) {
        if (event.pointerId == evCache[i].pointerId) {
          evCache[i] = event;
          break;
        }
      }

      event.target.style.border = "3px solid red";

      if (evCache.length == 2) {
        const currentPointersDistance = Math.abs(evCache[0].clientX - evCache[1].clientX);

        if (prevPointersDistance > 0) {
          if (currentPointersDistance > prevPointersDistance) {
            accelerate(true)
          }
          if (currentPointersDistance < prevPointersDistance) {
            accelerate(false)
          }
        }
        prevPointersDistance = currentPointersDistance;
      }
    };

    const handlePointerUp = (event: PointerEvent) => {
      remove_event(event);
      if (evCache.length < 2) {
        prevPointersDistance = -1;
      }
    };

    const remove_event = (event: PointerEvent) => {
      // evCache.filter(evCached => evCached.pointerId !== event.pointerId);
      for (var i = 0; i < evCache.length; i++) {
        if (evCache[i].pointerId == event.pointerId) {
          evCache.splice(i, 1);
          break;
        }
      }
    };

    if (canvasRef.current) {
      const renderCtx = canvasRef.current.getContext('2d');

      if (renderCtx) {
        const canvas = canvasRef.current;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointermove', handlePointerMove);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointercancel', handlePointerUp);
        canvas.addEventListener('pointerout', handlePointerUp);
        canvas.addEventListener('pointerleave', handlePointerUp);

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('touchmove', handleTouchMove);
        canvas.addEventListener('touchend', handleTouchLeave);
        document.addEventListener('mouseleave', handleMouseLeave);

        setContext(renderCtx);
      }
    }

    if (context) {
      const renderStars = () => {
        stars.forEach(star => {
          context.beginPath();
          context.lineCap = 'round';
          context.lineWidth = starSize * star.z * scale;
          context.strokeStyle =
            'rgba(255,255,255,' + (0.5 + 0.5 * Math.random()) + ')';

          context.beginPath();
          context.moveTo(star.x, star.y);

          let tailX = velocity.x * 2,
            tailY = velocity.y * 2;

          // stroke() wont work on an invisible line
          if (Math.abs(tailX) < 0.1) tailX = 0.5;
          if (Math.abs(tailY) < 0.1) tailY = 0.5;

          context.lineTo(star.x + tailX, star.y + tailY);

          context.stroke();
        });
      };

      const update = () => {
        velocity.tx *= 0.96;
        velocity.ty *= 0.96;

        velocity.x += (velocity.tx - velocity.x) * 0.8;
        velocity.y += (velocity.ty - velocity.y) * 0.8;

        stars.forEach(star => {

          star.x += (velocity.x * star.z )+ (star.x - windowWidth / 2) * velocity.z * star.z;
          star.y += (velocity.y * star.z)+ (star.y - windowHeight / 2) * velocity.z * star.z;
          star.z += velocity.z;

          // recycle when out of bounds
          if (
            star.x < -overflowThreshold ||
            star.x > windowWidth + overflowThreshold ||
            star.y < -overflowThreshold ||
            star.y > windowHeight + overflowThreshold
          ) {
            recycleStar(star);
          }
        });
      };

      const step = () => {
        context.clearRect(0, 0, windowWidth, windowHeight);

        update();
        renderStars();

        requestAnimationFrame(step);
      };

      generateStars();
      resizeCanvas(canvasRef.current);
      step();
    }

    const cleanup = () => {
      stars.length = 0;
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('touchend', handleTouchLeave);
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    return cleanup;
  }, [context]);

  return (
    <StarsContainer>
      <canvas
        id="canvas"
        ref={canvasRef}
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%'
        }}
      />
    </StarsContainer>
  );
};

export default Stars;
