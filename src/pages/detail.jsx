// src/pages/Work.js

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./Pages.css";
import { Link } from "react-router-dom";

function Detail() {
  const 카드데이터 = useSelector((state) => state.todos.todos);
  const 주소아이디객체 = useParams();

  const 들어온카드 = 카드데이터.find(
    (파라미터) => 파라미터.아이디 === parseInt(주소아이디객체.id)
  );

  return (
    <div className="middle-Box">
      <Link to="/">
        <button className="goBack">돌아가기</button>
      </Link>
      <div className="id">id:{들어온카드.아이디}</div>
      <div className="desc">{들어온카드.제목}</div>
      <div className="subdesc">{들어온카드.설명}</div>
    </div>
  );
}

export default Detail;
