import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layouts/home";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Status from "./layouts/home/status";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
  <Provider store={store}>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/status" element={<Status />} />
    </Routes>
    </Provider>
  </BrowserRouter>
);
