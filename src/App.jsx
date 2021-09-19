import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "テスト１",
    "テスト２"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["テスト３"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="imcomp">
        <p className="title">未完了のTodo</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="comp">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
