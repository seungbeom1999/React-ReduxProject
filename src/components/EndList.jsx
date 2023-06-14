import EndBox from "./EndBox";
const EndList = ({ finshedList, clickRemoveButton, clickCancelButton }) => {
  return finshedList.map((list) => {
    return (
      <EndBox
        key={list.id}
        list={list}
        clickRemoveButton={clickRemoveButton}
        clickCancelButton={clickCancelButton}
      />
    );
  });
};

export default EndList;
