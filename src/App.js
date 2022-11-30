import "./App.css";
import React, { useState } from "react";
import CustomCard from "./components/customCard";
import CustomCardtwo from "./components/customCardTwo";
import Middle from "./components/middle";

//github 데스크탑으로 옮김

function App() {
  const [cardDesc, setCardDesc] = useState([
    { id: 1, desc: "리액트", subDesc: "리액트 공부", comp: "0" },
    { id: 2, desc: "노드", subDesc: "노드 공부", comp: "0" },
    { id: 3, desc: "스프링", subDesc: "스프링 공부", comp: "0" },
  ]);
  const [title, setTitle] = useState("");
  const [wish, setWish] = useState("");

  const addWish = () => {
    const newWish = {
      id: cardDesc.length + 1,
      desc: title,
      subDesc: wish,
      comp: "0",
    };
    setCardDesc([...cardDesc, newWish]);
    setTitle("");
    setWish("");
  };
  const deleteCard = (id) => {
    const newCardList = cardDesc.filter((card) => card.id !== id);
    setCardDesc(newCardList);
  };

  const moveCard = (id) => {
    let findIndex = cardDesc.findIndex((item) => item.id === id);
    let copiedItems = [...cardDesc];
    copiedItems[findIndex].comp = "1";
    setCardDesc(copiedItems);
  };
  const cancelCard = (id) => {
    let findIndex = cardDesc.findIndex((item) => item.id === id);
    let copiedItems = [...cardDesc];
    copiedItems[findIndex].comp = "0";
    setCardDesc(copiedItems);
  };

  return (
    <Box
      cancelCard={cancelCard}
      moveCard={moveCard}
      setTitle={setTitle}
      setWish={setWish}
      cardDesc={cardDesc}
      key={cardDesc.id}
      addWish={addWish}
      deleteCard={deleteCard}
      title={title}
      wish={wish}
    ></Box>
  );
}

function Box(props) {
  const {
    cancelCard,
    moveCard,
    setTitle,
    setWish,
    cardDesc,
    addWish,
    deleteCard,
    title,
    wish,
  } = props;
  return (
    <div className="all-box">
      <div className="top">
        <p>My Todo List</p>
        <p>React</p>
      </div>
      <Middle
        setTitle={setTitle}
        setWish={setWish}
        cardDesc={cardDesc}
        addWish={addWish}
        key={cardDesc.id}
        title={title}
        wish={wish}
      ></Middle>
      <div className="working">working..🔥</div>
      <CustomCard
        moveCard={moveCard}
        cardDesc={cardDesc}
        key={cardDesc.id}
        deleteCard={deleteCard}
      ></CustomCard>
      <div className="working">Done...!🎉</div>
      <CustomCardtwo
        cardDesc={cardDesc}
        key={cardDesc.id}
        deleteCard={deleteCard}
        cancelCard={cancelCard}
      ></CustomCardtwo>
      <div className="box-container"></div>
    </div>
  );
}

export default App;
