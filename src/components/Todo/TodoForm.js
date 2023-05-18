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
      return;
    }
    if(todoInput.length > 20){
      toast.error("Maximum 20 Character");
      return;
    }
    props.onAddTodo({
      id: Math.random().toString(),
      isDone: "belum",
      title: todoInput.trim(),
    });
    setTodoInput("");
    toast.success("Todo Added !");
  };

  return (
    <div>
      <div className="">
        <label className="text-[16px] block mb-2">What's Todo ?</label>
        <form onSubmit={submitHandler}>
          <div className="flex gap-2">
            <div className="">
              <input
                type="text"
                className="px-4 py-2 rounded-md focus:outline-none shadow-md w-full"
                placeholder="Input Todo.."
                onChange={onChangeTodoInput}
                value={todoInput}
                autoFocus
              />
            </div>
            <div className="">
              <button
                type="submit"
                className="py-2 px-6 bg-sky-200 rounded-md hover:bg-sky-300 shadow-md"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
