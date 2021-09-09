import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 104px;

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

  h2 {
    color: #dcdcdc;
  }

  h2:after {
    content: '';
    position: absolute;
    background-color: #008b8b;
    height: 3px;
    width: 0;
    left: 41%;
    bottom: 245px;
    transition: 0.3s;
  }

  &:hover {
    h2 {
      color: #fff;
    }
    h2:after {
      width: 240px;
    }
  }

  h2 {
    /* border-bottom: 0 solid #008b8b; */
    margin-bottom: 64px;
  }
`;

export const SkillsList = styled.article`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  background: #e6e6fa;
  border-radius: 8px;
  box-shadow: 5px 5px 5px #008b8b;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  max-width: 240px;
  position: absolute;
  width: 100%;
  height: 100%;

  p {
    color: #008b8b;
    font-size: 18px;
    font-weight: 600;
  }

  svg {
    margin-bottom: 16px;
  }

  img {
    color: red;
    width: 100px;
  }
`;

export const CardContainer = styled.div`
  /* cursor: pointer; */
  /* position: absolute; */
  width: 240px;
  height: 200px;
  transform-style: preserve-3d;
  transition: all 0.5s;

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const CardBack = styled.div`
  background: #008b8b;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: #e6e6fa;
  font-weight: 600;
  transform: rotateY(180deg);
  border-radius: 8px;
  box-shadow: 5px 5px 5px #e6e6fa;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;

  p {
    margin: 0 4px;
  }
`;
