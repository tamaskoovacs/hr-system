import React, { useState } from "react";
import ReadOnlyRow from "./Row/ReadOnlyRow";
import EditableRow from './Row/EditableRow';
import Header from "./Header/Header";
import "./table.scss";

const Table = ({ data, headers, pageSize }) => {
  const [tableData, setTableData] = useState(data);
  const [selectedRowForEdit, setSelectedRowForEdit] = useState();

  const handleRowEdit = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    setSelectedRowForEdit({ ...selectedRowForEdit, [`${fieldName}`]: fieldValue });
  };

  const handleRowSave = () => {
    const newTableData = [...tableData];

    const index = tableData?.findIndex((contact) => contact?.id === selectedRowForEdit.id);

    newTableData[index] = selectedRowForEdit;

    setTableData(newTableData);
    setSelectedRowForEdit(null);
  };

  const handleEditClick = (row) => {
    setSelectedRowForEdit(row);
  };

  const handleCancel = () => {
    setSelectedRowForEdit(null);
  };

  const handleDeleteClick = (rowId) => {
    setTableData(tableData?.filter((row) => row?.id !== rowId));
  };

  return (
    <>
      <table>
        <Header headers={headers} />
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index}>
              {selectedRowForEdit?.id === row?.id ? (
                <EditableRow selectedRowForEdit={selectedRowForEdit} handleRowEdit={handleRowEdit} handleCancel={handleCancel} handleSave={handleRowSave} />
              ) : (
                <ReadOnlyRow row={row} headers={headers} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
