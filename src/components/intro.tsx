import React from 'react';
import styled, {css} from 'styled-components';
import {colors, media} from '../styles/theme';
import {addRemToProperty} from '../styles/shared';

export const Wrapper = styled.div`
  font-size: 1.7rem;
  max-width: 36rem;
  line-height: 1.3em;
  ${media.md`
    max-width: 32rem;
  `}
  ${media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${media.xs`
    font-size: 1.35rem;
  `}

  ${props =>
    props.fixed
      ? css`
          ${addRemToProperty('padding')};
          position: absolute;
          top: 0;
          right: 0;
          text-align: right;
          ${media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
        `
      : css`
          text-align: left;
        `}
`;

export const Title = styled.h1`
  margin: 0px;
  font-family: inherit;
  font-size: inherit;
  span {
    color: ${colors.yellow500};
    text-decoration: line-through;
  }
`;

type IntroProps = {
  fixed: boolean;
};

const Intro: React.FC<IntroProps> = props => (
  <Wrapper {...props}>
    <Title>
      Hi, I am Ramon Morcillo, a software engineer based in Madrid, Spain
    </Title>
  </Wrapper>
);

export default Intro;
