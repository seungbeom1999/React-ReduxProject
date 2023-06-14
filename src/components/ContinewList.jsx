import ContinewBox from "./ContinewBox";

const ContinuewList = ({ conList, clickRemoveButton, clickDoneButton }) => {
  return conList.map((list) => {
    return (
      <ContinewBox
        key={list.id}
        list={list}
        clickRemoveButton={clickRemoveButton}
        clickDoneButton={clickDoneButton}
      />
    );
  });
};
export default ContinuewList;
