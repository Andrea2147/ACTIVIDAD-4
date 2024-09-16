import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";

import "./styles/global.scss";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Home />
    </StrictMode>
);
