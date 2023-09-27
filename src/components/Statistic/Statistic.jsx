import { PieChart, Pie, Cell, } from 'recharts';
import { getStoredDonateData } from '../../utility/localstorage';

const Statistic = () => {

    const getdata = getStoredDonateData()
    const data = [
        { name: 'Group A', value: getdata.length },
        { name: 'Group B', value: 12 }
      ];
      
      const COLORS = ['#0088FE', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };


    return (
        <div className='my-20 ' >
           <div className='flex justify-center' >
           <PieChart width={300} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
           </div>
           <div className='flex justify-center gap-5 mt-2'>
            <h2 className='bg-[#0088FE] text-white py-2 px-4 rounded-md'>Your Donation</h2>
            <h2 className='bg-[#00C49F] text-white py-2 px-4 rounded-md'>Total Donation</h2>
           </div>
        </div>
    );
};

export default Statistic;