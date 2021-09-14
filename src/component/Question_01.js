import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "수원역 파리바게뜨";

function Question_01() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = () => {
    console.dir(value);
    if (value === QUEST_ANSWER) {
      history.push("/Mission/02");
    } else {
      history.push("/result/wrong/01");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mission">
      <h1 className="mission-title">문제: </h1>
      <h2 className="mission-description">
        우리가 처음 만난곳은
        <br /> 어디일까요? (4점)
      </h2>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="firstMettingPlace"
          label="장소를 입력 해 주세요"
          defaultValue=""
          helperText="힌트 : 000 00000"
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

export default Question_01;
