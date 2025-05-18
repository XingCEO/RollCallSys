import { ActionFunction, json } from "@remix-run/node";
import { useActionData, Form, useNavigate } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return json({ error: "Username and password are required" }, { status: 400 });
  }

  // 這裡應該有與後端API或資料庫互動的邏輯來驗證使用者帳號和密碼
  // 例如：檢查username和password是否正確，若正確則返回成功訊息和重定向路徑
  // 這裡僅模擬成功登入
  return json({ success: true, message: "Login successful", username, redirectTo: "/student/dashboard" });
};

export default function Login() {
  const actionData = useActionData<any>();
  const navigate = useNavigate();

  if (actionData?.success) {
    // 如果登入成功，導向到對應的頁面
    setTimeout(() => navigate(actionData.redirectTo), 2000);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">帳號密碼登入</h1>
      {actionData?.success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md">
          <p>{actionData.message}</p>
          <p>使用者: {actionData.username}</p>
          <p>即將導向至您的主頁面...</p>
        </div>
      ) : (
        <Form method="post" className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              使用者名稱
            </label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="輸入您的使用者名稱"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              密碼
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="輸入您的密碼"
            />
          </div>
          {actionData?.error && (
            <p className="text-red-500 text-sm mb-4">{actionData.error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            登入
          </button>
        </Form>
      )}
    </div>
  );
}
