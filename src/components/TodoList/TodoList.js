import React from 'react';
import axios from 'axios';
import Todo from "../Todo/Todo";
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

   

    return (
        <div>
            TodoList
            {todos.map(todo => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)}
            {/* <Todo /> */}
        </div>
    )
}