import "./form.css";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todomod";

const Form = () => {
  const [title, setTitle] = useState("");
  const [wish, setWish] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: todos.length + 1,
        desc: title,
        subDesc: wish,
        comp: true,
      })
    );
  };
  return (
    <div className="middle">
      <p className="title">제목</p>
      <input
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <p className="title">내용</p>
      <input
        className="input"
        value={wish}
        onChange={(e) => setWish(e.target.value)}
      ></input>
      <button className="button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
