import {createBrowserRouter} from "react-router-dom";

import Layout from "../layout/Layout";
import FormPage from "../pages/FormPage";
import ValuesPage from "../pages/ValuesPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <FormPage/>,
            },
            {
                path: '/values',
                element: <ValuesPage/>
            }
        ]
    }
]);