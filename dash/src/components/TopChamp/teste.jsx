
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Historic } from '.';

describe('<TopChamp />', () => {
  it('should mount', () => {
    renderWithTheme(<Historic>Lorem ipsum</Historic>);
    
    const TopChampContent = screen.getByText('Lorem ipsum')

    expect(TopChampcContent).toBeInTheDocument();
  });
});