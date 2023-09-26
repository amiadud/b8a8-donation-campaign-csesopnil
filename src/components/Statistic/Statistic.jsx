import { useLoaderData } from 'react-router-dom';
import { getStoredDonateData } from '../../utility/localstorage';
import { useEffect, useState } from 'react';
import { Line, LineChart, Pie, PieChart, ResponsiveContainer } from 'recharts';
const Statistic = () => {

    const [donateDatas, setDonateDatas] = useState([])
    const mydata = useLoaderData()

    const originalLength = mydata.length

    useEffect( () =>{
        const storedDonateIds = getStoredDonateData()
        const donateData = mydata.filter(donate => storedDonateIds.includes(donate.id))
        setDonateDatas(donateData.length)
},[])

    return (
        <div>
            <h2>{originalLength}</h2>
            <h2>{donateDatas}</h2>
            <LineChart width={300} height={100} data={mydata[0]}>
                <Line type="monotone" dataKey="originalLength" stroke="#8884d8" strokeWidth={2} ></Line>
            </LineChart>

        </div>
    );
};

export default Statistic;