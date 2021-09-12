import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import Quest1 from "./component/Quest1";
import Start from "./component/Start";

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BrowserRouter>
        <Route exact path="/" component={Start} />
        <Route exact path="/quest1" component={Quest1} />
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
