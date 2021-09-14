import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "1003";

function Question_04() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = () => {
    console.dir(value);
    if (value === QUEST_ANSWER) {
      history.push("/Mission/06");
    } else {
      history.push("/result/wrong/04");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mission">
      <h1 className="mission-title">문제: </h1>
      <h2 className="mission-description">
        우리가 지금까지 갔던 여행지 중 최고의 여행지 출발 날짜를 입력해 주세요.
      </h2>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="travelDate"
          label="출발 날짜를 입력해 주세요.(4자리)"
          defaultValue=""
          helperText="힌트 : 09월 14일 -> 0914"
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

export default Question_04;
