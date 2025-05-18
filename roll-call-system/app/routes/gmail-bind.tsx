import { ActionFunction, json } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email) {
    return json({ error: "Email is required" }, { status: 400 });
  }

  // 這裡應該有與後端API或資料庫互動的邏輯來處理Gmail綁定
  // 例如：檢查email是否已存在，若不存在則創建新綁定記錄
  // 這裡僅模擬成功綁定
  return json({ success: true, message: "Gmail binding successful", email });
};

export default function GmailBind() {
  const actionData = useActionData<any>();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Gmail 綁定認證</h1>
      {actionData?.success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md">
          <p>{actionData.message}</p>
          <p>綁定Email: {actionData.email}</p>
          <a href="/" className="text-blue-500 hover:underline mt-2 block">返回首頁</a>
        </div>
      ) : (
        <Form method="post" className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Gmail 地址
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="輸入您的Gmail地址"
            />
          </div>
          {actionData?.error && (
            <p className="text-red-500 text-sm mb-4">{actionData.error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            綁定Gmail
          </button>
        </Form>
      )}
    </div>
  );
}
