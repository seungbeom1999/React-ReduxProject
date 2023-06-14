import "./App.css";
import React, { useState } from "react";
import HeaderForm from "./components/HeaderForm";
import ContinuewList from "./components/ContinewList";
import EndList from "./components/EndList";
import validation from "./utils/validation";

function App() {
  const [list, setList] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      detail: "강의 열심히 듣기!",
      isDone: false,
    },
  ]);

  // 초기 값 빈값으로 설정하기
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  // 값 설정하기
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const detailChange = (event) => {
    setDetail(event.target.value);
  };

  // 추가 버튼 설정하기
  const clickAddButton = (event) => {
    event.preventDefault();

    // 유효성 검사 만들기
    if (validation({ title, detail })) {
      // 고유 id 만들기
      let id = crypto.randomUUID();

      const newList = {
        id,
        title,
        detail,
        isDone: false,
      };
      setList([...list, newList]);
      setTitle("");
      setDetail("");
    }
  };

  // 삭제 버튼 생성하기
  const clickRemoveButton = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  // 완료창으로 넘기기
  const clickDoneButton = (id) => {
    const upDateList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: true };
      } else {
        return item;
      }
    });
    setList(upDateList);
  };

  // 작업창으로 넘기기
  const clickCancelButton = (id) => {
    const upDateList = list.map((item) => {
      if (item.id === id) {
        return { ...item, isDone: false };
      } else {
        return item;
      }
    });
    setList(upDateList);
  };

  // filtering 모임
  const finshedList = list.filter((item) => item.isDone);
  const conList = list.filter((item) => !item.isDone);

  return (
    <div className="layout">
      <div className="header">My Todo List</div>
      <HeaderForm
        title={title}
        detail={detail}
        detailChange={detailChange}
        titleChange={titleChange}
        clickAddButton={clickAddButton}
      />

      <div className="listGather">
        <h2>Working...</h2>
        <div className="workingList">
          <ContinuewList
            conList={conList}
            clickRemoveButton={clickRemoveButton}
            clickDoneButton={clickDoneButton}
          />
        </div>
        <div>
          <h2>Done...</h2>
        </div>
        <div className="doneList">
          <EndList
            finshedList={finshedList}
            clickRemoveButton={clickRemoveButton}
            clickCancelButton={clickCancelButton}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
