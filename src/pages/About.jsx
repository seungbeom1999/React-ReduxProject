import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
function About() {
  const parmas = useParams();
  const lists = useSelector((state) => state.todoList.list);
  const foundData = lists.find((item) => {
    return item.id === parmas.id || parseInt(item.id) === parseInt(parmas.id);
  });
  console.log(lists);
  console.log(foundData);
  return (
    <StMain>
      <Naved>
        <Stid> id: {foundData.id}</Stid>{" "}
        <LinkBtn>
          <Link to="/">이전으로</Link>
        </LinkBtn>
      </Naved>
      <Sth3>{foundData.title}</Sth3>
      <Sttext>{foundData.detail}</Sttext>
    </StMain>
  );
}

export default About;

const StMain = styled.div`
  border: solid 1px gray;
  border-radius: 12px;
  min-width: 380px;
  max-width: 380px;
  min-height: 160px;
  margin: 5px;
  text-align: center;
`;
const LinkBtn = styled.p`
  border: solid 2px #d3d3d3;
  border-radius: 8px;
  background-color: #fff;
  height: 38px;
  width: 30%;
  text-align: center;
  margin: 0;
`;
const Naved = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;
const Stid = styled.p`
  font-weight: 650;
  margin: 5px;
  margin-left: 10px;
`;
const Sth3 = styled.p`
  margin: 0 0 0 15px;
  text-align: left;
  font-weight: 800;
  font-size: 20px;
`;
const Sttext = styled.p`
  margin: 16px 0 0 15px;
  text-align: left;
`;
