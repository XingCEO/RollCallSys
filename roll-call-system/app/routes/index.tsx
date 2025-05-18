import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">地獄部隊點名系統</h1>
      <p className="text-gray-600 mb-8">歡迎使用點名系統，請選擇您的角色</p>
      <div className="flex space-x-4">
        <Link
          to="/student/dashboard"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          學生
        </Link>
        <Link
          to="/teacher/dashboard"
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
        >
          教師
        </Link>
        <Link
          to="/admin/dashboard"
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
        >
          管理者
        </Link>
      </div>
    </div>
  );
}
