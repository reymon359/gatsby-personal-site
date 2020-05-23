import React from 'react';
import styled, {css} from 'styled-components';
import {media, colors} from '../../styles/theme';

type ToggleMenuWrapperProps = {
  open: boolean;
  onClick: any;
};

const ToggleMenuWrapper = styled.div<ToggleMenuWrapperProps>`
  display: none;
  height: 15px;
  width: 1.75rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  backface-visibility: hidden;
  transition: transform 0.45s cubic-bezier(0.45, 0, 0.07, 1);
  will-change: transform;
  cursor: pointer;

  span {
    display: inline-block;
    height: 1px;
    background: ${colors.white};
  }

  ${props =>
    props.open
      ? css`
          transform: rotate(90deg);
          align-items: center;

          span {
            &:nth-child(1),
            &:nth-child(3) {
              width: 60%;
            }

            &:nth-child(2) {
              width: 100%;
            }
          }
        `
      : css`
          transform: rotate(0);

          span {
            &:nth-child(1) {
              width: 100%;
            }

            &:nth-child(2) {
              width: 60%;
            }

            &:nth-child(3) {
              width: 80%;
            }
          }
        `}

  ${media.md`
    display: flex;
  `}
`;

type ToggleMenuProps = {
  open: boolean;
  onClick: any;
};

const ToggleMenu: React.FC<ToggleMenuProps> = ({open, onClick}) => (
  <ToggleMenuWrapper open={open} onClick={onClick}>
    <span />
    <span />
    <span />
  </ToggleMenuWrapper>
);

export default ToggleMenu;
