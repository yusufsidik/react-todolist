import "./css/Todo.css";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (val) => {
    setTodos((prev) => {
      return [...prev, val];
    });
  };

  const todoIsDone = (index, val) => {
    const newTodos = todos;
    if (val === "belum") {
      newTodos[index].isDone = "sudah";
      toast.success("Sudah dikerjakan");
    } else if (val === "sudah") {
      newTodos[index].isDone = "belum";
      toast.error("Belum dikerjakan");
    }
    setTodos(newTodos);
  };

  const todoDelete = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
    toast.success("Kegiatan telah dihapus..");
  };

  return (
    <>
      <main className="todo">
        <TodoForm onAddTodo={addTodo} />
        <br />
        <h2>Daftar Kegiatan</h2>
        <hr />
        <ul>
          {todos &&
            Array.isArray(todos) &&
            todos.map((todo, index) => {
              return (
                <TodoItems
                  title={todo.title}
                  key={todo.id}
                  index={index}
                  isDone={todo.isDone}
                  id={todo.id}
                  onTodoIsDone={todoIsDone || (() => {})}
                  onTodoDelete={todoDelete || (() => {})}
                />
              );
            })}
          {todos.length === 0 ? <li>Belum ada kegiatan</li> : false}
        </ul>
      </main>
    </>
  );
}
