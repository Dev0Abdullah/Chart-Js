import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart,CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend } from 'chart.js'

Chart.register(
    CategoryScale,LinearScale,PointElement,BarElement,Title,Tooltip,Legend
)

const QuntitveTow = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // جلب ملف JSON
        fetch('/QuntitvTow.json') // المسار إلى الملف
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
            <h1 className='font-bold text-lg'>المؤشرات النوعيه</h1>
            <Bar data={chartData} options={{ responsive: true }} />
        </div>
    );
};

export default QuntitveTow;
