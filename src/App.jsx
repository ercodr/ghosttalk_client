import Contact from "./pages/Contact";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SendTalk from "./pages/SendTalk";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import { useEffect, useState } from "react";
import { RequireAuth } from "react-auth-kit";

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  navigator.setAppBadge(5)

  useEffect(() => {

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered: ', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed: ', error);
          });
      });
    }
    
    const handleBeforeInstallPrompt = (event) => {
      // Prevent the default installation prompt
      event.preventDefault();
      // Store the event for later use
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      alert("Please wait as your app is being installed...");
      // Show the installation prompt
      deferredPrompt.prompt();
      // Wait for the user's choice
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the installation prompt');
        } else {
          console.log('User dismissed the installation prompt');
        }
        // Reset the deferred prompt state
        setDeferredPrompt(null);
      });
    } else {
      alert("Installation prompt not available\nTry again using Google Chrome");
    }
  };

  return (
    <div>
      <Navbar installHandler={handleInstallClick}/>
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
