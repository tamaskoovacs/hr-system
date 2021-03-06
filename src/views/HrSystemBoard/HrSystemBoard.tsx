import Table from 'components/Table/Table';
import tableData from 'static/tableData.json';
import { useNavigate } from 'react-router-dom';
import './hrSystemBoard.scss';

const HrSystemBoard: React.FC = () => {
  let navigate = useNavigate();
  const handleChartsClick = () => {
    navigate('/charts');
  };
  return (
    <>
      <div className="top-section">
        <h1>Hr System Board</h1>
        <button onClick={handleChartsClick}>Charts</button>
      </div>
      <Table data={tableData} headers={headers} pageSize={20} />
    </>
  );
};

const headers = [
  'Id',
  'First Name',
  'Last Name',
  'Email',
  'Date of birth',
  'Industry',
  'Salary',
  'Years of experience',
  'Actions'
];

export default HrSystemBoard;
