import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-T735AEWU.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-T65WJAK7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/gmail-bind.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/gmail-bind.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/gmail-bind.tsx"
  );
  import.meta.hot.lastModified = "1747570129582.485";
}
function GmailBind() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Gmail \u7D81\u5B9A\u8A8D\u8B49" }, void 0, false, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    actionData?.success ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: actionData.message }, void 0, false, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
        "\u7D81\u5B9AEmail: ",
        actionData.email
      ] }, void 0, true, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-blue-500 hover:underline mt-2 block", children: "\u8FD4\u56DE\u9996\u9801" }, void 0, false, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 51,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bg-white p-6 rounded shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: "Gmail \u5730\u5740" }, void 0, false, {
          fileName: "app/routes/gmail-bind.tsx",
          lineNumber: 57,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", id: "email", name: "email", required: true, className: "w-full p-2 border border-gray-300 rounded", placeholder: "\u8F38\u5165\u60A8\u7684Gmail\u5730\u5740" }, void 0, false, {
          fileName: "app/routes/gmail-bind.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm mb-4", children: actionData.error }, void 0, false, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 62,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600", children: "\u7D81\u5B9AGmail" }, void 0, false, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 55,
      columnNumber: 18
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gmail-bind.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(GmailBind, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = GmailBind;
var _c;
$RefreshReg$(_c, "GmailBind");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GmailBind as default
};
//# sourceMappingURL=/build/routes/gmail-bind-RAT7R6B4.js.map
