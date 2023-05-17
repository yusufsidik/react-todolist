import TodoItems from "./TodoItems";
import TodoForm from "./TodoForm";
import { useState } from "react";
import { toast } from "react-hot-toast";

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

  const todoDelete = (index) => {
    // const newTodos = todos;
    // newTodos.filter((todo,i) => {
    //   return todo
    // })

    // setTodos((prev) => {
    //   return prev.filter((val, i) => {
    //     return val[i] !== prev[index];
    //   });
    // });
    toast.success("Todo deleted !");
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-3xl font-semibold text-slate-700 mb-6">
          Todo List
        </h2>
        <TodoForm onAddTodo={addTodo} />
        <ul className="w-full max-w-screen-sm mt-8">
          {todos &&
            Array.isArray(todos) &&
            todos.map((todo, index) => {
              return (
                <TodoItems
                  title={todo.title}
                  key={todo.id}
                  index={index}
                  isDone={todo.isDone}
                  onTodoIsDone={todoIsDone || (() => {})}
                  onDeleteTodo={todoDelete}
                  idItem={todo.id}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}
