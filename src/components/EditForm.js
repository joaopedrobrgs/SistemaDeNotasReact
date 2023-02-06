import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function EditForm(props) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [firstTest, setFirstTest] = useState('');
    const [secondTest, setSecondTest] = useState('');
    const [seminary, setSeminary] = useState('');
    useEffect(()=>{
        setId(props.student.id);
        setName(props.student.name);
        setFirstTest(props.student.firstTest);
        setSecondTest(props.student.secondTest);
        setSeminary(props.student.seminary);
    },[props.student])
    function editStudent(event) {
        event.preventDefault();
        if (name && firstTest && secondTest && seminary) {
            props.handleEditStudent(id, name, firstTest, secondTest, seminary);
        }
    }
    return (
        <form className='formContainer'>
            <input type='number' value={id} hidden onChange={(event) => {setId(event.target.value)}}></input>
            <div className="formContent">Nome do aluno: <input type='text' value={name} onChange={(event) => {setName(event.target.value)}}></input></div>
            <div className="formContent">P1: <input type='number' value={firstTest} min='0' max='3' onChange={(event) => {setFirstTest(event.target.value)}}></input></div>
            <div className="formContent">P2: <input type='number' value={secondTest} min='0' max='3' onChange={(event) => {setSecondTest(event.target.value)}}></input></div>
            <div className="formContent">Seminário: <input type='number' value={seminary} min='0' max='3' onChange={(event) => {setSeminary(event.target.value)}}></input></div>
            <Button onClick={editStudent} variant="info">Editar Aluno</Button>
        </form>
    )
}

export default EditForm;