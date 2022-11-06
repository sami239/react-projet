import react,{useState,useEffect} from 'react';
import Form from './Components/Form';
import './App.css';
//import components
import TodoList from './Components/TodoList.js'
import todo from './Components/Todo';

function App() {
  //login
  
  //state 
  const [InputText, setInputText] = useState("");
  const [Todos,setTodos] = useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);
  //use effect
  useEffect(() => {
    filterHandler();
  },[Todos,status])
  //funtions and events
 const filterHandler = () => {
  switch (status){
    case 'completed': 
    setFilteredTodos(Todos.filter((todo) => todo.completed == true ))
    break;
    case 'uncompleted':
      setFilteredTodos(Todos.filter((todo) => todo.completed == false ))
      break;
      default:
        setFilteredTodos(Todos);
        break;
  }
 };
  return (
    <div className="App">
       <header>
        <h1>Ed's Todo List</h1>
       </header>
       <Form InputText={InputText} 
       Todos={Todos} 
       setTodos={setTodos} 
       setInputText={setInputText}
       setStatus={setStatus}
       
        />
       <TodoList 
       FilteredTodos={filteredTodos} 
       setTodos={setTodos} 
       todos={Todos}
       />
       
    </div>
  );
}

export default App;
