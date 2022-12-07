import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { DataChamp } from '.';

describe('<DataChamp />', () => {
  it('should mount', () => {
    renderWithTheme(<DataChamp>Lorem ipsum</DataChamp>);
    
    const datachampContent = screen.getByText('Lorem ipsum')

    expect(datachampContent).toBeInTheDocument();
  });
});