import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Mission_06() {
  const history = useHistory();
  const [lockerId, setLockerId] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/seo-quest/seo-quest.github.io/master/userData.json?timestamp=${new Date().getTime()}`
      )
      .then((resp) => {
        setLockerId(resp.data.lockerId_03);
      });
  }, []);

  const handleNext = () => {
    history.push("/Question/05");
  };

  return (
    <div className="mission">
      <h1 className="mission-title">미션 :</h1>
      <h2 className="mission-description">
        사진 속 오른쪽 가게에서 편지를 받아주세요.
      </h2>
      <div className="image-container">
        <img className="image" src="/seoul_university.jpg" alt="물품보관함" />
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          편지를 받았습니다!
        </Button>
      </div>
    </div>
  );
}

export default Mission_06;
