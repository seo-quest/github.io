import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "190726";

function Question_02() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = (e) => {
    console.dir(value);
    if (value === QUEST_ANSWER) {
      history.push("/Mission/03");
    } else {
      history.push("/result/wrong/02");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mission">
      <h1 className="mission-title">문제: </h1>
      <h2 className="mission-description">
        우리가 사귀고 처음 데이트 한 날을 입력해 주세요.
      </h2>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="firstDate"
          label="6자리로 입력해 주세요."
          defaultValue=""
          helperText="힌트 : 2021년 09월 14일 -> 210914"
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

export default Question_02;
