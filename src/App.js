import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Meals from "./pages/meals/Meals";
import PageNotFound from "./pages/404/PageNotFound";
import Footer from "./pages/footer/Footer";
import LoginPage from "./pages/login/LoginPage";
import { useEffect, useState } from "react";
import { auth } from "./pages/login/FirebaseConfig";
import SignUpPage from "./pages/login/SignUpPage";

function RedirectPage(props) {
  const { url } = props;
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${url}`);
  }, [navigate, url]);

  return null;
}

function App() {
  // <---- Login condition ---->

  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setLoading(false);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, [userName]);

  if (loading) return null;

  return (
    <BrowserRouter>
      {userName ? (
        <>
          <NavBar userName={userName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/meals/:name" element={<Meals />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={<SignUpPage setUserName={setUserName} />}
            />
            <Route path="*" element={<RedirectPage url="/" />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
