import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_07() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Question/06");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">동대입구역으로 오세요.</h2>
      <div className="mission-list-label">
        압구정 로데오역 7번출구 앞 버스 정류장에서 301번을 타고,
        <br />
        동대입구역으로 오세요
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          동대입구역에 도착했어요!
        </Button>
      </div>
    </div>
  );
}

export default Mission_07;
