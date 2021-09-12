import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Start() {
  const history = useHistory();
  const handleStartBtn = () => {
    history.push("/Quest1");
  };

  return (
    <div class="main">
      <p>앞으로 이 문제를 풀 때까지 연락을 할 수 없습니다.</p>
      <p>게임을 시작 하시겠습니까?</p>
      <Button color="primary" onClick={handleStartBtn}>
        Start
      </Button>
    </div>
  );
}

export default Start;
