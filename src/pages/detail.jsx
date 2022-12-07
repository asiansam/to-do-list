// src/pages/Work.js

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const 카드데이터 = useSelector((state) => state.todos.todos);
  const 주소아이디객체 = useParams();

  const 들어온카드 = 카드데이터.find(
    (파라미터) => 파라미터.아이디 === parseInt(주소아이디객체.id)
  );

  return (
    <MiddleBox>
      <Link to="/">
        <GoBack>돌아가기</GoBack>
      </Link>
      <Id>id:{들어온카드.아이디}</Id>
      <Desc>{들어온카드.제목}</Desc>
      <SubDesc>{들어온카드.설명}</SubDesc>
    </MiddleBox>
  );
}

const MiddleBox = styled.div`
  width: 60%;
  height: 300px;
  position: relative;
  margin-top: 300px;
  border: solid white;
  margin-left: auto;
  margin-right: auto;
  justify-content: auto;
  align-items: center;
  border-radius: 30px;
  background-color: blanchedalmond;
`;
const Id = styled.div`
  margin-top: 50px;
  margin-left: 40px;
  font-size: 30px;
`;
const Desc = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  font-weight: bold;
  font-size: 25px;
`;
const SubDesc = styled.div`
  margin-top: 20px;
  margin-left: 50px;
  font-size: 40px;
`;
const GoBack = styled.button`
  float: right;
  margin: 25px;
  width: 130px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
`;
export default Detail;
