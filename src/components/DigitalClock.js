import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  function tambah() {
    setCount(count + 2);
  }

  return (
    <div className="digital-clock">
      <span>{hours < 10 ? `0${hours}` : hours}</span>:
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      <div>{count}</div>
      <button onClick={() => tambah()}>Tambah</button>
    </div>
  );
}

export default DigitalClock;
