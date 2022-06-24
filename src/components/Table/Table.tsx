import React, { useMemo, useState } from 'react';
import ReadOnlyRow from './Row/ReadOnlyRow';
import EditableRow from './Row/EditableRow';
import Header from './Header/Header';
import Pagination from './Pagination/Pagination';
import './table.scss';
import { TableProps, person } from 'interfaces/interfaces';

const Table: React.FC<TableProps> = ({ data, headers, pageSize }) => {
  const [tableData, setTableData] = useState<person[]>(data);
  const [selectedRowForEdit, setSelectedRowForEdit] = useState<person>({ id: -1 });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, tableData, pageSize]);

  const handleRowEdit = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    setSelectedRowForEdit({ ...selectedRowForEdit, [`${fieldName}`]: fieldValue });
  };

  const handleRowSave = (event: React.FormEvent) => {
    event.preventDefault();
    const newTableData = [...tableData];

    const index = tableData?.findIndex((row) => row?.id === selectedRowForEdit?.id);

    newTableData[index] = selectedRowForEdit;

    setTableData(newTableData);
    setSelectedRowForEdit({ id: -1 });
  };

  const handleEditClick = (row: person) => {
    setSelectedRowForEdit(row);
  };

  const handleCancel = () => {
    setSelectedRowForEdit({ id: -1 });
  };

  const handleDeleteClick = (rowId: number) => {
    setTableData(tableData?.filter((row) => row?.id !== rowId));
  };

  return (
    <form onSubmit={handleRowSave}>
      <table>
        <Header headers={headers} />
        <tbody>
          {currentTableData?.map((row, index) => (
            <tr key={index}>
              {selectedRowForEdit?.id === row?.id ? (
                <EditableRow selectedRowForEdit={selectedRowForEdit} handleRowEdit={handleRowEdit} handleCancel={handleCancel} />
              ) : (
                <ReadOnlyRow
                  row={row}
                  headers={headers}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data?.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </form>
  );
};

export default Table;
