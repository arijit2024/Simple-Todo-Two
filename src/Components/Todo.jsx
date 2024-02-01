import React, { useState } from "react"
import Todos from "./Todos"

function Todo(){
    const [todo, setTodo] = useState("");
    const [todoText, setTodoText] = useState([]);

    // Used onChange
    const handelChange = (e) => {
        setTodo(e.target.value)
    }
    
    // Click Add button
    const saveData = (e) => {
        e.preventDefault();
        setTodoText((prevTodos) => {
           return [...prevTodos, todo]
        })
        setTodo('')
        console.log(todoText)
    }
    
    // Delete Todo
    const deleteItem = (id) => {
            setTodoText((prevTodosn) => {
                    return prevTodosn.filter((arrElements, index) => {
                        return index !== id;
                    })
            })
    }

    return(
        <>
            <div className="container d-flex justify-content-center">
                <form className="row g-1 mt-3">
                    <div className="col">
                        <input type="text" value={todo} onChange={handelChange} className="form-control" id="input" placeholder="🌐Add.."/>
                    </div>
                    <div className="col">
                        <button type="submit" onClick={saveData} className="btn btn-primary mb-3">ADD</button>
                    </div>
                </form>    
            </div>
                    {todoText.map((todoItem, index) => (
                    <Todos key={index} id={index} todoItem={todoItem} removeComp={deleteItem}/>
                  ))}
        </>
    )
}

export default Todo;