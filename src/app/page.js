"use client";

import Image from "next/image";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "2213060029" && password === "2213060029") {
      toast.success("Đăng nhập thành công!", {
        position: "top-center", // Sửa lỗi ở đây
      });

      setTimeout(() => {
        router.push("/student");
      }, 2000);
    } else {
      toast.error("Sai mã sinh viên hoặc mật khẩu!", {
        position: "top-center", // Sửa lỗi ở đây
      });
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div>
        <Image src="/image/banner.jpg" alt="Banner" width={1600} height={600} />
      </div>

      <div className="text-white py-2">
        <button className="ml-4 px-4 py-2 text-sm font-bold bg-red-600 hover:bg-red-700 rounded shadow">
          HƯỚNG DẪN XÁC NHẬN NGUYỆN VỌNG
        </button>
      </div>

      <div className="container mx-auto flex flex-wrap px-4 mt-4">
        <div className="w-full lg:w-2/3 mb-4">
          <div className="flex border-b-2 border-gray-200 mb-4">
            <div className="px-4 py-2 text-blue-600 font-bold border-b-4 border-blue-600">
              TÂN SINH VIÊN
            </div>
            <div className="px-4 py-2 text-gray-600">THÔNG TIN</div>
            <div className="px-4 py-2 text-gray-600">THÔNG BÁO</div>
          </div>

          {[1, 2].map((_, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <div className="flex items-start mb-4">
                <div className="bg-blue-600 text-white px-4 py-2 text-center">
                  <p className="text-sm">Tháng 08</p>
                  <p className="text-2xl font-bold">27</p>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-600">
                    Hướng dẫn thí sinh chọn nguyện vọng nhập học
                  </h3>
                  <p className="text-gray-600">
                    Chức năng cho phép thí sinh cập nhật lại nguyện vọng trúng tuyển.
                  </p>
                  <a href="#" className="text-red-500 text-sm">
                    Xem chi tiết
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-center text-blue-600 font-bold text-lg mb-4">
            CỔNG THÔNG TIN SINH VIÊN
          </h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập mã sinh viên"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full mb-4 px-4 py-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded font-bold hover:bg-orange-600"
            >
              ĐĂNG NHẬP
            </button>
          </form>
          <div class="flex justify-center mt-2">
          <img src="/image/app_store.jpg" alt="App Store" class="h-10 mx-2"/>
          <img src="/image/google_play.png" alt="Google Play" class="h-10 mx-2"/>
        </div>
        </div>
      </div>
    </>
  );
}
