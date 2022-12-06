// src/pages/Work.js

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./pages.css";
import { Link } from "react-router-dom";

function Detail() {
  const todos = useSelector((state) => state.todos.todos);
  const param = useParams();

  const work = todos.find((work) => work.id === parseInt(param.id));

  return (
    <div className="middle-Box">
      <Link to="/">
        <button className="goback">돌아가기</button>
      </Link>
      <div className="id">id:{work.id}</div>
      <div className="desc">{work.desc}</div>
      <div className="subdesc">{work.subDesc}</div>
    </div>
  );
}

export default Detail;
