var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-W4BPJPFG.css";

// app/styles/global.css
var global_default = "/build/_assets/global-TYCIXYCJ.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "zh-TW", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/gmail-authorize.tsx
var gmail_authorize_exports = {};
__export(gmail_authorize_exports, {
  action: () => action,
  default: () => GmailAuthorize
});
import { redirect } from "@remix-run/node";
import { useActionData, Form } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var action = async ({ request }) => redirect("/");
function GmailAuthorize() {
  let actionData = useActionData();
  return /* @__PURE__ */ jsxDEV3("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold mb-6", children: "Gmail \u4F7F\u7528\u8005\u6388\u6B0A" }, void 0, !1, {
      fileName: "app/routes/gmail-authorize.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Form, { method: "post", className: "bg-white p-6 rounded shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ jsxDEV3("p", { className: "mb-4 text-gray-700", children: "\u8ACB\u6388\u6B0A\u60A8\u7684Gmail\u5E33\u6236\u4EE5\u7E7C\u7E8C\u4F7F\u7528\u672C\u7CFB\u7D71\u3002" }, void 0, !1, {
        fileName: "app/routes/gmail-authorize.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV3("p", { className: "text-red-500 text-sm mb-4", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/gmail-authorize.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV3(
        "button",
        {
          type: "submit",
          className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600",
          children: "\u6388\u6B0AGmail"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/gmail-authorize.tsx",
          lineNumber: 22,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/gmail-authorize.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/gmail-authorize.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/routes/gmail-bind.tsx
var gmail_bind_exports = {};
__export(gmail_bind_exports, {
  action: () => action2,
  default: () => GmailBind
});
import { json as json2 } from "@remix-run/node";
import { useActionData as useActionData2, Form as Form2 } from "@remix-run/react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var action2 = async ({ request }) => {
  let email = (await request.formData()).get("email");
  return email ? json2({ success: !0, message: "Gmail binding successful", email }) : json2({ error: "Email is required" }, { status: 400 });
};
function GmailBind() {
  let actionData = useActionData2();
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV4("h1", { className: "text-3xl font-bold mb-6", children: "Gmail \u7D81\u5B9A\u8A8D\u8B49" }, void 0, !1, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    actionData?.success ? /* @__PURE__ */ jsxDEV4("div", { className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md", children: [
      /* @__PURE__ */ jsxDEV4("p", { children: actionData.message }, void 0, !1, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 26,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("p", { children: [
        "\u7D81\u5B9AEmail: ",
        actionData.email
      ] }, void 0, !0, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV4("a", { href: "/", className: "text-blue-500 hover:underline mt-2 block", children: "\u8FD4\u56DE\u9996\u9801" }, void 0, !1, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV4(Form2, { method: "post", className: "bg-white p-6 rounded shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ jsxDEV4("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV4("label", { htmlFor: "email", className: "block text-gray-700 font-medium mb-2", children: "Gmail \u5730\u5740" }, void 0, !1, {
          fileName: "app/routes/gmail-bind.tsx",
          lineNumber: 33,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4(
          "input",
          {
            type: "email",
            id: "email",
            name: "email",
            required: !0,
            className: "w-full p-2 border border-gray-300 rounded",
            placeholder: "\u8F38\u5165\u60A8\u7684Gmail\u5730\u5740"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/gmail-bind.tsx",
            lineNumber: 36,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV4("p", { className: "text-red-500 text-sm mb-4", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/gmail-bind.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV4(
        "button",
        {
          type: "submit",
          className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600",
          children: "\u7D81\u5B9AGmail"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/gmail-bind.tsx",
          lineNumber: 48,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/gmail-bind.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/gmail-bind.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  default: () => Logout
});
import { redirect as redirect2 } from "@remix-run/node";
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var action3 = async ({ request }) => redirect2("/");
function Logout() {
  return /* @__PURE__ */ jsxDEV5("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV5("h1", { className: "text-3xl font-bold mb-6", children: "\u767B\u51FA\u4E2D..." }, void 0, !1, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("p", { className: "text-gray-600", children: "\u60A8\u6B63\u5728\u767B\u51FA\u7CFB\u7D71\uFF0C\u8ACB\u7A0D\u5019..." }, void 0, !1, {
      fileName: "app/routes/logout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV6("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV6("h1", { className: "text-4xl font-bold mb-6", children: "\u5730\u7344\u90E8\u968A\u9EDE\u540D\u7CFB\u7D71" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("p", { className: "text-gray-600 mb-8", children: "\u6B61\u8FCE\u4F7F\u7528\u9EDE\u540D\u7CFB\u7D71\uFF0C\u8ACB\u9078\u64C7\u60A8\u7684\u89D2\u8272" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "flex space-x-4", children: [
      /* @__PURE__ */ jsxDEV6(
        Link,
        {
          to: "/student/dashboard",
          className: "bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600",
          children: "\u5B78\u751F"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 9,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        Link,
        {
          to: "/teacher/dashboard",
          className: "bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600",
          children: "\u6559\u5E2B"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 15,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV6(
        Link,
        {
          to: "/admin/dashboard",
          className: "bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600",
          children: "\u7BA1\u7406\u8005"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 21,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login
});
import { json as json3 } from "@remix-run/node";
import { useActionData as useActionData3, Form as Form3, useNavigate } from "@remix-run/react";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var action4 = async ({ request }) => {
  let formData = await request.formData(), username = formData.get("username"), password = formData.get("password");
  return !username || !password ? json3({ error: "Username and password are required" }, { status: 400 }) : json3({ success: !0, message: "Login successful", username, redirectTo: "/student/dashboard" });
};
function Login() {
  let actionData = useActionData3(), navigate = useNavigate();
  return actionData?.success && setTimeout(() => navigate(actionData.redirectTo), 2e3), /* @__PURE__ */ jsxDEV7("div", { className: "flex flex-col items-center justify-center h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV7("h1", { className: "text-3xl font-bold mb-6", children: "\u5E33\u865F\u5BC6\u78BC\u767B\u5165" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    actionData?.success ? /* @__PURE__ */ jsxDEV7("div", { className: "bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded max-w-md", children: [
      /* @__PURE__ */ jsxDEV7("p", { children: actionData.message }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: [
        "\u4F7F\u7528\u8005: ",
        actionData.username
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "\u5373\u5C07\u5C0E\u5411\u81F3\u60A8\u7684\u4E3B\u9801\u9762..." }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 35,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this) : /* @__PURE__ */ jsxDEV7(Form3, { method: "post", className: "bg-white p-6 rounded shadow-md w-full max-w-md", children: [
      /* @__PURE__ */ jsxDEV7("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV7("label", { htmlFor: "username", className: "block text-gray-700 font-medium mb-2", children: "\u4F7F\u7528\u8005\u540D\u7A31" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 40,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            type: "text",
            id: "username",
            name: "username",
            required: !0,
            className: "w-full p-2 border border-gray-300 rounded",
            placeholder: "\u8F38\u5165\u60A8\u7684\u4F7F\u7528\u8005\u540D\u7A31"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV7("div", { className: "mb-4", children: [
        /* @__PURE__ */ jsxDEV7("label", { htmlFor: "password", className: "block text-gray-700 font-medium mb-2", children: "\u5BC6\u78BC" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV7(
          "input",
          {
            type: "password",
            id: "password",
            name: "password",
            required: !0,
            className: "w-full p-2 border border-gray-300 rounded",
            placeholder: "\u8F38\u5165\u60A8\u7684\u5BC6\u78BC"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 56,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      actionData?.error && /* @__PURE__ */ jsxDEV7("p", { className: "text-red-500 text-sm mb-4", children: actionData.error }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV7(
        "button",
        {
          type: "submit",
          className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600",
          children: "\u767B\u5165"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 68,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HNOIC5YA.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-T735AEWU.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-T65WJAK7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-USVEEGCM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/gmail-authorize": { id: "routes/gmail-authorize", parentId: "root", path: "gmail-authorize", index: void 0, caseSensitive: void 0, module: "/build/routes/gmail-authorize-STNS6R46.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/gmail-bind": { id: "routes/gmail-bind", parentId: "root", path: "gmail-bind", index: void 0, caseSensitive: void 0, module: "/build/routes/gmail-bind-RAT7R6B4.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-VI5I7VQY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-UVGTBQWC.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TNBJR37I.js", imports: ["/build/_shared/chunk-G7CHZRZX.js"], hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "afb968b8", hmr: { runtime: "/build/_shared/chunk-T65WJAK7.js", timestamp: 1747570988924 }, url: "/build/manifest-AFB968B8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/gmail-authorize": {
    id: "routes/gmail-authorize",
    parentId: "root",
    path: "gmail-authorize",
    index: void 0,
    caseSensitive: void 0,
    module: gmail_authorize_exports
  },
  "routes/gmail-bind": {
    id: "routes/gmail-bind",
    parentId: "root",
    path: "gmail-bind",
    index: void 0,
    caseSensitive: void 0,
    module: gmail_bind_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
