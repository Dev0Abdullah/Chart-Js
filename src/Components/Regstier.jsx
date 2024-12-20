import React, { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify styles

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rank: "",
    id: "",
    jop:"",
    department:"",
    file: null, // لتخزين الملف
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // اختيار أول ملف فقط
    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // تحقق من الحقول
    if (!formData.firstName || !formData.lastName || !formData.rank || !formData.id || !formData.jop||!formData.department) {
      toast.error("من فضلك، أكمل جميع الحقول المطلوبة.");
      return;
    }else{
        setTimeout(()=>{
            toast.success("تم إرسال البيانات بنجاح!");
        },50)
    }

    // حفظ البيانات في localStorage
    const { file, ...dataWithoutFile } = formData; // استثناء الملف من البيانات
    localStorage.setItem("formData", JSON.stringify(dataWithoutFile));

    // إرسال الملف إذا لزم الأمر (مثلاً باستخدام FormData)
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      // افترض أن لديك API لتحميل الملفات
      // fetch('/upload', {
      //   method: 'POST',
      //   body: formData,
      // });
    }

    // عرض رسالة نجاح


    // الانتقال إلى صفحة النتائج
    navigate("/results");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center font-sans bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-10">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <h1 className="text-center text-2xl font-bold text-gray-700 mb-4">
            بيانات الموظف
          </h1>

          <div className="flex flex-col gap-2">
            <label htmlFor="employeeId" className="text-gray-600 font-medium">
              معرّف الموظف
            </label>
            <input
              id="employeeId"
              type="text"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              placeholder="أدخل معرّف الموظف"
              onChange={handleChange}
              name="id"
              value={formData.id}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-gray-600 font-medium">
              الاسم الأول
            </label>
            <input
              id="firstName"
              type="text"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              placeholder="أدخل الاسم الأول"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-gray-600 font-medium">
              الاسم الثاني
            </label>
            <input
              id="lastName"
              type="text"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              placeholder="أدخل الاسم الثاني"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-gray-600 font-medium">
              الوظيفه
            </label>
            <input
              id="lastName"
              type="text"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              placeholder="أدخل الوظيفة"
              onChange={handleChange}
              name="jop"
              value={formData.jop}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-gray-600 font-medium">
              القسم
            </label>
            <input
              id="lastName"
              type="text"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              placeholder="أدخل القسم"
              onChange={handleChange}
              name="department"
              value={formData.department}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="evaluationPeriod" className="text-gray-600 font-medium">
              فترة التقييم
            </label>
            <input
              id="evaluationPeriod"
              type="date"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              onChange={handleChange}
              name="rank"
              value={formData.rank}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="fileUpload" className="text-gray-600 font-medium">
              رفع ملفات
            </label>
            <input
              id="fileUpload"
              type="file"
              className="border border-gray-300 focus:ring focus:ring-blue-400 focus:outline-none rounded-md p-2"
              onChange={handleFileChange}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-200"
          >
            بحث
          </button>
        </form>
      </div>

      {/* Toast Container for displaying messages */}
      <ToastContainer />
    </div>
  );
}

export default Register;
