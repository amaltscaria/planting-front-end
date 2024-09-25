import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/login/LoginPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
