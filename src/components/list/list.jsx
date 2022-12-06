import "./list.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletecard } from "../../redux/modules/todomod";
import { moveCard } from "../../redux/modules/todomod";
import { Link } from "react-router-dom";

const CustomCard = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const deletec = (id) => {
    console.log(id);
    dispatch(deletecard(id));
  };

  const movecards = (id) => {
    console.log(id);
    dispatch(moveCard(id));
  };
  return (
    <div className="box-container">
      {todos.map((descs) => {
        if (descs.comp === true) {
          return (
            <div className="card-box" key={descs.id}>
              <Link to={`/${descs.id}`} className="details">
                자세히보기
              </Link>
              <div className="card-desc">{descs.desc}</div>
              <div className="card-desc-sub">{descs.subDesc}</div>
              <button
                className="remove"
                onClick={() => {
                  deletec(descs.id);
                }}
              >
                삭제하기
              </button>
              <button
                className="comp"
                onClick={() => {
                  movecards(descs.id);
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
