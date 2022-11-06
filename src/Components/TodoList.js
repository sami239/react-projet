import react from 'react';
import Todo from './Todo';
const TodoList = ({todos,setTodos,FilteredTodos}) => {
  
    return (
        <div className="todo-container">
      <ul className="todo-list">
        {FilteredTodos.map((todo) =>(
           
          <Todo 
          setTodos={setTodos} 
          todos={todos} 
          key={todo.id}
          text={todo.text}
          todo={todo}
          />
          ))}
         
      </ul>

    </div>
    );
}

export default TodoList ;