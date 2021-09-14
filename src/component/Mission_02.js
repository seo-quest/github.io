import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Mission_02() {
  const history = useHistory();
  const handleNext = () => {
    history.push("/Question/02");
  };
  const [cabinetId, setCabinetId] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/seo-quest/seo-quest.github.io/master/userData.json"
      )
      .then((resp) => {
        setCabinetId(resp.data.cabinetId);
      });
  }, []);

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">
        그 곳에서 2번째로 가까운 백화점은 어디일까요?
      </h2>
      <div className="mission-text">
        해당 백화점 2층 {cabinetId} 물품 보관함으로 가주세요.
      </div>
      <div className="image-container">
        <img className="image" src="/cabinet_sample.png" alt="물품보관함" />
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          보관함 앞에 도착했어요!
        </Button>
      </div>
    </div>
  );
}

export default Mission_02;
