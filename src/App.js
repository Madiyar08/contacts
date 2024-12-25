import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import CreateMarket from "./pages/CreateMarket";
import LoginForm from "./pages/LoginForm";
import Promos from "./pages/Promos";
import Request from "./components/Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createMarket" element={<CreateMarket />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/requestpro" element={<Request />} />
        <Route path="/promos" element={<Promos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;