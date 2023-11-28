import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


import "./index.css";
import { RouterProvider } from "react-router-dom";
import UserProviader from "./context/UserContext";
import { router } from "./config/Router";

import {CssBaseline} from "@mui/material"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CssBaseline/>
        <UserProviader>
            <RouterProvider router={router} />
        </UserProviader>
    </React.StrictMode>
);
