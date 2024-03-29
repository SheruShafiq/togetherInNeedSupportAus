import "./index.css";

import App from "./src/App.tsx";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
