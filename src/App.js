import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/add-employee" component={CreateEmployeeComponent} />
            <Route path="/" exact component={ListEmployeeComponent} />
            {/* <Route path="/employees" component={ListEmployeeComponent} /> */}
          </Switch>
        </Router>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
