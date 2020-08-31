import React from 'react';
import styled from 'styled-components';

export const Content = styled.main`
  margin-top: 1rem;
  line-height: 1.8em;
  color: ${props => props.theme.media.mediumDark};
  ${props => props.theme.media.max.sm`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted ${props => props.theme.media.mediumDark};

    &:hover {
      border-bottom-color: ${props => props.theme.media.secondary};
    }
  }
`;

export const AboutMe: React.FC = () => {
  return (
    <Content>
      <p>
        Over the last years, I have been working as a Full Stack on both backend
        and frontend development, lately I am working and improving at
        technologies like GraphQL or TypeScript.{' '}
        <a
          href="../../../files/ramon-morcillo-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here is my resume
        </a>{' '}
        in case you want to have a look.
      </p>

      <p>
        I built this website with{' '}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{' '}
        and{' '}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{' '}
        among other technologies and use it as a place to share what I learn and
        do.
      </p>

      <p>
        I deeply enjoy{' '}
        <a
          href="https://github.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          learning, reading, building
        </a>{' '}
        and trying new things.
      </p>
      <p>
        Sometimes{' '}
        <a
          href="https://twitter.com/reymon359"
          target="_blank"
          rel="noopener noreferrer"
        >
          I tweet
        </a>{' '}
        and share photos on{' '}
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
