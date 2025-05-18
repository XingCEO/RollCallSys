import { Link } from "@remix-run/react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">系統管理者主頁面 - 地獄部隊點名系統</h1>
        <nav className="mt-2">
          <Link to="/logout" className="text-white hover:underline">登出</Link>
        </nav>
      </header>
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-4">歡迎，系統管理者</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">成員管理</h3>
            <p className="text-gray-600">新增、編輯或刪除成員資料。</p>
            <Link to="/admin/member-management" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">系統設定</h3>
            <p className="text-gray-600">調整系統參數和設定。</p>
            <Link to="/admin/system-settings" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">查詢使用者登入詳情</h3>
            <p className="text-gray-600">查看所有使用者的登入時間、位置、IP和裝置資訊。</p>
            <Link to="/admin/login-details" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">最高權限資料管理</h3>
            <p className="text-gray-600">新增、修改或刪除任何資料，包括學生和紀錄。</p>
            <Link to="/admin/data-management" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-lg font-medium mb-2">查看請假審核狀態</h3>
            <p className="text-gray-600">查看請假申請的審核狀態及結果。</p>
            <Link to="/admin/leave-status" className="text-blue-500 hover:underline mt-2 block">前往</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
