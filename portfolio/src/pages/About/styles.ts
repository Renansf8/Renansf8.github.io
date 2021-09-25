import styled from 'styled-components';

export const AboutSection = styled.section`
  font-size: 20px;
  margin: 40px 280px;
  height: 100vh;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 32px;
    margin-bottom: 16px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin: 16px 0;
    text-align: justify;
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
    margin: 0 auto;
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

  @media screen and (max-width: 1000px) and (min-width: 460px) {
    margin: 40px 20px;
  }

  @media screen and (max-width: 460px) {
    margin: 40px 20px;

    h1 {
      font-size: 24px;
      text-align: center;
    }

    p {
      font-size: 16px;
    }
  }
`;
