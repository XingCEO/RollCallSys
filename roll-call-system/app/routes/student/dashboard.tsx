import { Link } from "@remix-run/react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">學生主頁面 - 地獄部隊點名系統</h1>
        <nav className="mt-2">
          <Link to="/logout" className="text-white hover:underline">登出</Link>
        </nav>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">歡迎，學生</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">查看個人點名狀態</h3>
            <p className="text-gray-600">查看您的出缺席狀態和歷史記錄。</p>
            <Link to="/student/attendance-record" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">提交報導</h3>
            <p className="text-gray-600">提交相關報導或說明。</p>
            <Link to="#" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">申請請假</h3>
            <p className="text-gray-600">提交請假申請。</p>
            <Link to="/student/leave-request" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">提出出缺席疑慮</h3>
            <p className="text-gray-600">對出缺席記錄提出疑慮或申訴。</p>
            <Link to="/student/attendance-dispute" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
