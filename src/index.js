import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css"
import "./CSS/Buypage.css";
import "./CSS/ProductDiv.css";
import "./CSS/Signin.css"
import "./CSS/Signup.css"
import "./CSS/Address.css"
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";
import { ErrorBoundary } from "react-error-boundary";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<div>Something went wrong</div>} >
      <AuthProvider
        authType={"cookie"}
        authName={"_auth"}
        cookieDomain={window.location.hostname}
        cookieSecure={false}
      >
        <BrowserRouter>
          <AuthContextProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
          </AuthContextProvider>
        </BrowserRouter>

      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
