import AppLayout from "./AppLayout.jsx";
import {createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import Coins from "./Coins.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Coins/>
            }
        ]
    }
])
function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;