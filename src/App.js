import TodoList from './components/TodoList/TodoList';
import './App.css';

// Component Tree
// APP
// |
// TodoList -- (data of todos)

// |         |
// Todo      CreateTodoForm

function App() {
  return (
    <div className="App">
     <TodoList />
    </div>
  );
}

export default App;
