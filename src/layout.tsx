import React from "react";
import NavBar from "./components/nav"; // Your NavBar component
import Footer from "./components/footer"; // Your Footer component

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <NavBar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
