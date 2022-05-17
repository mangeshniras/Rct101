import React, { useState } from "react";

const Todo = () => {
    const [value , setTodo] = useState("ABCD")
    const [todos , setTodos ]= useState([])

    const handleChange= (e) => {
        console.log(e.target.value)
        setTodo(e.target.value);
    }

    return (
        <div>
            todo
            <input onChange={handleChange}/>
            <button onClick={() => {
                setTodos([
                    ...todos,
                    {id:Date.now(),value:newTodo,isCompleted:false},
                ]);
            }}
            >
            Add
            </button>
            {todos.map((todo) => {
                <div>{todo.value}</div>
            })}
        </div>
    )
}

export default Todo;