import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/home";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
