import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { media, getOuterSpace } from '../style/constants';

const CircleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 18rem;
  ${getOuterSpace('padding')}
  ${media.md`
    position: static;
    padding: 0;
  `}
  
  > div {
    position: relative;
  }

  a,
  svg {
    display: block;
  }

  a {
    width: 1.65rem;
    ${media.lg`
      width: 1.45rem;
    `}
  }

  svg {
    width: 100%;
    height: auto;
  }

  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    background: rgba(255, 255, 255, 0.05);
    height: 100%;
    width: 100%;
    border-radius: 100%;
    pointer-events: none;
    opacity: 1;
    will-change: transform;
  }

  a:hover + .circle {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(0.45, 0, 0.1, 1), opacity 0.8s ease;
  }
`;

const CircleSvg = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Oval</title>
    <path
      d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z"
      fill="#FFF"
    />
  </svg>
);

const Logo = () => (
  <CircleContainer>
    <div>
      <Link to="/">
        <CircleSvg />
      </Link>
      <div className="circle" />
    </div>
  </CircleContainer>
);

export default Logo;
