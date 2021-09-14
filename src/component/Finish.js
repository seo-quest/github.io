import React from "react";

function Finish() {
  return (
    <div className="mission">
      <h1 className="mission-title">모든 미션이 완료되었습니다.</h1>
      <h2 className="mission-description">
        이제 당신을 애타게 기다리는 사람에게 전화를 걸어주세요.
      </h2>
      <div className="mission-list-label">
        <a href="tel:010-5063-3697"> 전화걸기 </a>
      </div>
    </div>
  );
}

export default Finish;
