import styled from 'styled-components';

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

export const CenterContainer = styled.div`
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
`;

export const TooltipBox = styled.span`
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
`;
