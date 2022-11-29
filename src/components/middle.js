const Middle = (props) => {
  const { setTitle, setWish, addWish, title, wish } = props;
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
      <button className="button" onClick={addWish}>
        추가하기
      </button>
    </div>
  );
};

export default Middle;
