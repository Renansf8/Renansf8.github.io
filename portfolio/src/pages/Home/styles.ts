import styled from 'styled-components';

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
    color: ${props => props.theme.colors.primary};
    font-size: 22px;
    margin-bottom: 4px;
  }

  button {
    background-color: ${props => props.theme.colors.primary};
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
      background-color: ${props => props.theme.colors.hover};
      transform: translateX(2px);
    }

    svg {
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 5 00px) {
    p {
      font-size: 14px;
    }

    h1 {
      font-size: 24px;
    }

    h3 {
      color: ${props => props.theme.colors.primary};
      font-size: 18px;
      margin-bottom: 4px;
    }
  }
`;

export const Skills = styled.section`
  align-items: center;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 16px;
  box-shadow: 4px 4px 4px ${props => props.theme.colors.shadow};
  display: flex;
  flex-direction: column;
  margin: 100px 40px 32px 40px;
  padding: 32px 0;

  h2 {
    color: ${props => props.theme.colors.text};
    margin-bottom: 40px;
  }
  /*
  h2:after {
    content: '';
    position: absolute;
    background-color: ${props => props.theme.colors.primary};
    height: 3px;
    width: 0;
    left: 41%;
    bottom: 170px;
    transition: 0.3s;
  } */

  &:hover {
    h2 {
      color: ${props => props.theme.colors.text};
    }
    h2:after {
      width: 240px;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const SkillsList = styled.article`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 800px) and (min-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CardFront = styled.div`
  backface-visibility: hidden;
  background: ${props => props.theme.colors.card};
  border-radius: 8px;
  box-shadow: 5px 5px 5px ${props => props.theme.colors.primary};
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
    color: ${props => props.theme.colors.primary};
    font-size: 18px;
    font-weight: 600;
  }

  svg {
    margin-bottom: 16px;
    color: ${props => props.theme.colors.background};
  }

  img {
    width: 100px;
  }
`;

export const CardContainer = styled.div`
  cursor: pointer;
  width: 240px;
  height: 200px;
  transform-style: preserve-3d;
  transition: all 0.5s;

  &:hover {
    transform: rotateY(180deg);
  }

  @media screen and (max-width: 800px) and (min-width: 500px) {
    margin: 12px 0;
  }

  @media screen and (max-width: 500px) {
    margin: 12px 0;
  }
`;

export const CardBack = styled.div`
  background: ${props => props.theme.colors.primary};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  color: ${props => props.theme.colors.background};
  font-weight: 600;
  transform: rotateY(180deg);
  border-radius: 8px;
  box-shadow: 5px 5px 5px ${props => props.theme.colors.card};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 18px;

  p {
    margin: 0 4px;
  }
`;

export const Tecs = styled.section`
  align-items: center;
  background-color: ${props => props.theme.colors.secundary};
  border-radius: 16px;
  box-shadow: 4px 4px 4px ${props => props.theme.colors.shadow};
  display: flex;
  flex-direction: column;
  margin: 100px 40px 32px 40px;
  padding: 32px 0;

  svg {
    cursor: pointer;
    margin: 24px 16px 8px 16px;
  }

  img {
    cursor: pointer;
    margin-bottom: 6px;
    margin-left: 8px;
    width: 56px;
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 20px;
    }

    svg {
      width: 40px;
      margin: 24px 16px 8px 24px;
    }

    img {
      width: 44px;
      margin: 0 16px 6px 22px;
    }
  }
`;
