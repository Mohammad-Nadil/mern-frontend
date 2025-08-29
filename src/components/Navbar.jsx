import React from "react";
import Container from "./Container";
import { Link } from "react-router";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <div
      className=" w-full
     bg-base-300"
    >
      <Container>
        <div className="navbar  shadow-lg rounded-lg">
          <div className="flex-1">
            <Link to="/" className="font-extrabold text-xl text-primary ">
              NOTES
            </Link>
          </div>
          <div className="flex">
            <Link to="/create" className="btn btn-primary btn-sm">
              Create Note
            </Link>
            {/* <ThemeController /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
