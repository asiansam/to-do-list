// Action value
const ADD_CARD = "ADD_TODO";
const DELETE_CARD = "DELETE_CARD";
const MOVE_CARD = "MOVE_CARD";
const CANCEL_CARD = "CANCEL_CARD";

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

export const cancelCard = (아이디) => {
  return { type: CANCEL_CARD, 아이디 };
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
      copiedItems[findIndex].완료 = false;
      return {
        todos: copiedItems,
      };
    case CANCEL_CARD:
      let findcancelIndex = state.todos.findIndex(
        (item) => item.아이디 === action.아이디
      );
      let copiedcancelItems = [...state.todos];
      copiedcancelItems[findcancelIndex].완료 = true;
      return {
        todos: copiedcancelItems,
      };
    default:
      return state;
  }
};

export default todos;
