import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_01() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const answer = {
    year: 2021,
    month: 11,
    date: 12,
  };
  const history = useHistory();

  const handleStart = () => {
    history.push("/Question/01");
  };
  return (
    <>
      <h1 className="mission-title">첫번째 미션</h1>
      <h2 className="mission-description">집에서 나와주세요.</h2>
      <div>아래 내용을 지켜주세요</div>
      <ul>
        <li>옷은 가볍게!</li>
        <li>출발 시간은 15:00</li>
      </ul>
      <div className="button-container">
        <Button onClick={handleStart}> 출발하기! </Button>
      </div>
    </>
  );
}

export default Mission_01;
