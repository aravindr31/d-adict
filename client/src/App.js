import "./App.css";
import Dashboard from "./Components/Dashboard";
import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter,
} from "react-router-dom";
import AddSchedule from "./Components/AddSchedule";
import Navbar from "./Components/Navbar";
import EditSchedule from "./Components/EditSchedule/EditSchedule";


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>
          <Route exact path="/">
          <Dashboard />
          </Route>
          <Route path="/addschedule">
            <AddSchedule/>
          </Route>
          <Route path="/editschedule/:id">
            <EditSchedule/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
