"use client"
import React, { useState } from 'react';

const monney = () => {
  // Sử dụng useState để quản lý trạng thái hiển thị menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 py-3">
          <div className="flex items-center flex-wrap gap-3">
            <img src="/image/log.png" alt="Logo" className="h-8"/>
            <h1 className="text-xl font-bold text-center sm:text-left">HONG BANG INTERNATIONAL UNIVERSITY</h1>
          </div>
          <div className="flex items-center mt-3 sm:mt-0 gap-4">
            <input type="text" placeholder="Tìm kiếm..." className="border rounded-lg px-4 py-2 text-sm w-full sm:w-auto"/>
            <div className="relative">
              <img src="/image/ava.jpg" alt="Avatar" className="h-10 w-10 rounded-full border-2 border-gray-300 p-1"/>
            </div>
            <div className="relative">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              {/* Thêm className để toggle ẩn/hiện menu */}
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10 ${isMenuOpen ? '' : 'hidden'}`}>
                <a href="student.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Trang học sinh</a>
                <a href="study.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tiến trình</a>
                <a href="monney.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Phí học</a>
                <a href="info.html" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Thông tin</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8 mt-3">
    <h1 className="text-center text-lg font-bold uppercase mb-6">Phiếu xác nhận đã đóng học phí</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-6">
      <div>
        <p><span className="font-semibold">Mã sinh viên:</span> 2213060029</p>
        <p><span className="font-semibold">Hệ đào tạo:</span> Đại học</p>
        <p><span className="font-semibold">Mã hóa đơn:</span> 5415</p>
      </div>
      <div>
        <p><span className="font-semibold">Họ tên:</span> Lê Huỳnh Quốc Huy</p>
        <p><span className="font-semibold">Khoa:</span> Khoa Y</p>
        <p><span className="font-semibold">Lớp học:</span> MD22DH-MD1</p>
      </div>
    </div>

    <div className="text-right text-sm mb-6">
      <p><span className="font-semibold">Số phiếu:</span> 86795</p>
      <p><span className="font-semibold">Ngày in phiếu:</span> 11/01/2024</p>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full border border-collapse text-sm">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Mã</th>
            <th className="border px-4 py-2">Nội dung thu</th>
            <th className="border px-4 py-2">Học kỳ</th>
            <th className="border px-4 py-2">Số tiền (VND)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2 text-center">1</td>
            <td className="border px-4 py-2">231210231003</td>
            <td className="border px-4 py-2">TH - Giáo dục quốc phòng - An ninh</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">1,920,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">2</td>
            <td className="border px-4 py-2">232210560805</td>
            <td className="border px-4 py-2">Triết học Mác – Lê nin</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">2,280,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">3</td>
            <td className="border px-4 py-2">23221MD103002</td>
            <td className="border px-4 py-2">Phương pháp nghiên cứu khoa học sức khỏe</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">20,856,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">4</td>
            <td className="border px-4 py-2">23221MD103707</td>
            <td className="border px-4 py-2">Tâm lý y học - Đạo đức y học</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">14,502,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">5</td>
            <td className="border px-4 py-2">23221MD227001</td>
            <td className="border px-4 py-2">Điều dưỡng cơ bản</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">14,502,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">6</td>
            <td className="border px-4 py-2">23221MD228901</td>
            <td className="border px-4 py-2">Ký sinh trùng</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">14,502,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">7</td>
            <td className="border px-4 py-2">23221MD229201</td>
            <td className="border px-4 py-2">Sinh lý bệnh - Miễn dịch</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">20,856,000</td>
          </tr>
          <tr>
            <td className="border px-4 py-2 text-center">8</td>
            <td className="border px-4 py-2">23221MD324201</td>
            <td className="border px-4 py-2">Tiền lâm sàng I</td>
            <td className="border px-4 py-2 text-center">2023 - 2024</td>
            <td className="border px-4 py-2 text-right">20,856,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
 </>
  );
};

export default monney;
