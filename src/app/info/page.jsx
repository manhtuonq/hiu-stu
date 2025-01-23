"use client"
import React, { useState } from 'react';

const Info = () => {
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
                <a href="/student" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Trang học sinh</a>
                <a href="/study" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tiến trình</a>
                <a href="/monney" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Phí học</a>
                <a href="/info" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Thông tin</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-3">
    <div className="p-6 border-b border-gray-200 flex items-center">
      <div className="flex-shrink-0">
        <img src="/image/ava.jpg" alt="Profile" className="w-24 h-24 rounded-full object-cover"/>
      </div>
      <div className="ml-6">
        <h1 className="text-2xl font-bold text-gray-900">Thông tin học vấn</h1>
        <p className="text-gray-600 mt-2">MSSV: <span className="font-semibold">2213060079</span></p>
        <p className="text-gray-600">Họ tên: <span className="font-semibold">Phan Trọng Ân</span></p>
        <p className="text-gray-600">Giới tính: <span className="font-semibold">Nam</span></p>
      </div>
    </div>      

    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Thông tin học vấn</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p>Trạng thái: <span className="font-medium text-gray-700">Đang tích lũy tín chỉ</span></p>
          <p>Mã hồ sơ: <span className="font-medium text-gray-700">HIU220501056</span></p>
          <p>Ngày vào trường: <span className="font-medium text-gray-700">21/9/2022</span></p>
          <p>Lớp học: <span className="font-medium text-gray-700">MD22DH-MD1</span></p>
          <p>Bậc đào tạo: <span className="font-medium text-gray-700">Đại học</span></p>
        </div>
        <div className="space-y-2">
          <p>Khoa: <span className="font-medium text-gray-700">Khoa Y</span></p>
          <p>Chương trình đào tạo: <span className="font-medium text-gray-700">Y khoa</span></p>
          <p>Cơ sở: <span className="font-medium text-gray-700">Cơ sở chính</span></p>
          <p>Ngành: <span className="font-medium text-gray-700">Y khoa</span></p>
          <p>Khóa học: <span className="font-medium text-gray-700">DHCQK2022</span></p>
        </div>
      </div>
    </div>

    <div className="p-6 border-t border-gray-200">
      <div className="flex space-x-6 text-gray-500">
        <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1">Thông tin cá nhân</a>
        <a href="#" className="hover:text-gray-800">Hồ sơ</a>
        <a href="#" className="hover:text-gray-800">Quyết định</a>
      </div>
    </div>

    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <p>Ngày sinh: <span className="font-medium text-gray-700">04/05/2004</span></p>
          <p>Số CMND: <span className="font-medium text-gray-700">072204000816</span></p>
          <p>Điện thoại: <span className="font-medium text-gray-700">0819921052</span></p>
          <p>Email: <span className="font-medium text-gray-700">anpt2260079@student.hiu.vn</span></p>
        </div>
        <div className="space-y-2">
          <p>Dân tộc: <span className="font-medium text-gray-700">Kinh</span></p>
          <p>Tôn giáo: <span className="font-medium text-gray-700">Không</span></p>
          <p>Nơi cấp: <span className="font-medium text-gray-700">Tỉnh Tây Ninh</span></p>
          <p>Mã thẻ BHYT: <span className="font-medium text-gray-700">7222400725</span></p>
        </div>
      </div>
    </div>

    <div className="p-6 border-t border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Địa chỉ và thông tin liên hệ</h2>
      <div className="space-y-2 text-gray-700">
        <p>Địa chỉ liên hệ: <span className="font-medium">18 đường 30/4, KP 5, Phường 4, Thị xã Tây Ninh, Tây Ninh</span></p>
        <p>Hộ khẩu thường trú: <span className="font-medium">18 đường 30/4, KP 5, Phường 4, Thành phố Tây Ninh, Tây Ninh</span></p>
        <p>Thời hạn BHYT: <span className="font-medium">01/01/2025 - 31/12/2025</span></p>
      </div>
    </div>
  </div>
 </>
  );
};

export default Info;
