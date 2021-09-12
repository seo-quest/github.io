import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Quest1 from "./component/Quest1";
import Start from "./component/Start";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Start} />
      <Route exact path="/quest1" component={Quest1} />
    </BrowserRouter>
  );
}

export default App;
