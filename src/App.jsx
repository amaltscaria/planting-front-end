import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import "./App.css";
import Planting from "./components/Planting/Planting";
import Certifcate from "./components/Certificate/Certificate";
import { UserProvider } from "../store/UserContext.jsx";

const App = () => {
  return (
    <UserProvider>
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
    </UserProvider>
  );
};

export default App;
