import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import * as React from 'react';
import { renderWithTheme } from 'utils/renderWithTemplate';
import { BannerHistoric } from '.';

describe('<BannerHistoric />', () => {
  it('should mount', () => {
    renderWithTheme(<BannerHistoric>Lorem ipsum</BannerHistoric>);
    
    const bannerHistoricContent = screen.getByText('Lorem ipsum')

    expect(bannerHistoricContent).toBeInTheDocument();
  });
});