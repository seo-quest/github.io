import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import TimerIcon from "@material-ui/icons/Timer";

function Mission_04() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Mission/05");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">
        카드로 맘에 드는 예쁜 옷을 사 입으세요
      </h2>
      <div className="mission-text">
        <span>
          단, 시간은
          <span style={{ color: "red" }}>
            <TimerIcon style={{ verticalAlign: "top" }} />
            16:30
          </span>
          까지
        </span>
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          옷을 구매했습니다.
        </Button>
      </div>
    </div>
  );
}

export default Mission_04;
