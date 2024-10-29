import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import CreateMarket from "./pages/CreateMarket";
import LoginForm from "./pages/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createMarket" element={<CreateMarket />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
