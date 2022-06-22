import React from "react";
import './row.scss'

const EditableRow = ({ selectedRowForEdit, handleRowEdit, handleCancel, handleSave }) => {
  return (
    <>
      {Object?.entries(selectedRowForEdit)?.map(([key, value], index) => 
        <td key={index}>
          <input type="text" required name={key} value={value ?? ''} onChange={handleRowEdit}></input>
        </td>
      )}
      <td>
        <button type="button" onClick={handleSave}>Save</button>
        <button  type="button" onClick={handleCancel}>Cancel</button>
      </td>
    </>
  );
};

export default EditableRow;
