import React, { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";

function Quest1() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const handleConfirm = () => {};
  return (
    <>
      <div>
        <button>이전 단계로</button>
      </div>
      <div>우리는 언제 처음 만났을까요?</div>
      <KeyboardDatePicker
        value={selectedDate}
        onChange={handleDateChange}
        format="yyyy/MM/dd"
      />
      <p>
        <Button onClick={handleConfirm}>확인하기</Button>
      </p>
    </>
  );
}

export default Quest1;
