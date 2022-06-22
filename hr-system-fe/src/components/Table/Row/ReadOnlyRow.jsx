import React from "react";
import './row.scss'

const ReadOnlyRow = ({ row, headers, handleEditClick, handleDeleteClick }) => {
  return (
    <>
      {Object?.entries(row)?.map(([key, value], index) => <td key={index} data-label={headers?.[index]}>{value}</td>)}
      <td>
        <button type="button" onClick={() => handleEditClick(row)}> Edit </button>
        <button type="button" onClick={() => handleDeleteClick(row?.id)}> Delete </button>
      </td>
    </>
  );
};

export default ReadOnlyRow;
