import { styled } from "styled-components";
import { useDispatch } from "react-redux";
import { removeList } from "../redux/modules/todoList";
import { passList } from "../redux/modules/todoList";
import { Link } from "react-router-dom";
const List = ({ list, isDone }) => {
  const disaptch = useDispatch();
  const clickRemoveButton = (id) => {
    // list(newList);
    disaptch(removeList(id));
  };
  const clickCancelButton = (id) => {
    disaptch(passList(id));
  };
  return (
    <div>
      <h2>{isDone ? "Done..." : "Working..."} </h2>
      <StMain>
        {list
          .filter((t) => t.isDone === isDone)
          .map((list) => {
            return (
              <StList key={list.id}>
                <Stli>
                  <p>
                    <Link to={`/${list.id}`}>이전으로</Link>
                  </p>
                  <h3>{list.title}</h3>
                  <p>{list.detail}</p>
                </Stli>
                <StBtnsetting>
                  <StDeleteBtn onClick={() => clickRemoveButton(list.id)}>
                    삭제하기
                  </StDeleteBtn>
                  <StCancelBtn onClick={() => clickCancelButton(list.id)}>
                    {isDone ? "취소" : "완료"}
                  </StCancelBtn>
                </StBtnsetting>
              </StList>
            );
          })}
      </StMain>
    </div>
  );
};

export default List;

const StMain = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 20px;
`;
const StList = styled.ul`
  width: 270px;
  border: solid 3px #ffc0cb;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;
const StBtnsetting = styled.li`
  display: flex;
  gap: 10px;
`;
const StDeleteBtn = styled.button`
  border: solid 2px red;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 10px;
  height: 38px;
  width: 45%;
`;
const StCancelBtn = styled.button`
  border: solid 2px skyblue;
  border-radius: 8px;
  background-color: #fff;
  margin-top: 10px;
  height: 40px;
  width: 45%;
`;
const Stli = styled.li`
  margin-left: 0;
  list-style-type: none;
`;
