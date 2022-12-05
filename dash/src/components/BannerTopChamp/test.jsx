import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { BannerTopChamp } from '.';

describe('<BannerTopChamp />', () => {
  it('should mount', () => {
    renderWithTheme(<BannerTopChamp>Lorem ipsum</BannerTopChamp>);
    
    const bannerHistoricContent = screen.getByText('Lorem ipsum')

    expect(bannerHistoricContent).toBeInTheDocument();
  });
});