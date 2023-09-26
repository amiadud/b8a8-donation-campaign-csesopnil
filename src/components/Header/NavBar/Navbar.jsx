import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between flex-col md:flex-row items-center my-4'>
            <div>
               <Link to="/"> <img  src="\src\assets\img\Logo.png" alt="" /></Link>
            </div>
            <div className='space-x-1  text-2xl my-3 '>
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Home</NavLink>
                <NavLink to="/donatelist" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Donation</NavLink>
                <NavLink to="/statistic" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>Statistic</NavLink>
            </div>
            </div>
        </div>
    );
};

export default Navbar;