import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export const ProjectsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 32px;
  flex-wrap: wrap;

  h3 {
    text-align: center;
    margin-top: 16px;
  }

  p {
    text-align: justify;
    margin: 12px 0;
  }
`;

export const ProjectCard = styled.div`
  max-width: 540px;
  background-color: #2b2b2b;
  margin: 16px 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;

  h3 {
    color: #008b8b;
    /* margin-left: 120px; */
  }

  p {
    font-weight: 600;
    height: 80px;
    margin-top: 8px;
    margin-bottom: 0;
  }

  img {
    width: 480px;
    height: 240px;
  }

  button {
    align-items: center;
    background-color: #008b8b;
    border: none;
    border-radius: 6px;
    color: #fff;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    margin: 14px 8px;
    padding: 6px 20px 6px 20px;
    transition: all 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#008B8B')};
      transform: translateY(-2px);
    }
  }

  div {
    display: flex;
  }
`;

export const Tecs = styled.div`
  display: flex;
  margin-bottom: 16px;

  p {
    font-size: 18px;
    height: 8px;
    margin-right: 16px;
    margin-top: 0;
  }

  svg {
    margin: 0 4px;
  }

  img {
    margin-left: 4px;
    height: 24px;
    width: 24px;
  }
`;
