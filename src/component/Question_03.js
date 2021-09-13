import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "쪼쪽아 사랑해";

function Question_03() {
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
        보관함 속 쪽지에 적혀있는 문구를 입력해 주세요!
      </h2>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="textInLetter"
          label="보관함 속 쪽지 문구를 입력하세요."
          defaultValue=""
          helperText=""
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

export default Question_03;
