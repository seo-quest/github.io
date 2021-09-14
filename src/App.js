import { Route, Switch, useHistory, useLocation } from "react-router-dom";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import React, { useEffect, useRef, useState } from "react";
import Start from "./component/Start";
import Mission_01 from "./component/Mission_01";
import Question_01 from "./component/Question_01";
import Result_wrong_01 from "./component/Result_wrong_01";
import Mission_02 from "./component/Mission_02";
import Question_02 from "./component/Question_02";
import Result_wrong_02 from "./component/Result_wrong_02";
import Mission_03 from "./component/Mission_03";
import Question_03 from "./component/Question_03";
import Result_wrong_03 from "./component/Result_wrong_03";
import Mission_04 from "./component/Mission_04";
import Mission_05 from "./component/Mission_05";
import Question_04 from "./component/Question_04";
import Result_wrong_04 from "./component/Result_wrong_04";
import Mission_06 from "./component/Mission_06";
import Question_05 from "./component/Question_05";
import Result_wrong_05 from "./component/Result_wrong_05";
import Mission_07 from "./component/Mission_07";
import Question_06 from "./component/Question_06";
import Result_wrong_06 from "./component/Result_wrong_06";
import Mission_08 from "./component/Mission_08";
import Mission_09 from "./component/Mission_09";
import Finish from "./component/Finish";

function App() {
  let location = useLocation();
  const history = useHistory();
  const isFirst = useRef(true);

  useEffect(() => {
    const lastUrl = localStorage.getItem("seoQuest");

    if (isFirst.current && lastUrl) {
      console.dir(isFirst);
      console.dir(lastUrl);
      isFirst.current = false;
      if (
        window.confirm("진행 중인 퀘스트가 있습니다. 이어서 진행하시겠습니까?")
      ) {
        history.push(lastUrl);
      } else {
        localStorage.removeItem("seoQuest");
        history.push("/");
      }
    } else {
      isFirst.current = false;
      if (
        location.pathname.includes("Question") ||
        location.pathname.includes("Mission")
      ) {
        console.dir("save!");
        localStorage.setItem("seoQuest", location.pathname);
      }
    }
  }, [location]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/Mission/01" component={Mission_01} />
          <Route exact path="/Mission/02" component={Mission_02} />
          <Route exact path="/Mission/03" component={Mission_03} />
          <Route exact path="/Mission/04" component={Mission_04} />
          <Route exact path="/Mission/05" component={Mission_05} />
          <Route exact path="/Mission/06" component={Mission_06} />
          <Route exact path="/Mission/07" component={Mission_07} />
          <Route exact path="/Mission/08" component={Mission_08} />
          <Route exact path="/Mission/09" component={Mission_09} />
          <Route exact path="/Finish" component={Finish} />
          <Route exact path="/Question/01" component={Question_01} />
          <Route exact path="/Question/02" component={Question_02} />
          <Route exact path="/Question/03" component={Question_03} />
          <Route exact path="/Question/04" component={Question_04} />
          <Route exact path="/Question/05" component={Question_05} />
          <Route exact path="/Question/06" component={Question_06} />
          <Route exact path="/Result/wrong/01" component={Result_wrong_01} />
          <Route exact path="/Result/wrong/02" component={Result_wrong_02} />
          <Route exact path="/Result/wrong/03" component={Result_wrong_03} />
          <Route exact path="/Result/wrong/04" component={Result_wrong_04} />
          <Route exact path="/Result/wrong/05" component={Result_wrong_05} />
          <Route exact path="/Result/wrong/06" component={Result_wrong_06} />
        </Switch>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
