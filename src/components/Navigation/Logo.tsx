import React, {useContext} from 'react';
import Link from 'gatsby-link';
import styled, {ThemeContext} from 'styled-components';
import {addRemToProperty} from '../../styles/shared';

const RelativeWrapper = styled.div`
  position: relative;
`;

const CircleBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  background: ${props => props.theme.colors.lightest + '10'};
  height: 100%;
  width: 100%;
  border-radius: 100%;
  pointer-events: none;
  opacity: 1;
  will-change: transform;
`;

const CircleWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  max-width: 18rem;
  ${addRemToProperty('padding')}
  ${props => props.theme.media.md`
    position: static;
    padding: 0;
  `}

  a,
  svg {  
    pointer-events: all;
    display: block;
  }

  a {
    width: 1.65rem;
    ${props => props.theme.media.lg`
      width: 1.45rem;
    `}
  }

  svg {
    width: 100%;
    height: auto;
  }

  a:hover + ${CircleBackground} {
    opacity: 0;
    transform: translate(-50%, -50%) scale(7.5);
    transition: transform 1s cubic-bezier(0.45, 0, 0.1, 1), opacity 0.8s ease;
  }
`;
type CircleProps = {
  readonly fill?: string;
  readonly width?: number;
  readonly height?: number;
};
const Circle: React.FC<CircleProps> = ({fill, width, height}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21.5C5.201 21.5.5 16.799.5 11S5.201.5 11 .5 21.5 5.201 21.5 11 16.799 21.5 11 21.5zm0-1a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19z"
      fill={fill}
    />
  </svg>
);

const Logo = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <CircleWrapper>
      <RelativeWrapper>
        <Link to="/">
          <Circle fill={themeContext.colors.lightest} width={22} height={22} />
        </Link>
        <CircleBackground />
      </RelativeWrapper>
    </CircleWrapper>
  );
};

export default Logo;
