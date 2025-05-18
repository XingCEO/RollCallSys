import { ActionFunction, json, redirect } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  // 這裡應該有與後端API或資料庫互動的邏輯來處理Gmail授權
  // 例如：檢查使用者是否已授權，若已授權則重定向到角色選擇頁面
  // 這裡僅模擬成功授權並重定向
  return redirect("/");
};

export default function GmailAuthorize() {
  const actionData = useActionData<any>();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Gmail 使用者授權</h1>
      <Form method="post" className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <p className="mb-4 text-gray-700">請授權您的Gmail帳戶以繼續使用本系統。</p>
        {actionData?.error && (
          <p className="text-red-500 text-sm mb-4">{actionData.error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          授權Gmail
        </button>
      </Form>
    </div>
  );
}
