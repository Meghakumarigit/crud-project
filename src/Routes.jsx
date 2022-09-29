import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" element={<ListEmployeeComponent />} />
        <Route path="add-employee" element={<CreateEmployeeComponent />} />
      </Router>
    </BrowserRouter>
  );
}
