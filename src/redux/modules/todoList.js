// action value
const Add_List = "todoList/Add_List";
const REMOVE_LIST = "todoList/REMOVE_LIST";
const PASS_LIST = "todoList/PASS_LIST";

export const addList = (todo) => ({
  type: Add_List,
  payload: todo,
});
export const removeList = (todo) => ({
  type: REMOVE_LIST,
  payload: todo,
});
export const passList = (todo) => ({
  type: PASS_LIST,
  payload: todo,
});

const initialState = {
  list: [
    {
      id: crypto.randomUUID(),
      title: "리액트 공부하기",
      detail: "강의 열심히 듣기!",
      isDone: false,
    },
  ],
};

const todoList = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case Add_List:
      return { ...state, list: [...state.list, action.payload] };
    case REMOVE_LIST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    case PASS_LIST:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone };
          } else {
            return item;
          }
        }),
      };
    // .filter((item) => item.id === action.payload)
    // .map((item) => ({ ...item, isDone: !item.isDone })),
    default:
      return state;
  }
};

export default todoList;
