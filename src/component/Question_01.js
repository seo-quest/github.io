import React, { useState } from "react";
import { Button, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Question_01() {
  const history = useHistory();
  const [value, setValue] = React.useState("");

  const handleConfirm = () => {
    console.dir(value);
    if (value === "회사") {
      alert("정답입니다");
    } else {
      alert("오답입니다.");
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div>우리가 처음 만난곳은 어디일까요.</div>
      <RadioGroup
        aria-label="처음 만난곳은 어디일까요?"
        name="firstMetting"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="수원" control={<Radio />} label="수원" />
        <FormControlLabel value="회사" control={<Radio />} label="회사" />
        <FormControlLabel value="모름" control={<Radio />} label="모름" />
      </RadioGroup>
      <p>
        <Button onClick={handleConfirm}>정답 제출하기</Button>
      </p>
    </>
  );
}

export default Question_01;
