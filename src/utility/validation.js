const validation = ({ title, detail }) => {
  if (title === "") {
    alert("제목을 입력해주세요");
    return false;
  }
  if (title.length < 4 || title.length > 12) {
    alert("제목을 4~12자 이내로 입력해주세요");
    return false;
  }
  for (let i = 0; i < title.length; i++) {
    let ch = title.charAt(i);
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let checkNum = /[0-9]/;
    let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    let checkEng = /[a-zA-Z]/;

    if (
      !checkKor.test(ch) &&
      !checkNum.test(ch) &&
      !checkSpc.test(ch) &&
      !checkEng.test(ch)
    ) {
      alert("제목에 여백은 안됩니다.");
      return false;
    }
  }
  if (detail === "") {
    alert("내용을 입력해주세요");
    return false;
  }
  if (detail.length < 4 || detail.length > 12) {
    alert("내용을 4~12자 이내로 입력해주세요");
    return false;
  }
  for (let i = 0; i < detail.length; i++) {
    let ch = detail.charAt(i);
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    let checkNum = /[0-9]/;
    let checkSpc = /[~!@#$%^&*()_+|<>?:{}]/;
    let checkEng = /[a-zA-Z]/;

    if (
      !checkKor.test(ch) &&
      !checkNum.test(ch) &&
      !checkSpc.test(ch) &&
      !checkEng.test(ch)
    ) {
      alert("내용에 여백은 안됩니다.");
      return false;
    }
  }

  return true;
};
export default validation;
