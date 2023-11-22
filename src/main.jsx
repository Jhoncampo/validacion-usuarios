import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProviader from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProviader>
            <RouterProvider router={router} />
        </UserProviader>
    </React.StrictMode>
);
