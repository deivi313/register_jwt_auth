import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useState, useEffect } from "react";
import Game from "./pages/Game";

function App() {
  const [name, setName] = useState("");

  const fetchUser = async () => {
    const response = await fetch("http://localhost:8000/api/user", {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    const content = await response.json();

    if (response.ok) {
      setName(content.name);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar name={name} setName={setName} />
        <Routes>
          <Route path="/" element={<Home name={name} />} />
          <Route path="/login" element={<Login setName={setName} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
