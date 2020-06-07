import React, {useState} from 'react';
import Logo from './Logo';
import Footer from './Footer';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';
import styled, {css} from 'styled-components';
import {addRemToProperty} from '../../styles/shared';

const Wrapper = styled.div`
  ${(props) => props.theme.media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `}
`;

type ShoableProps = {
  open: boolean;
};

const Shoable = styled.div<ShoableProps>`
  ${(props) => props.theme.media.md`
    background: ${(props) => props.theme.colors.primaryDark};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props =>
      props.open
        ? css`
            max-height: 300px;
          `
        : css`
            max-height: 0;
          `}

    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${(props) => props.theme.media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`;

export const Header = styled.header`
  ${(props) => props.theme.media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 7rem;
    background-image: linear-gradient(to bottom,
    ${(props) => props.theme.colors.primaryDark + '00'} 0%,
    ${(props) => props.theme.colors.primaryDark} 50%);
    ${addRemToProperty('padding')};
  `}
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Logo />
        <ToggleMenu open={open} onClick={() => setOpen(!open)} />
      </Header>
      <Shoable open={open}>
        <div>
          <Menu />
          <Footer />
        </div>
      </Shoable>
    </Wrapper>
  );
};

export default Navigation;
