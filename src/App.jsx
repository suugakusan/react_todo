import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div>
        <input placeholder="Todoを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTodo</p>
        <ul>
          <div>
            <li>テスト</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>テスト</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了のTodo</p>
        <ul>
          <div>
            <li>テスト</li>
            <button>戻す</button>
          </div>
          <div>
            <li>テスト</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
