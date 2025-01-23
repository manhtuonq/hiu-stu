"use client"
import React, { useState } from 'react';

const Study = () => {
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
      
  <main className="container mx-auto px-4 py-6">
    <section className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Thông tin sinh viên</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
        <p><span className="font-semibold text-gray-700">Niên khóa:</span> 2022 - 2028</p>
        <p><span className="font-semibold text-gray-700">Thời gian đào tạo kế hoạch:</span> 6,0 năm</p>
        <p><span className="font-semibold text-gray-700">Thời gian học tối đa:</span> 12,0 năm</p>
        <p><span className="font-semibold text-gray-700">GVCN:</span> Nguyễn Thị Mộng Trinh</p>
        <p><span className="font-semibold text-gray-700">Số điện thoại (GVCN):</span> 0909533698</p>
        <p><span className="font-semibold text-gray-700">Cố vấn học tập:</span> Nguyễn Thị Mộng Trinh</p>
      </div>
    </section>

    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-blue-600">
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">STT</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Mã lớp học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Tên môn học/học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Số tín chỉ</th>
              <th colspan="4" className="border border-gray-300 px-4 py-2 text-center">Quá trình</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Cuối kỳ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 10</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 4</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm chữ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Ghi chú</th>
              <th colspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm thi KN</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Đạt</th>
            </tr>
            <tr className="bg-blue-50 text-blue-600">
              <th className="border border-gray-300 px-4 py-2 text-center">1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="15" className="text-left border border-gray-300 px-4 py-2">
                Điểm trung bình học kỳ (hệ 10): <strong>7.94</strong> |
                Điểm trung bình tích lũy (hệ 10): <strong>7.94</strong> |
                Xử lý học vụ: <strong>Học tiếp</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-blue-600">
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">STT</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Mã lớp học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Tên môn học/học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Số tín chỉ</th>
              <th colspan="4" className="border border-gray-300 px-4 py-2 text-center">Quá trình</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Cuối kỳ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 10</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 4</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm chữ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Ghi chú</th>
              <th colspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm thi KN</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Đạt</th>
            </tr>
            <tr className="bg-blue-50 text-blue-600">
              <th className="border border-gray-300 px-4 py-2 text-center">1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="15" className="text-left border border-gray-300 px-4 py-2">
                Điểm trung bình học kỳ (hệ 10): <strong>7.94</strong> |
                Điểm trung bình tích lũy (hệ 10): <strong>7.94</strong> |
                Xử lý học vụ: <strong>Học tiếp</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-blue-600">
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">STT</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Mã lớp học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Tên môn học/học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Số tín chỉ</th>
              <th colspan="4" className="border border-gray-300 px-4 py-2 text-center">Quá trình</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Cuối kỳ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 10</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 4</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm chữ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Ghi chú</th>
              <th colspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm thi KN</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Đạt</th>
            </tr>
            <tr className="bg-blue-50 text-blue-600">
              <th className="border border-gray-300 px-4 py-2 text-center">1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="15" className="text-left border border-gray-300 px-4 py-2">
                Điểm trung bình học kỳ (hệ 10): <strong>7.94</strong> |
                Điểm trung bình tích lũy (hệ 10): <strong>7.94</strong> |
                Xử lý học vụ: <strong>Học tiếp</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
    <section className="bg-white rounded-lg shadow-md p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-blue-600">
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">STT</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Mã lớp học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Tên môn học/học phần</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Số tín chỉ</th>
              <th colspan="4" className="border border-gray-300 px-4 py-2 text-center">Quá trình</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Cuối kỳ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 10</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm 4</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm chữ</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Ghi chú</th>
              <th colspan="2" className="border border-gray-300 px-4 py-2 text-center">Điểm thi KN</th>
              <th rowspan="2" className="border border-gray-300 px-4 py-2 text-center">Đạt</th>
            </tr>
            <tr className="bg-blue-50 text-blue-600">
              <th className="border border-gray-300 px-4 py-2 text-center">1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">LT Hệ số 2</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 1</th>
              <th className="border border-gray-300 px-4 py-2 text-center">Điểm KN 2</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tbody>
            <tr className="text-center text-gray-700">
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">22121GE101772</td>
              <td className="border border-gray-300 px-4 py-2">Anh văn I</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">8.30</td>
              <td className="border border-gray-300 px-4 py-2">8.70</td>
              <td className="border border-gray-300 px-4 py-2">9.40</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">10.00</td>
              <td className="border border-gray-300 px-4 py-2">4.00</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">A</td>
              <td className="border border-gray-300 px-4 py-2">Ghi chú</td>
              <td className="border border-gray-300 px-4 py-2">9.50</td>
              <td className="border border-gray-300 px-4 py-2">✔</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="15" className="text-left border border-gray-300 px-4 py-2">
                Điểm trung bình học kỳ (hệ 10): <strong>7.94</strong> |
                Điểm trung bình tích lũy (hệ 10): <strong>7.94</strong> |
                Xử lý học vụ: <strong>Học tiếp</strong>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </main>
 </>
  );
};

export default Study;
