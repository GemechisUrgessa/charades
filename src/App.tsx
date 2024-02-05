import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import SimpleLayout from "./simpleLayout";
import HomePage from "./pages/mainpage";
import AboutPage from "./pages/about";
import Rules from "./pages/rules";
import Contact from "./pages/contact";
import Play from "./pages/play";
// import gif from "./assets/play.gif";

function App() {
  const [screen, setScreen] = React.useState(window.innerWidth);
  const [screenOrinetation, setScreenOrientation] = React.useState(
    window.screen.orientation.type
  );
  const [isLandscape, setIsLandscape] = React.useState(false);
  const [notMobile, setNotMobile] = React.useState(false);
  const [currentpage, setCurrentPage] = React.useState("home");
  useEffect(() => {
    if (window.location.pathname === "/play") {
      setCurrentPage("play");
    }
    if (screen >= 668 && screenOrinetation === "portrait-primary") {
      setNotMobile(true);
    } else if (
      screen >= 668 &&
      screenOrinetation === "landscape-primary" &&
      currentpage != "play"
    ) {
      setNotMobile(true);
      setIsLandscape(true);
    } else {
      setNotMobile(false);
    }
    const handleResize = () => {
      setScreen(window.innerWidth);
      setScreenOrientation(window.screen.orientation.type);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screen, notMobile, screenOrinetation, currentpage, isLandscape]);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/rules"
            element={
              <Layout>
                <Rules />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/play"
            element={
              <SimpleLayout>
                <Play />
              </SimpleLayout>
            }
          />
          {/* Add more routes with Layout as needed */}
          <Route
            path="*"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Routes>
      </Router>
      {/* )} */}
    </>
  );
}

export default App;
