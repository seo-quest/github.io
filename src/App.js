import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import React from "react";
import Start from "./component/Start";
import Mission_01 from "./component/Mission_01";
import Question_01 from "./component/Question_01";
import Result_wrong_01 from "./component/Result_wrong_01";
import Mission_02 from "./component/Mission_02";
import Question_02 from "./component/Question_02";
import Result_wrong_02 from "./component/Result_wrong_02";
import Mission_03 from "./component/Mission_03";
import Question_03 from "./component/Question_03";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="container">
        <HashRouter>
          <Route exact path="/" component={Start} />
          <Route exact path="/Mission/01" component={Mission_01} />
          <Route exact path="/Mission/02" component={Mission_02} />
          <Route exact path="/Mission/03" component={Mission_03} />
          <Route exact path="/Question/01" component={Question_01} />
          <Route exact path="/Question/02" component={Question_02} />
          <Route exact path="/Question/03" component={Question_03} />
          <Route exact path="/Result/wrong/01" component={Result_wrong_01} />
          <Route exact path="/Result/wrong/02" component={Result_wrong_02} />
        </HashRouter>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
