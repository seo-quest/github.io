import React from "react";
import { Button } from "@material-ui/core";

function Mission_03() {
  //const history = useHistory();
  const handleNext = () => {
    //history.push("/Question/03");
    alert("next");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">이 카드로 맘에 드는 예쁜 옷 사요 </h2>
      <div className="mission-list-label">단, 시간은 16:30 까지</div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          옷을 구매했습니다.
        </Button>
      </div>
    </div>
  );
}

export default Mission_03;
