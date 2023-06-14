const ContinewBox = ({ list, clickRemoveButton, clickDoneButton }) => {
  console.log(list);
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
          onClick={() => clickDoneButton(list.id)}
        >
          완료
        </button>
      </li>
    </ul>
  );
};

export default ContinewBox;
