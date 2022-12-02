import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { DataTable } from '.';

describe('<DataTable />', () => {
  it('should mount', () => {
    renderWithTheme(<DataTable>Lorem ipsum</DataTable>);
    
    const datatableContent = screen.getByText('Lorem ipsum')

    expect(datatableContent).toBeInTheDocument();
  });
});