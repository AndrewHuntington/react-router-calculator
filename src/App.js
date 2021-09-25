import { Switch, Route, Redirect } from "react-router-dom";
import Calculator from "./Calculator";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Router Calculator</h1>

      <Switch>
        <Route
          exact
          path="/:operator/:leftNum/:rightNum"
          render={(routeProps) => <Calculator {...routeProps} />}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
