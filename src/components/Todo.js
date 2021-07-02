import React from 'react';
import Icofont from 'react-icofont';

const Todo = ({text, todo, todos,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="btn btn-dark"><Icofont icon="check"/></button>
            <button onClick={deleteHandler} className="btn btn-dark"><Icofont icon="trash"/></button>
        </div>

    );
}

export default Todo;