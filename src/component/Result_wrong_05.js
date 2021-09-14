import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";

function Result_wrong_05() {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="answer">
      <h1 className="wrong">
        <ErrorIcon />
        오답입니다.
      </h1>
      <h2 className="hint-title">HINT</h2>
      <div className="hint-content">- 쪽지에 적힌 내용을 입력해 주세요.</div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          문제로 돌아가기
        </Button>
      </div>
    </div>
  );
}

export default Result_wrong_05;
