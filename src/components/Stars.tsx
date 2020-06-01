import React from 'react';
import styled from 'styled-components';
import {colors} from '../styles/theme';

const StarsContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${colors.black};
  background-image: radial-gradient(
      circle at top right,
      rgba(121, 68, 154, 0.13),
      transparent
    ),
    radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), transparent);
`;

const Background = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const canvas: HTMLCanvasElement = (Background as unknown) as HTMLCanvasElement;
//@ts-ignore
const context: CanvasRenderingContext2D = canvas.getContext('2d');

const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8,
  STAR_SIZE = 3,
  STAR_MIN_SCALE = 0.2,
  OVERFLOW_THRESHOLD = 50;

let scale = 1, // device pixel ratio
  width: number,
  height: number;

type Star = {
  x: number;
  y: number;
  z: number;
};

const stars: Star[] = [];

let pointerX: number | null, pointerY: number | null;

const velocity = {x: 0, y: 0, tx: 0, ty: 0, z: 0.0005};

let touchInput = false;

const generateStars = () => {
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: 0,
      y: 0,
      z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE)
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

  star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

  if (direction === 'z') {
    star.z = 0.1;
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  } else if (direction === 'l') {
    star.x = -OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  } else if (direction === 'r') {
    star.x = width + OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  } else if (direction === 't') {
    star.x = width * Math.random();
    star.y = -OVERFLOW_THRESHOLD;
  } else if (direction === 'b') {
    star.x = width * Math.random();
    star.y = height + OVERFLOW_THRESHOLD;
  }
};

const placeStars = () => {
  stars.forEach((star: Star) => {
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  });
};

const resizeCanvas = () => {
  scale = window.devicePixelRatio || 1;

  width = window.innerWidth * scale;
  height = window.innerHeight * scale;

  canvas.width = width;
  canvas.height = height;

  placeStars();
};

const update = () => {
  velocity.tx *= 0.96;
  velocity.ty *= 0.96;

  velocity.x += (velocity.tx - velocity.x) * 0.8;
  velocity.y += (velocity.ty - velocity.y) * 0.8;

  stars.forEach(star => {
    star.x += velocity.x * star.z;
    star.y += velocity.y * star.z;

    star.x += (star.x - width / 2) * velocity.z * star.z;
    star.y += (star.y - height / 2) * velocity.z * star.z;
    star.z += velocity.z;

    // recycle when out of bounds
    if (
      star.x < -OVERFLOW_THRESHOLD ||
      star.x > width + OVERFLOW_THRESHOLD ||
      star.y < -OVERFLOW_THRESHOLD ||
      star.y > height + OVERFLOW_THRESHOLD
    ) {
      recycleStar(star);
    }
  });
};

const render = () => {
  stars.forEach(star => {
    context.beginPath();
    context.lineCap = 'round';
    context.lineWidth = STAR_SIZE * star.z * scale;
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

const step = () => {
  context.clearRect(0, 0, width, height);

  update();
  render();

  requestAnimationFrame(step);
};

const movePointer = (x: number, y: number) => {
  if (typeof pointerX === 'number' && typeof pointerY === 'number') {
    const ox = x - pointerX,
      oy = y - pointerY;

    velocity.tx = velocity.tx + (ox / 8) * scale * (touchInput ? 1 : -1);
    velocity.ty = velocity.ty + (oy / 8) * scale * (touchInput ? 1 : -1);
  }

  pointerX = x;
  pointerY = y;
};

const onMouseMove = (event: MouseEvent) => {
  touchInput = false;

  movePointer(event.clientX, event.clientY);
};

const onTouchMove = (event: TouchEvent) => {
  touchInput = true;

  movePointer(event.touches[0].clientX, event.touches[0].clientY);

  event.preventDefault();
};

const onMouseLeave = () => {
  pointerX = null;
  pointerY = null;
};

// TODO: keep generating stars when mouse moves but with a limit and then when it stops mooving if there are too many stars generate less
// TODO: refactor code below and add a accelerate function for when scrolling or zooming on phone

// window.onscroll = function (e) {
//   console.log('scroll');
//   // let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
//   velocity.z += 0.01;
// };
// function onScroll(event) {
//   console.log('scroll');
//   // let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
//   velocity.z += 0.01;
// }
// window.addEventListener('wheel', function () {
//   console.log('scroll');
//   // let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
//   velocity.z += 0.001;
// });

const Stars: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(
    null
  );

  React.useEffect(() => {}, [context]);

  generateStars();
  resizeCanvas();
  step();

  window.onresize = resizeCanvas;
  canvas.onmousemove = onMouseMove;
  canvas.ontouchmove = onTouchMove;
  canvas.ontouchend = onMouseLeave;
  document.onmouseleave = onMouseLeave;

  return (
    <StarsContainer>
      {/* <canvas></canvas> */}
      <Background />
    </StarsContainer>
  );
};

export default Stars;
