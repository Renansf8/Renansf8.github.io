import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 128px;
  padding: 8px;

  a {
    font-size: 22px;

    & + a {
      margin-left: 32px;
    }
  }
`;
