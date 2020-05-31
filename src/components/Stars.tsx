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

const StarsBackground = styled.canvas`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Stars: React.FC = () => (
  <StarsContainer>
    <StarsBackground />
  </StarsContainer>
);

export default Stars;
