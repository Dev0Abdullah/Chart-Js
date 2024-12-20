import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2'
import { Chart,Tooltip,Legend,ArcElement } from 'chart.js'

// تسجيل العناصر المطلوبة في Chart.js
Chart.register(Tooltip,Legend,ArcElement);

const Performance = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        // جلب بيانات JSON
        fetch('/Performance.json') // تأكد من أن الملف موجود في المسار الصحيح
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
        <div className="max-w-[20rem] mt-28">
            <h1 className="font-bold text-lg">أداء الموظف</h1>
            <Pie data={chartData} options={{ responsive: true }} />
        </div>
    );
};

export default Performance;
