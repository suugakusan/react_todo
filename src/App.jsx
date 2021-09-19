import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div className="imcomp">
        <p className="title">未完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>テスト</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>テスト</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="comp">
        <p className="title">完了のTodo</p>
        <ul>
          <div className="list-row">
            <li>テスト</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>テスト</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
