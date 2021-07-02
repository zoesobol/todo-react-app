import React from 'react';
import Icofont from 'react-icofont';

const Form = ({inputText, setInputText,todos,setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed:false, id:Math.random()*1000}
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value)
    };
    return(
        <form>
            <div className="row">
                <div className="col todo-input">
                    <input value={inputText} onChange={inputTextHandler} type="text" className="form-control"></input>
                    <button onClick={submitTodoHandler} className="btn btn-dark" type="submit">
                        <Icofont icon="plus"/>
                    </button>
                </div>
                <div className="col">
                    <select onChange={statusHandler} name="todos" className="form-select">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </div>
        </form>

    );
}

export default Form;