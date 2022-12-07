import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { DataPartida } from '.';

describe('<DataPartida />', () => {
  it('should mount', () => {
    renderWithTheme(<DataPartida>Lorem ipsum</DataPartida>);
    
    const datapartidaContent = screen.getByText('Lorem ipsum')

    expect(datapartidaContent).toBeInTheDocument();
  });
});