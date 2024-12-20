import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css"
import Quantitative from "./Quantitative";
import QuntitveTow from "./QuntitveTow";
import Performance from "./Performnce";
import Exceeds from "./Exceeds";
function ResultsPage() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // جلب البيانات من Local Storage
    const storedData = JSON.parse(localStorage.getItem("formData"));
    setFormData(storedData);
    toast.success("تم تسجيل الدخول بنجاح!");
  }, []);

  if (!formData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-5">النتيجة</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">البيان</th>
              <th scope="col" className="px-6 py-3">القيمة</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">الاسم الأول</td>
              <td className="px-6 py-4">{formData.firstName}</td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="px-6 py-4 font-medium text-gray-900">الاسم الثاني</td>
              <td className="px-6 py-4">{formData.lastName}</td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="px-6 py-4 font-medium text-gray-900">الوظيفة</td>
              <td className="px-6 py-4">{formData.jop}</td>
            </tr>
            <tr className="bg-gray-50 border-b hover:bg-gray-100">
              <td className="px-6 py-4 font-medium text-gray-900">القسم</td>
              <td className="px-6 py-4">{formData.department}</td>
            </tr>
            <tr className="bg-white hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">التقييم</td>
              <td className="px-6 py-4">{formData.rank}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Quantitative/>
      <QuntitveTow/>
      <div className="flex justify-around items-center flex-wrap">
      <Performance/>
      <Exceeds/>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ResultsPage;
