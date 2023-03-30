import "./css/TodoForm.css";
import { useState } from "react";

export default function TodoForm(props) {
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(todoInput === "") return;
    props.onAddTodo({
      id: Math.random().toString(),
      isDone: "belum",
      title: todoInput,
    });
    setTodoInput("");
  };

  return (
    <>
      <div className="todo-form">
        <label>What's Todo ?</label>
        <form onSubmit={submitHandler}>
          <div className="todo-form_controls">
            <div className="control-todo">
              <input
                type="text"
                className="control-todo_input"
                placeholder="Input Todo.."
                onChange={onChangeTodoInput}
                value={todoInput}
              />
            </div>
            <div className="control-button">
              <button type="submit" className="button-todo_add">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
