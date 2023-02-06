import React from "react";
import TableRows from './TableRows';

function Table(props) {
    return (
        <table className="w-100 bg-aliceblue rounded">
            <thead className="text-center">
                <tr>
                    <th>Nome</th>
                    <th>P1</th>
                    <th>P2</th>
                    <th>Seminário</th>
                    <th>Total</th>
                    <th>Aprovação</th>
                    <th className="text-red">Edit/Erase</th>
                </tr>
            </thead>
            <tbody className="text-center">
                {props.students.map((student) => {
                    return (
                        <TableRows
                            key={student.id}
                            student={student}
                            selectStudent={props.selectStudent}
                            handleEraseStudent={props.handleEraseStudent}
                        >
                        </TableRows>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;


