import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Quest1 from "./component/Quest1";
import Start from "./component/Start";
import Mission_01 from "./component/Mission_01";
import Question_01 from "./component/Question_01";
import React from "react";
import Result_wrong_01 from "./component/Result_wrong_01";
import Mission_02 from "./component/Mission_02";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="container">
        <HashRouter>
          <Route exact path="/" component={Start} />
          <Route exact path="/Mission/01" component={Mission_01} />
          <Route exact path="/Mission/02" component={Mission_02} />
          <Route exact path="/Question/01" component={Question_01} />
          <Route exact path="/Result/wrong/01" component={Result_wrong_01} />
          <Route exact path="/quest1" component={Quest1} />
        </HashRouter>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
