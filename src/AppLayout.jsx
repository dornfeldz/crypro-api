import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function AppLayout() {
    return (
        <div  className="main-gradient-background text-white h-screen">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default AppLayout;