import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function AppLayout() {
    return (
        <div  className="h-screen">
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default AppLayout;