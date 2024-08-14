import "./App.css";
import { Routes, Route } from "react-router-dom";
import Single from "./Pages/Single-route/Single";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Admin from "./Pages/Admin/Admin";
import Not from "./Pages/Not_Found/Not";
import Auth from "./Pages/Auth/Auth";
import Login from "./Pages/Login/Login";
import Create from "./Pages/Admin/Create/Create";
import Manage from "./Pages/Admin/Manage/Manage";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />}>
            <Route path="create" element={<Create />} />
            <Route path="manage" element={<Manage />} />
          </Route>
        </Route>
        <Route path="*" element={<Not />} />
      </Routes>
    </>
  );
}

export default App;
