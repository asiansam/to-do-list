import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletecard } from "../../redux/modules/TodoMod";
import { cancelCard } from "../../redux/modules/TodoMod";
import { Link } from "react-router-dom";

const Todo = () => {
  const 카드데이터 = useSelector((state) => state.todos.todos);

  const 액션넘겨주기 = useDispatch();

  const 카드지우기 = (아이디) => {
    console.log(아이디);
    액션넘겨주기(deletecard(아이디));
  };

  const 카드취소하기 = (아이디) => {
    console.log(아이디);
    액션넘겨주기(cancelCard(아이디));
  };

  return (
    <div className="box-Container">
      {카드데이터.map((파라미터) => {
        if (파라미터.완료 === false) {
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
                  카드취소하기(파라미터.아이디);
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

export default Todo;
