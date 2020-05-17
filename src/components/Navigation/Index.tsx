import React, {Component} from 'react';
import Logo from './Logo';
import Footer from './Footer';
import Menu from './Menu';
import ToggleMenu from './ToggleMenu';
import styled, {css} from 'styled-components';
import {colors, media, getOuterSpace} from '../../style/constants';

export const Wrapper = styled.div`
  ${media.md`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 10;
  `}
`;

export const Shoable = styled.div`
  ${media.md`
    background: ${colors.blue900};
    overflow: hidden;
    transition: max-height .6s cubic-bezier(0.45, 0, .1, 1);
    will-change: max-height;
    ${props =>
      props.open
        ? css`
            max-height: 200px;
          `
        : css`
            max-height: 0;
          `}
    
    > div {
      padding: 0 3rem 3rem;
    }
  `}

  ${media.sm`
    > div {
      padding: 0 2rem 2rem;
    }
  `}
`;

export const Header = styled.header`
  ${media.md`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    min-height: 7rem;
    background-image: linear-gradient(to bottom,
    ${colors.blue900 + '00'} 0%,
    ${colors.blue900} 50%);
    ${getOuterSpace('padding')};
  `}
`;

// TODO: Transform to a functional component
class Navigation extends Component {
  constructor() {
    super();
    this.state = {open: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({open: !this.state.open});
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      this.setState({open: false});
    }
  }

  render() {
    const {open} = this.state;
    return (
      <Wrapper>
        <Header>
          <Logo />
          <ToggleMenu open={open} onClick={this.toggleMenu} />
        </Header>
        <Shoable open={open}>
          <div>
            <Menu />
            <Footer />
          </div>
        </Shoable>
      </Wrapper>
    );
  }
}

export default Navigation;
