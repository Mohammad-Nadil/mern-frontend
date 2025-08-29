import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      data-theme="forest"
      className="h-screen flex flex-col bg-secondary/5 gap-y-5"
    >
      <Toaster />
      <Navbar />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
