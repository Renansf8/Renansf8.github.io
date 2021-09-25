import styled, { css } from 'styled-components';

interface ContainerProps {
  position: string;
}

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.div`
  border: none;
  padding: 4px;
  margin: -1px;
  display: flex;

  img {
    margin-top: 16px;
    margin-right: 4px;
  }
`;

export const CenterContainer = styled.div<ContainerProps>`
  position: absolute;
  width: 240px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30%;
  bottom: calc(100% + 1px);
  pointer-events: none;
  line-height: 18px;
  font-family: 'Roboto Slab', serif;

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          top: calc(100% + 20px);
          left: 10%;
          padding: 0;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span<ContainerProps>`
  background-color: #e6e6fa;
  border-radius: 5px;
  color: #1f1f1f;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 8px;
  position: relative;
  text-align: justify;
  word-break: break-all;
  opacity: 0.9;

  span {
    color: #008b8b;
    margin-right: 4px;
  }

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          &:after {
            border-color: transparent transparent #fff transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;
