import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage.jsx";
import "./App.css";
import Planting from "./components/planting/Planting.jsx";
import Certifcate from "./components/certificate/Certificate.jsx";
import { UserProvider } from "../store/UserContext.jsx";
import { TreesProvider } from "../store/TreeContext";

const App = () => {
  return (
    <UserProvider>
      <TreesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage></LoginPage>}></Route>
            <Route path="/plant-trees" element={<Planting></Planting>}></Route>
            <Route
              path="/certificate"
              element={<Certifcate></Certifcate>}
            ></Route>
          </Routes>
        </Router>
      </TreesProvider>
    </UserProvider>
  );
};

export default App;
