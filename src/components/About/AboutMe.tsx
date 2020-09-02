import React from 'react';
import styled from 'styled-components';

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.colors.lighter};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }
`;

export const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        Over the last years, I have been working on both backend and frontend
        development and lately, I am working and improving at technologies like
        GraphQL or TypeScript.&nbsp;
        <a
          href="../../../files/ramon-morcillo-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>
        &nbsp;in case you want to have a look.
      </p>

      <p>
        I built this website with&nbsp;
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        &nbsp;and&nbsp;
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        &nbsp; among other technologies and use it as a place to share what I
        learn and do.
      </p>

      <p>
        I deeply enjoy&nbsp;
        <a
          href="https://github.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          learning, reading, building,
        </a>
        &nbsp; and trying new things.
      </p>
      <p>
        Sometimes&nbsp;
        <a
          href="https://twitter.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          I tweet
        </a>
        &nbsp; and share photos on&nbsp;
        <a
          href="https://www.instagram.com/ramon.mor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        .
      </p>
    </Content>
  );
};
