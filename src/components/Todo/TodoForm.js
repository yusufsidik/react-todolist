import "./css/TodoForm.css";
import { useState } from "react";
import toast from "react-hot-toast";
export default function TodoForm(props) {
  const [todoInput, setTodoInput] = useState("");

  const onChangeTodoInput = (e) => {
    setTodoInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (todoInput === "") {
      toast.error("Form tidak boleh kosong");
      return;
    }
    props.onAddTodo({
      id: Math.random().toString(),
      isDone: "belum",
      title: todoInput,
    });
    setTodoInput("");
    toast.success("Sukses DItambahkan !");
  };

  return (
    <>
      <div className="todo-form">
        <label>Masukkan Kegiatan</label>
        <form onSubmit={submitHandler}>
          <div className="todo-form_controls">
            <div className="control-todo">
              <input
                type="text"
                className="control-todo_input"
                placeholder="Kegiatan apa yang mau dibuat.."
                onChange={onChangeTodoInput}
                value={todoInput}
              />
            </div>
            <div className="control-button">
              <button type="submit" className="button-todo_add">
                Masuk
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
