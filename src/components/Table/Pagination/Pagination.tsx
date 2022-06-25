import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from 'hooks/usePagination';
import './pagination.scss';
import { PaginationProps } from 'interfaces/interfaces';

const Pagination: React.FC<PaginationProps> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className
}) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  if (currentPage === 0 || (paginationRange?.length ?? 0) < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange?.[paginationRange?.length - 1];
  return (
    <ul className={classnames('pagination-container', { [className]: className })}>
      <li
        className={classnames('pagination-item', { disabled: currentPage === 1 })}
        onClick={onPrevious}
        data-testid="left-arrow-li"
      >
        <div className="arrow left" />
      </li>
      {paginationRange?.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li className="pagination-item dots" key={index}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
            key={index}
            data-testid={`pagination-li-${index + 1}`}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
        data-testid="right-arrow-li"
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
