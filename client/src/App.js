import { FunctionalSnackContainer } from "./components/SnackContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/snack">Snacks Home</Link>
        <Switch>
          <Route path="/snack">
            <FunctionalSnackContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { App };
