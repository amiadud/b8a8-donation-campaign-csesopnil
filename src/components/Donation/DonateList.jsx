import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonateData } from '../../utility/localstorage';
import Donate from './Donate';


const DonateList = () => {

    const myDonate = useLoaderData()
    const [dataLength, setDataLength] = useState(4)
    const [noFound, setNoFound] = useState(false)
    const [donateDatas, setDonateDatas] = useState([])
    
    useEffect( () =>{
            const storedDonateIds = getStoredDonateData()
            if(myDonate.length > 0){
                const donateData = myDonate.filter(donate => storedDonateIds.includes(donate.id))
                if(!donateData){
                    setNoFound("Not Found")
                }
                else{
                    setDonateDatas(donateData);
                }    
            }    
    },[myDonate])

    return (
        <>
        
        <div> 
            <div className='grid grid-cols-1 md:grid-cols-2 my-6 gap-3 '>
                {
                    donateDatas.slice(0, dataLength).map( donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
            
        </div>
        <p className=' h-[80] flex justify-center  items-center'>{noFound}</p>
        <div className={ dataLength >= donateDatas.length && 'hidden'}  >
            <div className='text-center m-auto  rounded bg-red-400 w-24'>
            <button 
            onClick={() => setDataLength(donateDatas.length )}
            className=' btn text-center m-auto py-2 text-white font-semibold rounded bg-red-400 w-24'
            >Show All</button>
            </div>
            </div>
        </>
    );
};

export default DonateList;