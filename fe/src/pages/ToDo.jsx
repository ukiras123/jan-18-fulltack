import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Form, Button, Table, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addToTODOAction, deleteTodoAction, getAllToDosAction, updateTodoAction } from '../redux/todo/todoAction';
function ToDo() {

    // const [taskList, setTaskList] = useState([])
    const { todoList } = useSelector(state => state.todo);
    const taskRef = useRef(null);
    const formRef = useRef(null);

    const updateTaskRef = useRef(null);
    const udpateFormRef = useRef(null);

    const dispatch = useDispatch();
    const [selectedTodo, setSelectedTodo] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addToList = (e) => {
        e.preventDefault();
        const currentTask = taskRef.current.value;
        dispatch(addToTODOAction(currentTask))
        // setTaskList([...taskList, currentTask])

        // taskRef.current.value = "";
        formRef.current.reset();
    }

    const updateToDo = (e) => {
        e.preventDefault();
        dispatch(updateTodoAction(selectedTodo?._id, selectedTodo.todo))
        handleClose()
    }

    const handleOnDelete = (id) => {
        // const newList = taskList.filter((f, i) => i != id);
        // setTaskList(newList)
        dispatch(deleteTodoAction(id))
    }
    const handleOnEdit = (todo) => {
        setSelectedTodo(todo)
        handleShow()
    }
    useEffect(() => {
        dispatch(getAllToDosAction())
    }, [])

    return (
        <div>
            <Container>
                <div className='my-form mt-3 px-5'>
                    <Form ref={formRef} onSubmit={addToList} >
                        <Row>
                            <Col md="6" sm="6">
                                {<Form.Control required type='text' placeholder='Task'
                                    name='task' ref={taskRef} />}
                            </Col>
                            <Col md="6" sm="6">
                                <Button type='submit' >Add To List</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
                <div className='my-task-list mt-3 px-5'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList.map((t, i) => {
                                return (<tr key={t._id}>
                                    <td>{i + 1}</td>
                                    <td>{t.todo}</td>
                                    <td><Button variant='warning' onClick={() => handleOnEdit(t)}>Edit</Button>
                                        <Button variant='danger' onClick={() => handleOnDelete(t._id)}>Delete</Button></td>
                                </tr>)
                            })}

                        </tbody>
                    </Table>

                </div>
            </Container >
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update TODO</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form ref={udpateFormRef} onSubmit={updateToDo} >
                        <Row>
                            <Col md="6" sm="6">
                                {<Form.Control value={selectedTodo?.todo} required type='text' placeholder='Task'
                                    name='task' onChange={(e) => {
                                        const { value } = e.target;
                                        setSelectedTodo({ ...selectedTodo, todo: value })
                                    }} />}
                            </Col>
                            <Col md="6" sm="6">
                                <Button type='submit' >Update</Button>
                            </Col>
                        </Row>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ToDo