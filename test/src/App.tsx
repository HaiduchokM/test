import React from 'react';
import {RouterProvider} from "react-router-dom";

import ValuesContextProvider from "./store/ValuesContext";
import {router} from "./router/router";

function App() {
    return (
        <div>
            <ValuesContextProvider>
                <RouterProvider router={router}/>
            </ValuesContextProvider>
        </div>
    );
}

export default App;
