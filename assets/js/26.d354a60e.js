(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{411:function(v,_,t){"use strict";t.r(_);var e=t(52),i=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"混合方案简析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#混合方案简析"}},[v._v("#")]),v._v(" 混合方案简析")]),v._v(" "),t("p",[v._v("Hybrid App，俗称 "),t("strong",[v._v("混合应用")]),v._v("，即混合了 Native 技术 与 Web 技术 进行开发的移动应用。现在比较流行的混合方案主要有三种，主要是在 UI 渲染机制上的不同:")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("Webview UI")])]),v._v(" "),t("ul",[t("li",[v._v("通过 JSBridge 完成 H5 与 Native 的双向通讯，并 "),t("strong",[v._v("基于 Webview")]),v._v(" 进行页面的渲染；")]),v._v(" "),t("li",[t("strong",[v._v("优势")]),v._v(": 简单易用，架构门槛/成本较低，适用性与灵活性极强；")]),v._v(" "),t("li",[t("strong",[v._v("劣势")]),v._v(": Webview 性能局限，在复杂页面中，表现远不如原生页面；")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Native UI")])]),v._v(" "),t("ul",[t("li",[v._v("通过 JSBridge 赋予 H5 原生能力，并进一步将 JS 生成的虚拟节点树(Virtual DOM)传递至 Native 层，并使用 "),t("strong",[v._v("原生系统渲染")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("优势")]),v._v(": 用户体验基本接近原生，且能发挥 Web 技术 开发灵活与易更新的特性；")]),v._v(" "),t("li",[t("strong",[v._v("劣势")]),v._v(": 上手/改造门槛较高，最好需要掌握一定程度的客户端技术。相比于常规 Web 开发，需要更高的开发调试、问题排查成本；")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("小程序")])]),v._v(" "),t("ul",[t("li",[v._v("通过更加定制化的 JSBridge，赋予了 Web 更大的权限，并使用双 WebView 双线程的模式隔离了 JS 逻辑 与 UI 渲染，形成了特殊的开发模式，加强了 H5 与 Native 混合程度，属于第一种方案的优化版本；")]),v._v(" "),t("li",[t("strong",[v._v("优势")]),v._v(": 用户体验好于常规 Webview 方案，且通常依托的平台也能提供更为友好的开发调试体验以及功能；")]),v._v(" "),t("li",[t("strong",[v._v("劣势")]),v._v(": 需要依托于特定的平台的规范限定")])])])]),v._v(" "),t("h2",{attrs:{id:"webview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webview"}},[v._v("#")]),v._v(" Webview")]),v._v(" "),t("p",[v._v("Webview 是 Native App 中内置的一款基于 Webkit 内核 的浏览器，主要由两部分组成:")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("WebCore 排版引擎")])]),v._v(" "),t("li",[t("strong",[v._v("JSCore 解析引擎")])])]),v._v(" "),t("p",[v._v("在原生开发 SDK 中 Webview 被封装成了一个组件，用于作为 Web 页面 的容器。因此，作为宿主的客户端中拥有更高的权限，可以对 Webview 中的 Web 页面 进行配置和开发。")]),v._v(" "),t("p",[v._v("Hybrid 技术中双端的交互原理，便是基于 Webview 的一些 API 和特性。")]),v._v(" "),t("h2",{attrs:{id:"交互原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#交互原理"}},[v._v("#")]),v._v(" 交互原理")]),v._v(" "),t("p",[v._v("Hybrid 技术 中最核心的点就是 Native 端 与 H5 端 之间的 "),t("strong",[v._v("双向通讯层")]),v._v("，其实这里也可以理解为我们需要一套 "),t("strong",[v._v("跨语言通讯方案")]),v._v("，便是我们常听到的 JSBridge。")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("JavaScript 通知 Native")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("API 注入")]),v._v("，Native 直接在 JS 上下文中挂载数据或者方法\n"),t("ul",[t("li",[v._v("延迟较低，在安卓 4.1 以下具有安全性问题，风险较高")])])]),v._v(" "),t("li",[v._v("WebView "),t("strong",[v._v("URL Scheme")]),v._v(" 跳转拦截\n"),t("ul",[t("li",[v._v("兼容性好，但延迟较高，且有长度限制")])])]),v._v(" "),t("li",[v._v("WebView 中的 "),t("strong",[v._v("prompt/console/alert")]),v._v(" 拦截(通常使用 prompt)")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("Native 通知 Javascript")])]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("IOS")]),v._v(": "),t("code",[v._v("stringByEvaluatingJavaScriptFromString")])])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("// Swift\nwebview.stringByEvaluatingJavaScriptFromString(\"alert('NativeCall')\")\n")])])]),t("ul",[t("li",[t("strong",[v._v("Android")]),v._v(": "),t("code",[v._v("loadUrl")]),v._v(" (4.4-)")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("// 调用js中的JSBridge.trigger方法\n// 该方法的弊端是无法获取函数返回值；\nwebView.loadUrl(\"javascript:JSBridge.trigger('NativeCall')\")\n")])])]),t("ul",[t("li",[t("strong",[v._v("Android")]),v._v(": "),t("code",[v._v("evaluateJavascript")]),v._v(" (4.4+)")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v("// 4.4+后使用该方法便可调用并获取函数返回值；\nmWebView.evaluateJavascript（\"javascript:JSBridge.trigger('NativeCall')\", \t new ValueCallback<String>() {\n    @Override\n    public void onReceiveValue(String value) {\n        //此处为 js 返回的结果\n    }\n});\n")])])])])]),v._v(" "),t("h2",{attrs:{id:"接入方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接入方案"}},[v._v("#")]),v._v(" 接入方案")]),v._v(" "),t("p",[v._v("整套方案需要 Web 与 Native 两部分共同来完成:")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Native")]),v._v(": 负责实现 URL 拦截与解析、环境信息的注入、拓展功能的映射、版本更新等功能。")]),v._v(" "),t("li",[t("strong",[v._v("JavaScirpt")]),v._v(": 负责实现功能协议的拼装、协议的发送、参数的传递、回调等一系列基础功能。")])]),v._v(" "),t("h4",{attrs:{id:"接入方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接入方式"}},[v._v("#")]),v._v(" 接入方式:")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("在线 H5")]),v._v(": 直接将项目部署于线上服务器，并由客户端在 HTML 头部注入对应的 Bridge。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优势")]),v._v(": 接入/开发成本低，对 App 的侵入小。")]),v._v(" "),t("li",[t("strong",[v._v("劣势")]),v._v(": 重度依赖网络，无法离线使用，首屏加载慢。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("内置离线包")]),v._v(": 将代码直接内置于 App 中，即本地存储中，可由 H5 或者 客户端引用 Bridge。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("优势")]),v._v(": 首屏加载快，可离线化使用。")]),v._v(" "),t("li",[t("strong",[v._v("劣势")]),v._v(": 开发、调试成本变高，需要多端合作，且会增加 App 包体积。")])])])]),v._v(" "),t("h2",{attrs:{id:"优化方案简述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化方案简述"}},[v._v("#")]),v._v(" 优化方案简述")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("Webview 预加载")]),v._v(": Webview 的初始化其实挺耗时的。我们测试过，大概在 100~200ms 之间，因此如果能前置做好初始化于内存中，会大大加快渲染速度。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("更新机制")]),v._v(": 使用离线包的时候，便会涉及到本地离线代码的更新问题，因此需要建立一套云端下发包的机制，由客户端下载云端最新代码包 (zip 包)，并解压替换本地代码。")]),v._v(" "),t("ul",[t("li",[t("p",[t("strong",[v._v("增量更新")]),v._v(": 由于下发包是一个下载的过程，因此包的体积越小，下载速度越快，流量损耗越低。只打包改变的文件，客户端下载后覆盖式替换，能大大减小每次更新包的体积。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("条件分发")]),v._v(": 云平台下发更新包时，可以配合客户端设置一系列的条件与规则，从而实现代码的条件更新:")]),v._v(" "),t("ul",[t("li",[v._v("单 "),t("strong",[v._v("地区")]),v._v(" 更新: 例如一个只有中国地区才能更新的版本。")]),v._v(" "),t("li",[v._v("按 "),t("strong",[v._v("语言")]),v._v(" 更新: 例如只有中文版本会更新。")]),v._v(" "),t("li",[v._v("按 App "),t("strong",[v._v("版本")]),v._v(" 更新: 例如只有最新版本的 App 才会更新。")]),v._v(" "),t("li",[t("strong",[v._v("灰度")]),v._v(" 更新: 只有小比例用户会更新。")]),v._v(" "),t("li",[t("strong",[v._v("AB 测试")]),v._v(": 只有命中的用户会更新。")])])])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("降级机制")]),v._v(": 当用户下载或解压代码包失败时，需要有套降级方案，通常有两种做法:")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("本地内置")]),v._v(": 随着 App 打包时内置一份线上最新完整代码包，保证本地代码文件的存在，资源加载均使用本地化路径。")]),v._v(" "),t("li",[t("strong",[v._v("域名拦截")]),v._v(": 资源加载使用线上域名，通过拦截域名映射到本地路径。当本地不存在时，则请求线上文件，当存在时，直接加载。")])])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("跨平台部署")]),v._v(": Bridge 层 可以做一套浏览器适配，在一些无法适配的功能，做好降级处理，从而保证代码在任何环境的可用性，一套代码可同时运行于 App 内 与 普通浏览器。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("环境系统")]),v._v(": 与客户端进行统一配合，搭建出 "),t("strong",[v._v("正式 / 预上线 / 测试 / 开发")]),v._v(" 环境，能大大提高项目稳定性与问题排查。")])]),v._v(" "),t("li",[t("p",[t("strong",[v._v("开发模式")]),v._v(":")]),v._v(" "),t("ul",[t("li",[v._v("能连接 PC Chrome/safari 进行代码调试。")]),v._v(" "),t("li",[v._v("具有开发调试入口，可以使用同样的 Webview 加载开发时的本地代码。")]),v._v(" "),t("li",[v._v("具备日志系统，可以查看 Log 信息。")])])])])])}),[],!1,null,null,null);_.default=i.exports}}]);