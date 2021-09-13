import React from 'react';
import Home from '../pages/Home';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';

describe('Testa a página Home', () => {
  it('Testa se Home é renderizada em seu estado inicial', () => {
    renderWithRouter(<Home />);
    const headerName = screen.getByRole('heading', { name: /Renan/i });
    expect(headerName).toBeDefined();

    const homeLink = screen.getByRole('button', { name: 'Projetos' });
    expect(homeLink).toBeDefined();

    const skillsTitle = screen.getByText(/habilidades/i);
    expect(skillsTitle).toBeDefined();
  });

  it('Testa de a página é renderizada para Projetos', () => {
    renderWithRouter(<Home />);
    const projectsLink = screen.getByTestId('project-link');
    userEvent.click(projectsLink);

    const projectTitle = screen.getByText(/Página/i);
    expect(projectTitle).toBeDefined();
  });
});
