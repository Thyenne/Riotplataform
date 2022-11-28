import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { Banner } from '.';

describe('<Banner />', () => {
  it('should mount', () => {
    renderWithTheme(<Banner>Lorem ipsum</Banner>);
    
    const bannerContent = screen.getByText('Lorem ipsum')

    expect(bannerContent).toBeInTheDocument();
  });
});