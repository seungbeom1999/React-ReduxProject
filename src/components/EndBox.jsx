const EndBox = ({ list, clickRemoveButton, clickCancelButton }) => {
  return (
    <ul key={list.id} className="list">
      <li>
        <h3>{list.title}</h3>
        <p>{list.detail}</p>
      </li>
      <li className="btnSetting">
        <button
          className="deleteBtn"
          onClick={() => clickRemoveButton(list.id)}
        >
          삭제하기
        </button>
        <button
          className="completeBtn"
          onClick={() => clickCancelButton(list.id)}
        >
          취소
        </button>
      </li>
    </ul>
  );
};

export default EndBox;
