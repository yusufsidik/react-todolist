import "./css/TodoItems.css";
import { useState } from "react";
export default function TodoItem(props) {
  // console.log(props.isDone);
  const isDoneHandler = (index, val) => {
    props.onTodoIsDone(index, val);
  };

  const [done, setDone] = useState(props.isDone);

  return (
    <>
      <li className="todo-items">
        <div className="todo-items__todo">
          <h2>
            {props.title} |{done === "sudah" ? " Selesai" : " Belum selesai"}
          </h2>
          <div className="todo-items__button">
            <button
              className="button button-done"
              onClick={() => {
                isDoneHandler(props.index, done);
                setDone((prev) => (prev === "belum" ? "sudah" : "belum"));
              }}
            >
              Done
            </button>
            <button className="button button-delete">Delete</button>
          </div>
        </div>
      </li>
    </>
  );
}
