import React from 'react';
import { render } from '@testing-library/react';
import EditableRow from 'components/Table/Row/EditableRow';
import { tableRow } from './ReadOnlyRow.test';

describe('EditableRow component', () => {
  test('It should matches snapshot', () => {
    const view = render(<EditableRow selectedRowForEdit={tableRow} handleRowEdit={jest.fn()} handleCancel={jest.fn()} />);
    expect(view.container).toMatchSnapshot();
  });
});
