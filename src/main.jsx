import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import Show from "./pages/Show.jsx";
import Update from "./pages/Update.jsx";
import Error from "./pages/Error.jsx";
import Loader from "./components/Loader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="load" element={<Loader />} />
          <Route path="create" element={<Add />} />
          <Route path="show/:id" element={<Show />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
