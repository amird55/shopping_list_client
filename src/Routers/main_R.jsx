import React from "react";
import {createBrowserRouter} from "react-router";

import Homepage from "../_Features/Homepage/Homepage.jsx";
import Page2 from "../_Features/Page2/Page2.jsx";
import AppLayout from "../LayOut/AppLayout.jsx";
import CategList from "../_Features/Categories/CategList.jsx";

const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
            {path:"/",      element:<Homepage />,     },
            {path:"/p2",    element:<Page2 hdr="p2" line="L2" />,   },
            {path:"/p3",    element:<Page2 hdr="p3" line="L3" />,   },
            {path:"/cat",    element:<CategList />,   },
        ]
    },
]);

export default router;
