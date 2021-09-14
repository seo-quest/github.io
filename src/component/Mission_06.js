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
        물품 보관함 번호는 {lockerId}입니다.
      </h2>
      <div className="mission-text">
        이전 문제의 정답을 비밀번호로 보관함을 열어보세요!
      </div>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={handleNext}>
          보관함을 열었습니다!
        </Button>
      </div>
    </div>
  );
}

export default Mission_06;
