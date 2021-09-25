import styled from 'styled-components';

export const Footer = styled.footer`
  color: ${props => props.theme.colors.text};
  display: flex;
  background-color: ${props => props.theme.colors.secundary};
  justify-content: center;
  padding: 8px;

  strong {
    margin-left: 4px;
  }

  @media screen and (max-width: 600px) {
    font-size: 9px;
    text-align: justify;
  }
`;
