import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { PieChart } from '.';

describe('<PieChart />', () => {
  it('should mount', () => {
    renderWithTheme(<PieChart>Lorem ipsum</PieChart>);
    
    const PieChartContent = screen.getByText('Lorem ipsum')

    expect(PieChartContent).toBeInTheDocument();
  });
});