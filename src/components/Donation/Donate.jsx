import React from 'react';
import { Link } from 'react-router-dom';

const Donate = ({id, donate}) => {

    const {Title, Picture,Category,Category_bg, Text_bg, Price} = donate;
    console.log(donate);

    return (
        <div>
        <div className='flex flex-col md:flex-row gap-5  h-[100%] bg-slate-500 items-center rounded-md' style={ {background:Category_bg }}>
            <div>
                <img src={Picture} alt="" />
            </div>
            <div >
                <div >
                <h3><span className='rounded-sm px-2 py-1' style={{color: Text_bg, background:Category_bg}}>{Category}</span></h3>
                <h2 className='text-xl font-bold'>{Title}</h2>
                <p className='mb-4 text-lg font-semibold' style={{color: Text_bg}}>${Price}</p>
                <Link className='text-white py-2 text-sm px-2 md:px-2 lg:px-4 rounded font-semibold ' style={{background:Text_bg}} to={`/carddetails/${donate.id}`}>View Details</Link>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Donate;