(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{399:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("服务自动打点代理是基于语言的原生代理的一部分,\n这种代理需要依靠某些语言特定的特性,\n通常是一种基于虚拟机的语言.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("此外, 我们说大部分自动打点代理是基于虚拟机的, 但实际上你也可以在编译期构建这样的工具.")]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("自动打点很好用, 你还可以在编译时进行自动打点而不需要依赖虚拟机特性,\n那么这里有什么限制吗?")]),t._v(" "),n("p",[t._v("答案当然是有, 以下就是它们的限制:")]),t._v(" "),n("ul",[t._m(4),t._v(" "),n("li",[n("p",[n("strong",[t._v("仅仅对某些框架和库奏效")]),t._v(". 因为是代理来在运行时修改代码的, 这也意味着代理插件开发者事先就要知道\n所要修改的代码是怎么样的. 因此, 在这种探针下通常会有一个已支持的列表清单.\n如 "),n("router-link",{attrs:{to:"./../setup/service-agent/java-agent/Supported-list.html"}},[t._v("SkyWalking Java 代理支持列表")]),t._v(".")],1)]),t._v(" "),t._m(5)]),t._v(" "),n("p",[t._v("所以说自动打点没有什么神秘的, 总而言之就是, 自动打点代理开发者写了一个激活程序, 使得打点的代码\n自动运行, 仅此而已.")]),t._v(" "),t._m(6),t._v(" "),n("p",[t._v("如果你想了解 SkyWalking 中关于手动打点的库, 参考 "),n("router-link",{attrs:{to:"./manual-sdk.html"}},[t._v("手动打点 SDK")]),t._v(" 一节.")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"服务自动打点代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务自动打点代理","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务自动打点代理")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自动打点是什么意思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动打点是什么意思","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动打点是什么意思?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('许多用户都是在听到"他们说不需要改一行代码"之后才了解到这些代理的,\nSkyWalking 以前也将这种说法放在 README 文档中. 实际上这种说法是既对又错的.\n对于最终用户来说是对的, 他们不需要修改代码(至少在绝大多数情况下).\n但这种说法也是错的, 因为代码实际上还是被修改了, 只是被代理给修改了,\n这种做法通常叫做"在运行时操作代码".\n底层远离就是自动打点代理利用了虚拟机提供的用于修改代码的接口来动态加入打点的代码,\n如通过 '),e("code",[this._v("javaagent premain")]),this._v(" 来修改 Java 类.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"有什么限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有什么限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 有什么限制?")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("进程内传播在大多数情况下成为可能")]),this._v(". 许多高级编程语言(如 Java, .NET)都是用于构建业务系统.\n大部分业务逻辑代码对于每一个请求来说都运行在同一个线程内, 这使得传播是基于线程 ID 的, 以确保上下文是安全的.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[e("strong",[this._v("跨线程可能并非总是奏效")]),this._v(". 如上所述, 每个请求的代码大都运行在一个线程之内, 对于业务代码来说尤其如此.\n但是在其他一些场景下, 它们也会在不同线程下工作, 比如指派任务到其他线程, 任务池, 以及批处理.\n对于一些语言, 可能还提供了协程或类似的概念如 "),e("code",[this._v("Goroutine")]),this._v(", 使得开发者可以低开销地来执行异步操作,\n在这些场景下, 自动打点可能会遇到一些问题.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"下一步"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下一步","aria-hidden":"true"}},[this._v("#")]),this._v(" 下一步?")])}],!1,null,null,null);e.default=s.exports}}]);