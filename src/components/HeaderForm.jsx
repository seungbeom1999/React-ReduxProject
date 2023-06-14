const HeaderForm = ({
  title,
  detail,
  detailChange,
  titleChange,
  clickAddButton,
}) => {
  return (
    <form className="text" onSubmit={clickAddButton}>
      <div>
        <label className="form-label"> 제목: &nbsp;</label>
        <input className="add-input" value={title} onChange={titleChange} />
        <label className="form-label"> 내용: &nbsp;</label>
        <input className="add-input" value={detail} onChange={detailChange} />
      </div>
      <button className="add-button">추가하기</button>
    </form>
  );
};

export default HeaderForm;
