import { ReadOnlyRowProps } from 'interfaces/interfaces';
import React from 'react';
import './row.scss';

const ReadOnlyRow: React.FC<ReadOnlyRowProps> = ({ row, headers, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      {Object?.entries(row)?.map(([key, value], index) => (
        <td key={index} data-label={headers?.[index]}>
          {value}
        </td>
      ))}
      <td>
        <button type="button" data-testid={`read-only-row-edit-bt-${row.id}`} onClick={() => handleEditClick(row)}>
          {'Edit'}
        </button>
        <button type="button" data-testid={`read-only-row-delete-bt-${row.id}`} onClick={() => handleDeleteClick(row?.id)}>
          {'Delete'}
        </button>
      </td>
    </>
  );
};

export default ReadOnlyRow;
