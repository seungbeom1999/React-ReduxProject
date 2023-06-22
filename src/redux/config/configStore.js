// 중앙 데이터 관리소(State)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todoList from "../modules/todoList";

const rootReducer = combineReducers({
  todoList,
});
const store = createStore(rootReducer);

export default store;
// export로 내보내면 중괄호 필요
// default 사용하면 중괄호가 필요없다.
