import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div>
      게임을 시작한다.
      <Link to="/Quest1">Start</Link>
    </div>
  );
}

export default Start;
