import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Result_wrong_03() {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="answer">
      <h1 className="wrong">
        틀렸습니다. <br />
      </h1>
      <h2 className="hint-title">HINT</h2>
      <div>01. 보관함 안을 잘 살펴 보세요.</div>
      <div>02. 띄어쓰기를 잘 확인해 보세요.</div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          문제로 돌아가기
        </Button>
      </div>
    </div>
  );
}

export default Result_wrong_03;
