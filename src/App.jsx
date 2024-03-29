import AppLayout from "./AppLayout.jsx";
import {createBrowserRouter, Outlet, RouterProvider,
} from "react-router-dom";
import Coins from "./Coins.jsx";
import Coin from "./Coin.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Coins/>
            },
            {
                path:"/coin/:id",
                element: <Coin/>
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