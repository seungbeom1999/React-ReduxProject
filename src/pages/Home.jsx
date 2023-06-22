import React from "react";
import HeaderForm from "../components/HeaderForm";
import { styled } from "styled-components";
import { useSelector } from "react-redux";
import List from "../components/List";
function Home() {
  //list 값 불러오기
  const lists = useSelector((state) => state.todoList.list);
  console.log(lists);
  return (
    <StLayout>
      <StHeader>My Todo List</StHeader>
      <HeaderForm />
      <div className="listGather">
        <List list={lists} isDone={false} />
        <List list={lists} isDone={true} />
      </div>
    </StLayout>
  );
}

export default Home;

//styled components 부분
const StHeader = styled.div`
  align-items: center;
  border: 1px solid #bbb;
  display: flex;
  height: 40px;
  justify-content: space-between;
  padding: 0 20px;
`;
const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
