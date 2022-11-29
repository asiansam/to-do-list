const CustomCard = (props) => {
  const { moveCard, cardDesc, deleteCard } = props;
  return (
    <div className="box-container">
      {cardDesc.map((descs) => {
        if (descs.comp === "0") {
          return (
            <div className="card-box">
              <div className="card-desc">{descs.desc}</div>
              <div className="card-desc-sub">{descs.subDesc}</div>
              <button
                className="remove"
                onClick={() => {
                  deleteCard(descs.id);
                }}
              >
                삭제하기
              </button>
              <button
                className="comp"
                onClick={() => {
                  moveCard(descs.id);
                }}
              >
                완료하기
              </button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CustomCard;
