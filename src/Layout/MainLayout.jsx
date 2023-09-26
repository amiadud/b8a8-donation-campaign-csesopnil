import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/NavBar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-8/12 m-auto px-7 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;