import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import UserProviader from "./context/UserContext";
import { router } from "./config/Router";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProviader>
            <RouterProvider router={router} />
        </UserProviader>
    </React.StrictMode>
);
