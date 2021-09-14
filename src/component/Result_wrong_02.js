import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";

function Result_wrong_02() {
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
      <div className="error-desc">좀더 신중히 생각 해 주세요.</div>
      <h2 className="hint-title">HINT</h2>
      <div className="hint-content"> - 여대는 처음 가봤어요.</div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          문제로 돌아가기
        </Button>
      </div>
    </div>
  );
}

export default Result_wrong_02;
