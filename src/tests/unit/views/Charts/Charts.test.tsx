import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Charts from 'views/Charts/Charts';

describe('Charts page', () => {
  test('It should matches snapshot', () => {
    const view = render(
      <BrowserRouter>
        <Charts />
      </BrowserRouter>
    );
    expect(view.container).toMatchSnapshot();
  });
});
