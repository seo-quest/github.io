import React from "react";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const QUEST_ANSWER = "김남준";

function Question_05() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = () => {
    if (value === QUEST_ANSWER) {
      history.push("/Mission/07");
    } else {
      history.push("/result/wrong/05");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mission">
      <h1 className="mission-title">문제: </h1>
      <h2 className="mission-description">
        쪽지에 적힌 단어를 입력 해 주세요.
      </h2>
      <div className="mission-text">
        K-Pop을 대표하는 가수 중,
        <br /> 단연 으뜸인 인형으로 가서 쪽지를 확인 하고.
        <br /> 쪽지에 적힌 단어를 입력 해 주세요.
      </div>
      <h2 className="hint-title">Warning, 쪽지를 찾을 수 없나요?</h2>
      <div className="hint-content">
        - 인형의 사진을 찍어서 저에게 보내주세요.
      </div>
      <div className="text-input-container">
        <TextField
          className="answer-input"
          id="btsName"
          label="쪽지에 적힌 단어를 입력 해 주세요."
          defaultValue=""
          helperText="힌트 : Kstar 로드, 2번출구"
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

export default Question_05;
