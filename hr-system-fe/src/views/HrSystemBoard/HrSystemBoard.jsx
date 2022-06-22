import Table from "components/Table/Table"
import tableData from 'static/tableData.json'
import './hrSystemBoard.scss'

const HrSystemBoard = () => {
    return (
        <>
            <div className="top-section">
                <h1>Hr System Board</h1>
            </div>
            <Table data={tableData} headers={tableHeaders} pageSize={20}/>
        </>
    )
}

const tableHeaders = ['Id', 'First Name', 'Last Name', 'Email', 'Date of birth', 'Industry', 'Salary', 'Years of experience', 'Actions']

export default HrSystemBoard;