import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userParam = params.get("user");

    if (userParam) {
      const parsedUser = JSON.parse(decodeURIComponent(userParam));
      // console.log(parsedUser);
      setAuthUser(parsedUser);
      localStorage.setItem("user", JSON.stringify(parsedUser));

      // ✅ Navigate without query params
      navigate("/", { replace: true });
    }
  }, [location.search]);

  return (
    <>
      {/* <Navbar /> */}
      <Banner />
      <Freebook />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
