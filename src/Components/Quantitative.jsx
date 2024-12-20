import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart,CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend } from 'chart.js'

Chart.register(
    CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend
)

const Quantitative = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // جلب ملف JSON
        fetch('/Quantitative.json') // المسار إلى الملف
            .then((response) => response.json())
            .then((data) => {
                console.log('Loaded chart data:', data);
                setChartData(data);
            })
            .catch((error) => console.error('Error loading chart data:', error));
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='max-w-[100rem] mt-28'>
            <h1 className='font-bold text-lg'>تقيم الموظف</h1>
            <Bar data={chartData} options={{ responsive: true }} />
        </div>
    );
};

export default Quantitative;
