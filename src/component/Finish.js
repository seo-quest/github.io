import React from "react";
import { Button } from "@material-ui/core";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

function Finish() {
  const callToHim = () => {
    window.location.href = "tel:010-5063-3697";
  };
  return (
    <div className="mission">
      <h1 className="mission-title">모든 미션이 완료되었습니다.</h1>
      <h2 className="mission-description">
        이제 당신을 애타게 기다리는 사람에게 전화를 걸어주세요.
      </h2>
      <div className="button-container">
        <Button variant="contained" color="primary" onClick={callToHim}>
          <PhoneAndroidIcon />
          그에게 전화걸기
        </Button>
      </div>
    </div>
  );
}

export default Finish;
