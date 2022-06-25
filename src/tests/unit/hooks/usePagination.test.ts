import { renderHook } from '@testing-library/react';
import { usePagination } from 'hooks/usePagination';

describe('usePagination', () => {
  test('It should contain the pagination range left and right dots as well', () => {
    const { result } = renderHook(() => usePagination({ currentPage: 16, totalCount: 500, siblingCount: 1, pageSize: 20 }));

    expect(result.current).toStrictEqual([1, -1, 15, 16, 17, -1, 25]);
  });

  test('It should contain the pagination range only left dots', () => {
    const { result } = renderHook(() => usePagination({ currentPage: 23, totalCount: 500, siblingCount: 1, pageSize: 20 }));

    expect(result.current).toStrictEqual([1, -1, 21, 22, 23, 24, 25]);
  });

  test('It should contain the pagination range only right dots', () => {
    const { result } = renderHook(() => usePagination({ currentPage: 2, totalCount: 500, siblingCount: 1, pageSize: 20 }));
    expect(result.current).toStrictEqual([1, 2, 3, 4, 5, -1, 25]);
  });
});
