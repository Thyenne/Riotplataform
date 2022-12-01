import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { BarChart } from '.';

describe('<BarChart />', () => {
  it('should mount', () => {
    renderWithTheme(<BarChart>Lorem ipsum</BarChart>);
    
    const barchartContent = screen.getByText('Lorem ipsum')

    expect(barchartContent).toBeInTheDocument();
  });
});