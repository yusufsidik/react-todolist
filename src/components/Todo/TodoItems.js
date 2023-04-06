import "./css/TodoItems.css";
import { useState } from "react";

export default function TodoItem(props) {
  const isDoneHandler = (index, val) => {
    props.onTodoIsDone(index, val);
  };

  const [done, setDone] = useState(props.isDone);
  const checkCssIsDone = () => {
    if (done === "sudah") {
      return {
        img: "check.png",
        class: "check",
        title: "Selesai",
      };
    } else {
      return {
        img: "uncheck2.png",
        class: "uncheck",
        title: "Belum selesai",
      };
    }
  };

  const deleteTodo = (index) => {
    props.onTodoDelete(index);
  };

  const confirmDelete = () => {
    return window.confirm("Hapus Kegiatan ?") ? deleteTodo(props.id) : false;
  };

  return (
    <>
      <li className="todo-items">
        <div className="todo-items__todo">
          <h2 className="todo-items__title">{props.title}</h2>
          <div className="todo-items__button">
            <button
              className={"button button-done " + checkCssIsDone().class}
              onClick={() => {
                isDoneHandler(props.index, done);
                setDone((prev) => (prev === "belum" ? "sudah" : "belum"));
              }}
            >
              <div>{checkCssIsDone().title}</div>{" "}
              <img
                src={"img/" + checkCssIsDone().img}
                className="icon-isdone"
                alt="icon-isdone"
              />
            </button>
            <button className="button button-delete" onClick={confirmDelete}>
              Hapus
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
