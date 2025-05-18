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

// app/routes/gmail-authorize.tsx
var import_node = __toESM(require_node());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/gmail-authorize.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/gmail-authorize.tsx"
  );
  import.meta.hot.lastModified = "1747570276481.648";
}
function GmailAuthorize() {
  _s();
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold mb-6", children: "Gmail \u4F7F\u7528\u8005\u6388\u6B0A" }, void 0, false, {
      fileName: "app/routes/gmail-authorize.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "bg-white p-6 rounded shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4 text-gray-700", children: "\u8ACB\u6388\u6B0A\u60A8\u7684Gmail\u5E33\u6236\u4EE5\u7E7C\u7E8C\u4F7F\u7528\u672C\u7CFB\u7D71\u3002" }, void 0, false, {
        fileName: "app/routes/gmail-authorize.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-red-500 text-sm mb-4", children: actionData.error }, void 0, false, {
        fileName: "app/routes/gmail-authorize.tsx",
        lineNumber: 39,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600", children: "\u6388\u6B0AGmail" }, void 0, false, {
        fileName: "app/routes/gmail-authorize.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/gmail-authorize.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/gmail-authorize.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(GmailAuthorize, "fHVw5pq0Zwd2gXh2gyrnVdHnLCc=", false, function() {
  return [useActionData];
});
_c = GmailAuthorize;
var _c;
$RefreshReg$(_c, "GmailAuthorize");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GmailAuthorize as default
};
//# sourceMappingURL=/build/routes/gmail-authorize-STNS6R46.js.map
