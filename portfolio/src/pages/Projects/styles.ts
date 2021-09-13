import styled from 'styled-components';

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
  max-width: 500px;
  background-color: #2b2b2b;
  margin: 16px 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;

  img {
    width: 480px;
  }
`;
