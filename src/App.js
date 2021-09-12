import { Route, HashRouter } from "react-router-dom";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Quest1 from "./component/Quest1";
import Start from "./component/Start";
import Mission_01 from "./component/Mission_01";
import Question_01 from "./component/Question_01";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <HashRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/Mission/01" component={Mission_01} />
        <Route exact path="/Question/01" component={Question_01} />
        <Route exact path="/quest1" component={Quest1} />
      </HashRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
