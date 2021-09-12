import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "@material-ui/pickers";

function Quest1() {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <>
      <div>
        <button>이전 단계로</button>
      </div>
      <DatePicker value={selectedDate} onChange={handleDateChange} />

      <div>날짜를 고르시오.</div>
    </>
  );
}

export default Quest1;
