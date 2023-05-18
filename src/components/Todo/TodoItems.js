import { useState } from "react";
export default function TodoItem(props) {
  const isDoneHandler = (index, val) => {
    props.onTodoIsDone(index, val);
  };
  const deleteHandler = (id) => {
    props.onDeleteTodo(id);
  };

  const confirmDelete = () => {
    return window.confirm("Delete this todo ?")
      ? deleteHandler(props.id)
      : false;
  };

  const [done, setDone] = useState(props.isDone);

  return (
    <>
      <li className="w-full rounded-md bg-sky-300 py-4 px-4 shadow-lg relative mb-4">
        <span
          className={`rounded-tl-lg rounded-br-lg px-2 py-1 text-sm text-white absolute top-0 left-0 w-1/4 ${
            done === "sudah" ? "bg-green-600" : "bg-pink-600"
          }`}
        ></span>
        <div className="flex justify-between items-center">
          <h2 className="text-slate-800">{props.title}</h2>
          <div className="flex gap-3">
            <button
              className="bg-green-200 px-4 py-2 rounded-lg shadow-md hover:bg-green-300"
              onClick={() => {
                isDoneHandler(props.index, done);
                setDone((prev) => (prev === "belum" ? "sudah" : "belum"));
              }}
            >
              {done === "sudah" ? "Cancel" : "Done"}
            </button>
            <button
              className="bg-red-200 px-4 py-2 rounded-lg shadow-md hover:bg-red-300"
              onClick={confirmDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
