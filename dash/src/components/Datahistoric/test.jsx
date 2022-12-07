import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { DataHistoric } from '.';

describe('<Datahistoric />', () => {
  it('should mount', () => {
    renderWithTheme(<DataHistoric>Lorem ipsum</DataHistoric>);
    
    const datahistoricContent = screen.getByText('Lorem ipsum')

    expect(datahistoricContent).toBeInTheDocument();
  });
});