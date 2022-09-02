export default function Todo (props) {
    return (
        <div>
            <h1>Todo id: {props.todo.id}</h1>
            <p>{props.todo.title}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>Delete Todo</button>
        </div>
    )
}