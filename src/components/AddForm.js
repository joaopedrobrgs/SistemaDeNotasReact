import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';

function AddForm(props) {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [firstTest, setFirstTest] = useState('');
    const [secondTest, setSecondTest] = useState('');
    const [seminary, setSeminary] = useState('');
    function addStudent(event) {
        event.preventDefault();
        if (name && firstTest && secondTest && seminary) {
            props.handleAddStudent(id, name, firstTest, secondTest, seminary);
            setId(Number(id) + 1);
            setName('');
            setFirstTest('');
            setSecondTest('');
            setSeminary('');
        }
    }
    useEffect(() => {
        setTimeout(() => {
            localStorage.setItem('nextId', Number(id));
        }, 1);
    }, [id])
    useEffect(() => {
        let nextId = localStorage.getItem('nextId');
        if (nextId){
            setId(nextId);
        }
    }, [])
    return (
        <form className='formContainer'>
            <input type='number' value={id} hidden onChange={(event) => { setId(event.target.value) }}></input>
            <div className="formContent">Nome do aluno: <input onInput={(event) => { setName(event.target.value) }} type='text' value={name}></input></div>
            <div className="formContent">P1: <input onInput={(event) => { setFirstTest(event.target.value) }} type='number' min='0' max='3' value={firstTest}></input></div>
            <div className="formContent">P2: <input onInput={(event) => { setSecondTest(event.target.value) }} type='number' min='0' max='3' value={secondTest}></input></div>
            <div className="formContent">Seminário: <input onInput={(event) => { setSeminary(event.target.value) }} type='number' min='0' max='4' value={seminary}></input></div>
            <Button onClick={addStudent} variant="success">Adicionar Aluno</Button>
        </form>
    )
}

export default AddForm;



