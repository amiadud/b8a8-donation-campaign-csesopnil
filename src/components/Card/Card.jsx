import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = ({card}) => {

    const {id,Title,Picture, Category,Card_bg,Category_bg, Text_bg} = card

 
    return (
        <>
        <Link to={`/carddetails/${id}`}>
        <div  style={{background: Card_bg, color:Text_bg }} className='py-4 px-5 space-y-2 rounded-lg cursor-pointer'>
            <img src={Picture} alt="" />
            <h3><span className='rounded-sm px-2 py-1' style={{color: Text_bg, background:Category_bg}}>{Category}</span></h3>
            <h2 className='font-semibold'  style={{color: Text_bg}}>{Title}</h2>
            <ToastContainer />
        </div>
        </Link>
        </>
    );
};

export default Card;