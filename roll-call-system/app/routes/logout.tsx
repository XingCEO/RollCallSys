import { ActionFunction, redirect } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  // 這裡應該有與後端API或資料庫互動的邏輯來處理使用者登出
  // 例如：清除session或token
  // 這裡僅模擬成功登出並重定向到首頁
  return redirect("/");
};

export default function Logout() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">登出中...</h1>
      <p className="text-gray-600">您正在登出系統，請稍候...</p>
    </div>
  );
}
