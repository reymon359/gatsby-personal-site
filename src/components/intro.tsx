import React from 'react';
import styled, {css} from 'styled-components';
import {addRemToProperty} from '../styles/shared';

type TitleWrapperProps = {
  fixed: boolean;
};

const TitleWrapper = styled.div<TitleWrapperProps>`
  font-size: 1.7rem;
  max-width: 36rem;
  line-height: 1.3em;
  ${(props) => props.theme.media.md`
    max-width: 32rem;
  `}
  ${(props) => props.theme.media.sm`
    max-width: 100%;
    font-size: 1.5rem;
  `}
  ${(props) => props.theme.media.xs`
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
          ${(props) => props.theme.media.md`
        text-align: left;
        left: 0;
        right: auto;
      `}
        `
      : css`
          text-align: left;
        `}
`;

const Title = styled.h1`
  margin: 0px;
  font-family: inherit;
  font-size: inherit;
  span {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: line-through;
  }
`;

type IntroProps = {
  fixed: boolean;
};

const Intro: React.FC<IntroProps> = props => (
  <TitleWrapper {...props}>
    <Title>
      Hi, I am Ramon Morcillo, a software engineer based in Madrid, Spain
    </Title>
  </TitleWrapper>
);

export default Intro;
