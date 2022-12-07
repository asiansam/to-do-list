// Action value
const ADD_CARD = "ADD_TODO";
const DELETE_CARD = "DELETE_CARD";
const MOVE_CARD = "MOVE_CARD";

// Action Creator
export const addCard = (새로만든카드데이터) => {
  return { type: ADD_CARD, 새로만든카드데이터 };
};

export const deletecard = (아이디) => {
  return { type: DELETE_CARD, 아이디 };
};

export const moveCard = (아이디) => {
  return { type: MOVE_CARD, 아이디 };
};

// initial State
const initialState = {
  todos: [
    {
      아이디: 1,
      제목: "리액트",
      설명: "리액트 공부",
      완료: true,
    },
    {
      아이디: 2,
      제목: "노드",
      설명: "노드 공부",
      완료: true,
    },
    {
      아이디: 3,
      제목: "파이썬",
      설명: "파이썬 공부",
      완료: false,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        todos: [...state.todos, action.새로만든카드데이터],
      };
    case DELETE_CARD:
      const newCardList = state.todos.filter(
        (item) => item.아이디 !== action.아이디
      );
      return {
        todos: newCardList,
      };
    case MOVE_CARD:
      let findIndex = state.todos.findIndex(
        (item) => item.아이디 === action.아이디
      );
      let copiedItems = [...state.todos];
      copiedItems[findIndex].완료 === true
        ? (copiedItems[findIndex].완료 = false)
        : (copiedItems[findIndex].완료 = true);
      console.log(copiedItems[findIndex].완료);
      return {
        todos: copiedItems,
      };
    default:
      return state;
  }
};

export default todos;
