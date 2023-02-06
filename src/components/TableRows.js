import React from "react";

function TableRows(props) {
    function aprobbation() {
        if (Number(props.student.firstTest) + Number(props.student.secondTest) + Number(props.student.seminary) >= 7) {
            return 'Aprovado'
        } else {
            return 'Não Aprovado'
        }
    }
    return (
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.firstTest}</td>
            <td>{props.student.secondTest}</td>
            <td>{props.student.seminary}</td>
            <td>{Number(props.student.firstTest) + Number(props.student.secondTest) + Number(props.student.seminary)}</td>
            <td>{aprobbation()}</td>
            <td>
                <button onClick={() => {props.selectStudent(props.student)}}><i className="bi bi-pencil"></i></button>
                <button onClick={() => {props.handleEraseStudent(props.student)}}><i className="bi bi-trash"></i></button>
            </td>
        </tr>
    )
}

export default TableRows;