import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-60 my-16'>
            <div className='space-y-12'>
            <h2 className='text-center text-5xl '>I Grow By Helping People In Need</h2>
            <div className='flex justify-center'>
            <input className='bg-white-400 border w-72 pl-2 rounded-lg rounded-r-none py-2 text-black' type="text" name="search" id="" />
            <button className='bg-red-500 px-4 py-2 rounded-l-none rounded-lg text-white'>Search</button>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;