import React from 'react';
import { render } from '@testing-library/react';
import ReadOnlyRow from 'components/Table/Row/ReadOnlyRow';
import { headers } from 'tests/unit/components/Table/Header/Header.test';

export const tableRow = {
  id: 1,
  first_name: 'Ewen',
  last_name: null,
  email: 'emclewd1@bbb.org',
  date_of_birth: '15/12/1991',
  industry: 'Telecommunications Equipment',
  salary: 144392.9,
  years_of_experience: 2.8
};

describe('ReadOnlyRow component', () => {
  test('It should matches snapshot', () => {
    const view = render(
      <ReadOnlyRow row={tableRow} headers={headers} handleEditClick={jest.fn()} handleDeleteClick={jest.fn()} />
    );
    expect(view.container).toMatchSnapshot();
  });
});
