import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Result_wrong_01() {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <div className="answer">
      <h1 className="wrong">
        틀렸습니다. <br /> 좀더 신중히 생각 해 주세요.
      </h1>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          문제로 돌아가기
        </Button>
      </div>
    </div>
  );
}

export default Result_wrong_01;
