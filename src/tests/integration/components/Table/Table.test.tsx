import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from 'components/Table/Table';
import tableData from 'tests/static/tableData.json';
import { headers } from 'tests/unit/components/Table/Header/Header.test';

describe('Table component', () => {
  test('It should matches snapshot', () => {
    const view = render(<Table data={tableData} headers={headers} pageSize={20} />);
    expect(view.container).toMatchSnapshot();
  });

  test('It should appear all input fields in a row after Edit button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const readOnlyRowEditBt = screen.getByTestId('read-only-row-edit-bt-1');

    fireEvent.click(readOnlyRowEditBt);
    const editRowInputElements = screen.getAllByRole('textbox');
    expect(editRowInputElements)?.toHaveLength(headers?.length - 2);
  });

  test('It should disappear the row after Delete button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const readOnlyRowDeleteBt = screen.getByTestId('read-only-row-delete-bt-1');

    fireEvent.click(readOnlyRowDeleteBt);
    expect(screen.queryByTestId('read-only-row-delete-bt-1'))?.toBeNull();
  });

  test('It should disappear all input fields in a row after Cancel button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const readOnlyRowEditBt = screen.getByTestId('read-only-row-edit-bt-1');
    fireEvent.click(readOnlyRowEditBt);

    const editRowCancelBt = screen.getByTestId('edit-row-cancel-bt-1');
    fireEvent.click(editRowCancelBt);

    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });

  test('It should be able to type in table row input field', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const readOnlyRowEditBt = screen.getByTestId('read-only-row-edit-bt-1');
    fireEvent.click(readOnlyRowEditBt);

    const editRowInput = screen.getByTestId('edit-row-input-1-1');
    fireEvent.change(editRowInput, { target: { value: 'New edit row input value' } });
  });

  test('It should be saved all input fields in a row after Save button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const readOnlyRowEditBt = screen.getByTestId('read-only-row-edit-bt-1');
    fireEvent.click(readOnlyRowEditBt);

    const editRowSaveBt = screen.getByTestId('edit-row-save-bt-1');
    fireEvent.click(editRowSaveBt);

    expect(screen.queryAllByRole('textbox')).toHaveLength(0);
  });

  test('It should be changed the current table page after the right arrow button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const rightArrow = screen.getByTestId('right-arrow-li');
    fireEvent.click(rightArrow);
    expect(screen.getByTestId('read-only-row-delete-bt-21')).toBeInTheDocument();
  });

  test('It should be changed the current table page after the numbered button click and after the left arrow button click', () => {
    render(<Table data={tableData} headers={headers} pageSize={20} />);

    const secondPadinationNumberedLi = screen.getByTestId('pagination-li-2');
    fireEvent.click(secondPadinationNumberedLi);
    expect(screen.getByTestId('read-only-row-delete-bt-21')).toBeInTheDocument();

    const leftArrow = screen.getByTestId('left-arrow-li');
    fireEvent.click(leftArrow);
    expect(screen.getByTestId('read-only-row-delete-bt-1')).toBeInTheDocument();
  });
});
