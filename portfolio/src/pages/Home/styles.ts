import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 64px;

  p {
    font-size: 20px;
  }

  h1 {
    font-size: 36px;
  }

  h3 {
    color: #008b8b;
    font-size: 22px;
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
      background-color: ${shade(0.2, '#008B8B')};
      transform: translateX(2px);
    }

    svg {
      margin-left: 8px;
    }
  }
`;

export const Skills = styled.section`
  /* background-color: #808080; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px;

  h3 {
    margin-bottom: 16px;
  }

  div {
    background-color: #e6e6fa;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #008b8b;
    color: #1f1f1f;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    max-width: 240px;

    p {
      color: #008b8b;
      font-size: 18px;
      font-weight: 600;
    }

    img {
      color: red;
      width: 120px;
    }
  }
`;
