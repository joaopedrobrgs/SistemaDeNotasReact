import './SchoolSystem.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header'
import Button from 'react-bootstrap/Button';
import AddModal from './components/AddModal';
import AddForm from './components/AddForm';
import EditModal from './components/EditModal';
import EditForm from './components/EditForm';
import Table from './components/Table'
import Student from './components/Student';

function SchoolSystem() {
  const [students, setStudents] = useState([])
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState([]);
  function handleAddStudent(id, name, firstTest, secondTest, seminary) {
    let student = new Student(id, name, firstTest, secondTest, seminary);
    setStudents([...students, student]);
    setAddModal(false);
  }
  function selectStudent(student) {
    let select = students.filter((element) => {
      return element.id == student.id;
    })
    setSelectedStudent(select[0]);
    setEditModal(true);
  }
  function handleEditStudent(id, name, firstTest, secondTest, seminary) {
    let student = new Student(id, name, firstTest, secondTest, seminary);
    let updatedStudents = students.map((element) => {
      if (element.id === student.id) {
        element = student;
      }
      return element;
    })
    setStudents(updatedStudents);
    setEditModal(false);
  }
  function handleEraseStudent(student) {
    let filteredStudents = students.filter((element) => {
      return element.id != student.id;
    })
    if (window.confirm("Você tem certeza disso?\nClique em OK para confirmar ou em CANCEL para cancelar a ação.")) {
      setStudents(filteredStudents);
    }
    else {
    }
  }
  function showAddModal(event) {
    setAddModal(true);
  }
  function hideAddModal(event) {
    setAddModal(false);
  }
  function hideEditModal(event) {
    setEditModal(false);
  }
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem('savedStudents', JSON.stringify(students));
    }, 1)
  }, [students])
  useEffect(() => {
    let savedStudents = JSON.parse(localStorage.getItem('savedStudents'));
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, [])
  return (
    <div className='container'>
      <Header backgroundColor='aliceblue'>NOTAS DA TURMA - MATEMÁTICA</Header>
      <div className='text-center py-10px'>
        <Button variant='success' onClick={showAddModal}>Cadastrar novo aluno</Button>
      </div>
        <AddModal addModal={addModal} hideAddModal={hideAddModal}>
          <AddForm handleAddStudent={handleAddStudent}></AddForm>
        </AddModal>
        <EditModal
          editModal={editModal}
          hideEditModal={hideEditModal}
        >
          <EditForm student={selectedStudent} handleEditStudent={handleEditStudent}></EditForm>
        </EditModal>
      <Table
        students={students}
        selectStudent={selectStudent}
        handleEraseStudent={handleEraseStudent}
      >
      </Table>
    </div>
  );
}

export default SchoolSystem;
