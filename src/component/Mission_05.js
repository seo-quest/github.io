import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Mission_05() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Question/04");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">옷 예쁘게 입었나요? </h2>
      <div className="mission-text">
        수플레 팬케이크가 제일 맛있었던 가게가 있는 역으로 가주세요.
      </div>
      <ul className="todo-list">
        <li>> 이동할 때 기차를 이용하면 좀 더 편할거에요.</li>
        <li>> 기차표를 예약해 두었어요.</li>
      </ul>
      <div className="image-container">
        <img className="image" src="/ticket.jpg" alt="버스정류장" />
      </div>
      <h2 className="hint-title">HINT</h2>
      <div className="hint-content">- 샤로수</div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          도착 했습니다.
        </Button>
      </div>
    </div>
  );
}

export default Mission_05;
