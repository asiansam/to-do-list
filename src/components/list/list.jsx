import "./List.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletecard } from "../../redux/modules/TodoMod";
import { moveCard } from "../../redux/modules/TodoMod";
import { Link } from "react-router-dom";

const List = ({ isDone }) => {
  const 카드데이터 = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log(isDone);

  const 카드지우기 = (아이디) => {
    console.log(아이디);
    dispatch(deletecard(아이디));
  };

  const 카드완료이동 = (아이디) => {
    console.log(아이디);
    dispatch(moveCard(아이디));
  };

  return (
    <div className="box-Container">
      {카드데이터.map((파라미터) => {
        if (파라미터.완료 === isDone) {
          return (
            <div className="card-Box" key={파라미터.아이디}>
              <Link to={`/${파라미터.아이디}`} className="details">
                자세히보기
              </Link>
              <div className="card-Desc">{파라미터.제목}</div>
              <div className="card-Desc-Sub">{파라미터.설명}</div>
              <button
                className="remove"
                onClick={() => {
                  카드지우기(파라미터.아이디);
                }}
              >
                삭제하기
              </button>
              <button
                className="comp"
                onClick={() => {
                  카드완료이동(파라미터.아이디);
                }}
              >
                {파라미터.완료 === true ? "완료" : "취소"}
              </button>
            </div>
          );
        }
      })}
    </div>
  );
};

export default List;
