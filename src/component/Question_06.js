import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "1010";

function Question_06() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = () => {
    if (value === QUEST_ANSWER) {
      history.push("/Mission/08");
    } else {
      history.push("/result/wrong/06");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mission">
      <h1 className="mission-title">문제: </h1>
      <h2 className="mission-description">
        우리가 미래를 약속하는 아주 중요한 날이 있습니다.
        <br /> 그 날이 언제일까요?
      </h2>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="importantDate"
          label="중요한 날을 입력해 주세요."
          defaultValue=""
          helperText="4자리 숫자"
          variant="outlined"
          onChange={handleChange}
        />
      </div>

      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          정답 제출하기
        </Button>
      </div>
    </div>
  );
}

export default Question_06;
