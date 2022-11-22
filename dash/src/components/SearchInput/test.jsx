import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { SearchInput } from '.';

describe('<SearchInput />', () => {
  it('should mount', () => {
    renderWithTheme(<SearchInput>Lorem ipsum</SearchInput>);
    
    const searchinputContent = screen.getByText('Lorem ipsum')

    expect(searchinputContent).toBeInTheDocument();
  });
});