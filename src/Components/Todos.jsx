import React from "react";

function Todos(props) {
    return (
        <>
            <div className="mainDivTodoList">
                <div className="todo-container">
                    <div className="todo-item">
                        <p className="todo-text">{props.todoItem}</p>
                        <button
                            className="btn btn-danger"
                            onClick={() => {
                                props.removeComp(props.id);
                            }}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Todos;
