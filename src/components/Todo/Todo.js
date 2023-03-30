import "./css/Todo.css";
import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import { useState } from "react";
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
    } else if (val === "sudah") {
      newTodos[index].isDone = "belum";
    }
    setTodos(newTodos);
  };

  return (
    <>
      <main className="todo">
        <TodoForm onAddTodo={addTodo} />
        <br />
        <h2>Todo List</h2>
        <hr />
        <ul>
          {todos.map((todo, index) => {
            return (
              <TodoItems
                title={todo.title}
                key={todo.id}
                index={index}
                isDone={todo.isDone}
                onTodoIsDone={todoIsDone}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}
