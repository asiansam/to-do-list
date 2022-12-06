// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_CARD = "DELETE_CARD";
const MOVE_CARD = "MOVE_CARD";
const CANCEL_CARD = "CANCEL_CARD";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};
export const deletecard = (id) => {
  return { type: DELETE_CARD, id };
};

export const moveCard = (id) => {
  return { type: MOVE_CARD, id };
};
export const cancelCard = (id) => {
  return { type: CANCEL_CARD, id };
};
// initial State
const initialState = {
  todos: [
    {
      id: 1,
      desc: "리액트",
      subDesc: "리액트 공부",
      comp: true,
    },
    {
      id: 2,
      desc: "노드",
      subDesc: "노드 공부",
      comp: true,
    },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_CARD:
      const newCardList = state.todos.filter((item) => item.id !== action.id);
      return {
        todos: newCardList,
      };
    case MOVE_CARD:
      let findIndex = state.todos.findIndex((item) => item.id === action.id);
      let copiedItems = [...state.todos];
      copiedItems[findIndex].comp = false;
      return {
        todos: copiedItems,
      };
    case CANCEL_CARD:
      let findcancelIndex = state.todos.findIndex(
        (item) => item.id === action.id
      );
      let copiedcancelItems = [...state.todos];
      copiedcancelItems[findcancelIndex].comp = true;
      return {
        todos: copiedcancelItems,
      };
    default:
      return state;
  }
};

export default todos;
