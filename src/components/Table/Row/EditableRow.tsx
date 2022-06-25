import { EditableRowProps } from 'interfaces/interfaces';
import React from 'react';
import './row.scss';

const EditableRow: React.FC<EditableRowProps> = ({ selectedRowForEdit, handleRowEdit, handleCancel }) => {
  return (
    <>
      {Object?.entries(selectedRowForEdit)?.map(([key, value], index) => (
        <td key={index}>
          {key === 'id' ? (
            <>{value}</>
          ) : (
            <input
              type="text"
              required
              name={key}
              value={value ?? ''}
              onChange={handleRowEdit}
              data-testid={`edit-row-input-${index}-${selectedRowForEdit.id}`}
            ></input>
          )}
        </td>
      ))}
      <td>
        <button type="submit" data-testid={`edit-row-save-bt-${selectedRowForEdit.id}`}>
          Save
        </button>
        <button type="button" data-testid={`edit-row-cancel-bt-${selectedRowForEdit.id}`} onClick={handleCancel}>
          Cancel
        </button>
      </td>
    </>
  );
};

export default EditableRow;
