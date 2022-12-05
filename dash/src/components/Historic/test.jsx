
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Historic } from '.';

describe('<Historic />', () => {
  it('should mount', () => {
    renderWithTheme(<Historic>Lorem ipsum</Historic>);
    
    const HistoricContent = screen.getByText('Lorem ipsum')

    expect(HistoricContent).toBeInTheDocument();
  });
});