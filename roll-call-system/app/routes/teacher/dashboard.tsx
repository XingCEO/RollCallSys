import { Link } from "@remix-run/react";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">教師主頁面 - 地獄部隊點名系統</h1>
        <nav className="mt-2">
          <Link to="/logout" className="text-white hover:underline">登出</Link>
        </nav>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">歡迎，教師</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">查詢所有學生留校紀錄</h3>
            <p className="text-gray-600">查看所有學生的留校紀錄，可按日期範圍篩選。</p>
            <Link to="/teacher/detention-records" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">管理學生出缺席紀錄</h3>
            <p className="text-gray-600">新增、修改、刪除或查詢學生的出缺席紀錄。</p>
            <Link to="/teacher/attendance-management" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">罰寫繳交登記</h3>
            <p className="text-gray-600">記錄當天繳交罰寫的學生（通過/未通過）。</p>
            <Link to="/teacher/penalty-submission" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">新增學生到名單</h3>
            <p className="text-gray-600">將新學生加入點名名單。</p>
            <Link to="/teacher/add-student" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">審核學生請假</h3>
            <p className="text-gray-600">審核學生的請假申請。</p>
            <Link to="/teacher/leave-approval" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">匯出紀錄</h3>
            <p className="text-gray-600">匯出單一學生或整張紀錄表（Excel/PDF）。</p>
            <Link to="/teacher/export-records" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
