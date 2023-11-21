import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutRoot/>
    }
])
