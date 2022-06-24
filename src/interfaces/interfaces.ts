export interface person {
  id: number;
  first_name?: string | null;
  last_name?: string | null;
  email?: string | null;
  date_of_birth?: string | null;
  industry?: string | null;
  salary?: number | null;
  years_of_experience?: number | null;
}

export interface TableProps {
  data: person[];
  headers: string[];
  pageSize: number;
}

export interface ReadOnlyRowProps {
  row: person;
  headers: string[];
  handleEditClick: (row: person) => void;
  handleDeleteClick: (rowId: number) => void;
}

export interface EditableRowProps {
  selectedRowForEdit: person;
  handleRowEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
}

export interface HeaderProps {
  headers: string[];
}

export interface PaginationProps {
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

export interface usePaginationProps {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export interface result {
  labels: string[];
  data: number[];
}

export interface datasets {
  [key: string]: { count: number; total: number };
}
