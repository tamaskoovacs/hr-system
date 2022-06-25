import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import HrSystemBoard from 'views/HrSystemBoard/HrSystemBoard';
import { BrowserRouter } from 'react-router-dom';

describe('HrSystemBoard page', () => {
  test('It should matches snapshot', () => {
    const view = render(
      <BrowserRouter>
        <HrSystemBoard />
      </BrowserRouter>
    );
    expect(view.container).toMatchSnapshot();
  });

  test('It should navigate to the Charts page after button click', () => {
    render(
      <BrowserRouter>
        <HrSystemBoard />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText('Charts'));
    expect(document.location.pathname).toBe('/charts');
  });
});
