import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from 'components/Table/Pagination/Pagination';

describe('Pagination component', () => {
  test('It should matches snapshot', () => {
    const view = render(
      <Pagination className={'pagination-bar'} currentPage={1} totalCount={26} pageSize={25} onPageChange={jest.fn()} />
    );
    expect(view.container).toMatchSnapshot();
  });

  test('It should appear the Pagination component when the totalCount is greater than the pageSize', () => {
    render(<Pagination className={'pagination-bar'} currentPage={1} totalCount={26} pageSize={25} onPageChange={jest.fn()} />);
    const paginationLiElements = screen?.getAllByRole('listitem');
    expect(paginationLiElements)?.toHaveLength(4);
  });

  test('It should not appear the Pagination component when the totalCount is less than the pageSize', () => {
    render(<Pagination className={'pagination-bar'} currentPage={1} totalCount={24} pageSize={25} onPageChange={jest.fn()} />);
    const paginationUlElement = screen?.queryByRole('list');
    expect(paginationUlElement).toBeNull();
  });
});
