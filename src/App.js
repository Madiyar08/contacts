import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import CreateMarket from "./pages/CreateMarket";
import LoginForm from "./pages/LoginForm";
<<<<<<< HEAD
=======
import Promos from "./pages/Promos";
>>>>>>> c1072c2dce332dbc8b4eb1165fa950ff5e6d144a
import Request from "./components/Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createMarket" element={<CreateMarket />} />
        <Route path="/loginform" element={<LoginForm />} />
<<<<<<< HEAD
        <Route path="/requestpro" element={<Request />} />
=======
        <Route path="/promos" element={<Promos />} />
        <Route path="/requestpro" element={<Request />} />ё
>>>>>>> c1072c2dce332dbc8b4eb1165fa950ff5e6d144a
      </Routes>
    </BrowserRouter>
  );
}

export default App;
