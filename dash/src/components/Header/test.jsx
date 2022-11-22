import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Header } from '.';

describe('<Header />', () => {
  it('should mount', () => {
    renderWithTheme(<Header>Lorem ipsum</Header>);
    
    const headerContent = screen.getByText('Lorem ipsum')

    expect(headerContent).toBeInTheDocument();
  });
});