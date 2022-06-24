import { EditableRowProps } from 'interfaces/interfaces';
import React from 'react';
import './row.scss';

const EditableRow: React.FC<EditableRowProps> = ({ selectedRowForEdit, handleRowEdit, handleCancel }) => {
  return (
    <>
      {Object?.entries(selectedRowForEdit)?.map(([key, value], index) => (
        <td key={index}>
          <input type="text" required name={key} value={value ?? ''} onChange={handleRowEdit}></input>
        </td>
      ))}
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </>
  );
};

export default EditableRow;
