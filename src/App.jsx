import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SendTalk from "./pages/SendTalk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { useState } from "react";
import { RequireAuth } from "react-auth-kit";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="login/" element={<Login />} />
        <Route path="register/" element={<Register />} />
        <Route path="contact/" element={<Contact />} />
        <Route path=":username/" element={<SendTalk />} />
        <Route
          path="/profile/:profile_user/"
          element={
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
