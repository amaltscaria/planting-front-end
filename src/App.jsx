import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";
import "./App.css";
import Planting from "./components/planting/Planting";
import { UserProvider } from "../store/UserContext.jsx";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>}></Route>
          <Route path="/plant-trees" element={<Planting></Planting>}></Route>
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
