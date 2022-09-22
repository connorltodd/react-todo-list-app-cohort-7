import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Todo from "../Todo/Todo";
import CreateTodoForm from "../CreateTodoForm/CreateTodoForm";

// css

export default function TodoList () {
    const [todos, setTodos] = React.useState([]);

    React.useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => setTodos(response.data))
    }

    const deleteTodo = (todoToDeleteId) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoToDeleteId}`)
        .then(response => {
            const newTodoList = todos.filter(todo => todo.id !== todoToDeleteId);
            setTodos(newTodoList)
        })
    }

    const createTodo = (newTodo) => {
        axios.post(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => {

            setTodos(
                [
                    {...newTodo, id: uuidv4()},
                    ...todos
                ]
            )
        })
    }

   

    return (
        <div>
            <h1>TodoList</h1>
            <CreateTodoForm createTodo={createTodo} />
            {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
            {/* <Todo /> */}
        </div>
    )
}