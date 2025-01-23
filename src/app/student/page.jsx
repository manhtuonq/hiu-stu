"use client"
import React, { useState } from 'react';

const StudentPage = () => {
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
      
<div className ="container mx-auto mt-6 flex flex-wrap gap-6 px-4">
        <aside className ="w-full md:w-1/4 bg-white rounded-lg shadow p-4">
        <div className ="text-center">
            <div className ="relative">
            <img src="/image/ava.jpg" alt="Avatar" className ="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"/>
            </div>
            <button className ="bg-blue-600 text-white px-4 py-2 rounded-lg w-full md:w-auto">Xem chi tiết</button>
        </div>
        </aside>
  
    <main className ="flex-1 bg-white rounded-lg shadow p-6 w-full md:w-3/4">
      <h2 className ="text-2xl font-bold mb-6 text-center md:text-left">Hồ sơ sinh viên</h2>
      <div className ="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className ="border rounded-lg p-4">
          <h3 className ="font-semibold text-lg mb-2">Thông tin xét tuyển</h3>
          <p>Đợt xét tuyển: Đại học chính quy đợt 1 năm 2022_Bổ</p>
          <p>Ngày xét tuyển: 15/09/2022</p>
          <p>Ngày nhập học: 21/09/2022</p>
          <p>Mã hồ sơ: HIU220501056</p>
          <p>Điểm xét tuyển:</p>
        </div>
        <div className ="border rounded-lg p-4">
          <h3 className ="font-semibold text-lg mb-2">Thông tin sinh viên</h3>
          <p>Mã sinh viên: 2213060079</p>
          <p>Họ và tên: Phan Trọng Ân</p>
          <p>Giới tính: Nam</p>
          <p>Ngày sinh: 04/05/2004</p>
          <p>Nơi sinh: Thành phố Hồ Chí Minh</p>
          <p>Trạng thái: Đang tích lũy tín chỉ</p>
          <p>Khóa học: ĐHCQK2022</p>
          <p>Lớp học: MD22DH-MD1</p>
          <p>Bậc học: Đại học</p>
          <p>Ngành học: Y khoa</p>
        </div>
      </div>
  
      <div className ="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className ="border rounded-lg p-4">
          <h3 className ="font-semibold text-lg mb-2">Công nợ sinh viên</h3>
          <p>Số tiền đã nộp: 550.414.000</p>
          <p>Công nợ hiện tại: 0</p>
        </div>
        <div className ="border rounded-lg p-4">
          <h3 className ="font-semibold text-lg mb-2">Ký túc xá</h3>
          <p>Không có thông tin ký túc xá</p>
        </div>
        <div className ="border rounded-lg p-4">
          <h3 className ="font-semibold text-lg mb-2">Chuẩn đầu ra</h3>
          <p>Giáo dục quốc phòng: Hoàn tất</p>
          <p>Giáo dục thể chất: Hoàn tất</p>
        </div>
        <div className ="border rounded-lg p-4 bg-red-100">
          <h3 className ="font-semibold text-lg text-red-600 mb-2">Thông báo nhắc nhở</h3>
          <p>Không tìm thấy thông tin nhắc nhở</p>
        </div>
      </div>
  
      <div className ="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className ="border rounded-lg p-4 bg-blue-100 text-center">
          <h4 className ="text-blue-800 font-bold text-3xl">4</h4>
          <p>Lịch học trong tuần</p>
        </div>
        <div className ="border rounded-lg p-4 bg-green-100 text-center">
          <h4 className ="text-green-800 font-bold text-3xl">0</h4>
          <p>Lịch thi trong tuần</p>
        </div>
        <div className ="border rounded-lg p-4 bg-red-100 text-center">
          <h4 className ="text-red-800 font-bold text-3xl">0</h4>
          <p>Thông báo nhắc nhở</p>
        </div>
      </div>
    </main>
  </div>
  
  <div className ="container mx-auto mt-6 px-4">
    <div className ="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_01.png" alt="Thông tin sinh viên" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Thông tin sinh viên</p>
      </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_02.png" alt="Nhắc nhở" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Nhắc nhở</p>
      </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_03.png" alt="Chương trình khung" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Chương trình khung</p>
      </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_04.png" alt="Đăng ký học phần" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Đăng ký học phần</p>
      </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_05.png" alt="Lịch theo tuần" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Lịch theo tuần</p>
      </div>
        <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
            <img src="/image/ima_06.png" alt="Kết quả học tập" className ="w-10 h-10"/>
            <p className ="text-sm font-semibold">Khen thường sinh viên</p>
        </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_07.png" alt="Tra cứu công nợ" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Tra cứu công nợ</p>
      </div>
      <div className ="bg-white rounded-lg shadow p-12 text-center flex flex-col items-center space-y-2">
        <img src="/image/ima_08.png" alt="Thanh toán trực tuyến" className ="w-10 h-10"/>
        <p className ="text-sm font-semibold">Thanh toán trực tuyến</p>
      </div>
    </div>
  
    <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <div className ="bg-white rounded-lg shadow p-12">
        <h2 className ="text-lg font-bold">Lớp học phần</h2>
        <ul className ="mt-4 space-y-4">
          <li>
            <div className ="flex justify-between">
              <span>Tư tưởng Hồ Chí Minh</span>
              <span className ="text-blue-500 font-medium">242210000719</span>
            </div>
            <p className ="text-sm text-gray-500">Số tín chỉ: 2</p>
          </li>
          <li>
            <div className ="flex justify-between">
              <span>Lịch sử Đảng Cộng sản Việt Nam</span>
              <span className ="text-blue-500 font-medium">242210507119</span>
            </div>
            <p className ="text-sm text-gray-500">Số tín chỉ: 2</p>
          </li>
          <li>
            <div className ="flex justify-between">
              <span>Sức khỏe môi trường</span>
              <span className ="text-blue-500 font-medium">24221MD226804</span>
            </div>
            <p className ="text-sm text-gray-500">Số tín chỉ: 1</p>
          </li>
        </ul>
      </div>
  
      <div className ="bg-white rounded-lg shadow p-12">
        <h2 className ="text-lg font-bold">Kết quả học tập</h2>
        <div className ="flex justify-center items-center h-40">
          <p className ="text-gray-500">Chưa có dữ liệu hiển thị</p>
        </div>
      </div>
  
      <div className ="bg-white rounded-lg shadow p-12">
        <h2 className ="text-lg font-bold">Tiến độ học tập</h2>
        <div className ="flex justify-center items-center">
          <div className ="w-32 h-32">
            <svg viewBox="0 0 36 36" className ="circular-chart blue">
              <path className ="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className ="circle" stroke-dasharray="87, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
            </svg>
          </div>
          <div className ="ml-4">
            <p className ="text-xl font-bold">87/195</p>
            <p className ="text-sm text-gray-500">Tổng số tín chỉ hoàn thành</p>
          </div>
        </div>
      </div>
    </div>
  </div>
 </>
  );
};

export default StudentPage;
