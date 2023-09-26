import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { saveDonateData } from '../../utility/localstorage';

const CardDetails = () => {
    const mycarddetails = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
    const card = mycarddetails.find(cardDetail => cardDetail.id === idInt)

    const handleDonate = () => {
            saveDonateData(idInt);
            toast.success("Successfully Added!");
    }

    const {Picture, BigPicture,Title,Description, Price, Button_bg, Text_bg
    } = card

    return (
        <div>
            <div className='relative '>
            <div className='relative '>
            <img src={BigPicture} alt="" />
            <div className='bg-gray-400 w-full opacity-60 h-[20%] absolute bottom-0 '></div>
            </div>
            
            <div>  
            <button onClick={()=> handleDonate(idInt)} className='absolute bottom-5 md:bottom-8 left-2 md:left-6 bg py-1 md:py-3 px-2 md:px-4 rounded-md text-white text-sm md:text-md' style={{background: Text_bg}}>Donate: ${Price}</button>
            </div>
            </div>
            <div>
            
            <h2 className='text-5xl font-semibold my-5'>{Title}</h2>
            <p>{Description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CardDetails;