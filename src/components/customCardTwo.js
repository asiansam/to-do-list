const CustomCardtwo = (props) => {
  const { cardDesc, deleteCard, cancelCard } = props;
  return (
    <div className="box-container">
      {cardDesc.map((descs) => {
        if (descs.comp === "1") {
          return (
            <div className="card-box">
              <div className="card-desc" key={props.cardDesc.id}>
                {descs.desc}
              </div>
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
                  cancelCard(descs.id);
                }}
              >
                취소
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

export default CustomCardtwo;
