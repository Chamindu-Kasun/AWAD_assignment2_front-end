import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <Router>
        <div className="d-flex justify-content-center my-5">
          <h6>Assignment 2</h6>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/editUser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
