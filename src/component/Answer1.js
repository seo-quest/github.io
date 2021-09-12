import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Answer1() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const answer = {
    year: 2021,
    month: 11,
    date: 12,
  };
  const history = useHistory();

  const handleConfirm = () => {
    if (
      answer.year === selectedDate.getFullYear() &&
      answer.month === selectedDate.getMonth() + 1 &&
      answer.date === selectedDate.getDate()
    ) {
      alert("정답입니다.");
      history.push("/Answer1");
    } else {
      alert("오답입니다.");
    }
  };
  return (
    <>
      <p>정답입니다.</p>
    </>
  );
}

export default Answer1;
