import "./Form.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../redux/modules/TodoMod";

const Form = () => {
  const [타이틀, set타이틀변경] = useState("");
  const [내용, set내용변경] = useState("");

  const 카드데이터 = useSelector((state) => state.todos.todos);
  console.log(카드데이터);
  const 액션을넘겨주기 = useDispatch();

  const 추가하기기능 = (e) => {
    e.preventDefault();
    if (타이틀 === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    액션을넘겨주기(
      addCard({
        아이디: 카드데이터.length + 1,
        제목: 타이틀,
        설명: 내용,
        완료: true,
      })
    );
  };
  return (
    <div className="middle">
      <p className="title">제목</p>
      <input
        className="input"
        value={타이틀}
        onChange={(e) => set타이틀변경(e.target.value)}
      ></input>
      <p className="title">내용</p>
      <input
        className="input"
        value={내용}
        onChange={(e) => set내용변경(e.target.value)}
      ></input>
      <button className="button" onClick={추가하기기능}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
