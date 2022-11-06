import react from 'react'


const Form =({setInputText,Todos,setTodos,InputText,setStatus}) =>{
  const inputTextHandler = (e)=>{
    
    setInputText(e.target.value);
    setStatus={setStatus}
  };
  const submitTodoHandler =(e)=>{
    e.preventDefault();
    setTodos([
      ...Todos,
      {text: InputText,completed:false,id:Math.random()*1000}
    ]);
    setInputText("");
  };
  const statusHandler =(e)=>{
    setStatus(e.target.value);
  } 
    return(
<form>
      <input 
      value={InputText} 
      onChange={inputTextHandler}
       type="text" 
       className="todo-input" />
      <button className="todo-button" onClick={submitTodoHandler} type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}
export default Form;