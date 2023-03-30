import "./css/TodoItems.css";
import { useState } from "react";

export default function TodoItem(props) {
  const isDoneHandler = (index, val) => {
    props.onTodoIsDone(index, val);
  };

  const [done, setDone] = useState(props.isDone);
  const checkCssIsDone = () => {
    if(done === "sudah"){
      return {
        img: "check.png",
        class: "check",
        title: "Done"
      }
    } else {
      return {
        img: "uncheck2.png",
        class: "uncheck",
        title: "Not Done"
      }
    }
  }
  return (
    <>
      <li className="todo-items">
        <div className="todo-items__todo">
          <h2 className="todo-items__title">
            {props.title}
          </h2>
          <div className="todo-items__button">
            <button
              className="button button-done"
              onClick={() => {
                isDoneHandler(props.index, done);
                setDone((prev) => (prev === "belum" ? "sudah" : "belum"));
              }}
            >
              <div>{checkCssIsDone().title}</div>  <img src={"img/" + checkCssIsDone().img} className={checkCssIsDone().class} />
            </button>
            <button className="button button-delete">Delete</button>
          </div>
        </div>
      </li>
    </>
  );
}
