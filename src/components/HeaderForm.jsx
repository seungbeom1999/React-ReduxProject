import { styled } from "styled-components";
import { addList } from "../redux/modules/todoList";
import { useState } from "react";
import { useDispatch } from "react-redux";

const HeaderForm = () => {
  // 초기 값 빈값으로 설정하기
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const dispatch = useDispatch();
  // 값 설정하기
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const detailChange = (event) => {
    setDetail(event.target.value);
  };
  const AddSubMit = (event) => {
    event.preventDefault();
    const lists = {
      id: crypto.randomUUID(),
      title,
      detail,
      isDone: false,
    };
    dispatch(addList(lists));
    setTitle("");
    setDetail("");
    // console.log(lists);
  };
  return (
    <StForm className="text" onSubmit={AddSubMit}>
      <div>
        <StLabel> 제목: &nbsp;</StLabel>
        <StInput value={title} onChange={titleChange} />
        <StLabel> 내용: &nbsp;</StLabel>
        <StInput value={detail} onChange={detailChange} />
      </div>
      <StBtn>추가하기</StBtn>
    </StForm>
  );
};

export default HeaderForm;

const StForm = styled.form`
  align-items: center;
  display: flex;
  gap: 20px;
  background-color: #eee;
  border-radius: 12px;
  justify-content: space-between;
  padding: 30px;
`;
const StLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
const StInput = styled.input`
  border: solid 1px greenyellow;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;
const StBtn = styled.button`
  background-color: burlywood;
  color: black;
  border: none;
  border-radius: 10px;
  font-weight: 700;
  height: 40px;
  width: 140px;

  &:hover {
    background-color: #c18977;
    color: black;
  }
`;
