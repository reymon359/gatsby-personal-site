import React from 'react';
import styled from 'styled-components';

export const ContentContainer = styled.div`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
     position: fixed;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
   ${props => props.theme.media.lg`
    width: 1.45rem;
    margin: 8rem auto 3rem;
    width: calc(100% - 11rem * 2);
  `}
  
  ${props => props.theme.media.md`
    width: 100%;
    margin: 4rem auto 0;
    padding: 0 3rem 6rem;
  `}
  
  ${props => props.theme.media.sm`
    margin: 2rem auto 0;
    padding: 0 2rem 6rem;
  `}
`;

type ContentProps = {
  readonly children: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({children}) => (
  <ContentContainer>{children}</ContentContainer>
);

export default Content;
