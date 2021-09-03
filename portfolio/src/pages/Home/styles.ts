import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  p {
    font-size: 18px;
  }

  h3 {
    color: #008b8b;
    margin-bottom: 4px;
  }

  button {
    background-color: #008b8b;
    border: none;
    border-radius: 6px;
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    margin-top: 8px;
    padding: 6px 20px 6px 32px;
    transition: all 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#008b8b')};
      transform: translateX(2px);
    }

    svg {
      margin-left: 8px;
    }
  }
`;
