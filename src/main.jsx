import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';

// import "./css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
