import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_01() {
  const history = useHistory();
  const handleStart = () => {
    history.push("/Question/01");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">집에서 나와주세요.</h2>
      <div className="mission-list-label">아래 내용을 지켜주세요!</div>
      <ul className="todo-list">
        <li>> 옷은 가볍게!</li>
        <li>> 출발 시간은 15:00</li>
      </ul>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleStart}>
          출발하기!
        </Button>
      </div>
    </div>
  );
}

export default Mission_01;
