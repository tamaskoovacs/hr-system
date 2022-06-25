import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from 'components/Table/Header/Header';

export const headers = [
  'Id',
  'First Name',
  'Last Name',
  'Email',
  'Date of birth',
  'Industry',
  'Salary',
  'Years of experience',
  'Actions'
];

describe('Header component', () => {
  test('It should matches snapshot', () => {
    const view = render(<Header headers={headers} />);
    expect(view.container).toMatchSnapshot();
  });
});
