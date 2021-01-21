(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{499:function(a,s,t){"use strict";t.r(s);var e=t(4),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("Boxx"),a._v(" "),t("h1",{attrs:{id:"json-web-token-入门教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#json-web-token-入门教程"}},[a._v("#")]),a._v(" JSON Web Token 入门教程")]),a._v(" "),t("p",[a._v("JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案，本文介绍它的原理和用法。"),t("br"),a._v(" "),t("img",{attrs:{src:a.$withBase("../jwt.jpg"),alt:"dock"}})]),a._v(" "),t("h2",{attrs:{id:"一、跨域认证的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、跨域认证的问题"}},[a._v("#")]),a._v(" 一、跨域认证的问题")]),a._v(" "),t("h4",{attrs:{id:"互联网服务离不开用户认证。一般流程是下面这样。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#互联网服务离不开用户认证。一般流程是下面这样。"}},[a._v("#")]),a._v(" 互联网服务离不开用户认证。一般流程是下面这样。")]),a._v(" "),t("h4",{attrs:{id:"_1、用户向服务器发送用户名和密码。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、用户向服务器发送用户名和密码。"}},[a._v("#")]),a._v(" 1、用户向服务器发送用户名和密码。")]),a._v(" "),t("h4",{attrs:{id:"_2、服务器验证通过后-在当前对话-session-里面保存相关数据-比如用户角色、登录时间等等。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、服务器验证通过后-在当前对话-session-里面保存相关数据-比如用户角色、登录时间等等。"}},[a._v("#")]),a._v(" 2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。")]),a._v(" "),t("h4",{attrs:{id:"_3、服务器向用户返回一个-session-id-写入用户的-cookie。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、服务器向用户返回一个-session-id-写入用户的-cookie。"}},[a._v("#")]),a._v(" 3、服务器向用户返回一个 session_id，写入用户的 Cookie。")]),a._v(" "),t("h4",{attrs:{id:"_4、用户随后的每一次请求-都会通过-cookie-将-session-id-传回服务器。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、用户随后的每一次请求-都会通过-cookie-将-session-id-传回服务器。"}},[a._v("#")]),a._v(" 4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。")]),a._v(" "),t("h4",{attrs:{id:"_5、服务器收到-session-id-找到前期保存的数据-由此得知用户的身份。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、服务器收到-session-id-找到前期保存的数据-由此得知用户的身份。"}},[a._v("#")]),a._v(" 5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。")]),a._v(" "),t("p",[a._v("这种模式的问题在于，扩展性（scaling）不好。单机当然没有问题，如果是服务器集群，或者是跨域的服务导向架构，就要求 session 数据共享，每台服务器都能够读取 session。")]),a._v(" "),t("p",[a._v("举例来说，A 网站和 B 网站是同一家公司的关联服务。现在要求，用户只要在其中一个网站登录，再访问另一个网站就会自动登录，请问怎么实现？")]),a._v(" "),t("p",[a._v("一种解决方案是 session 数据持久化，写入数据库或别的持久层。各种服务收到请求后，都向持久层请求数据。这种方案的优点是架构清晰，缺点是工程量比较大。另外，持久层万一挂了，就会单点失败。")]),a._v(" "),t("p",[a._v("另一种方案是服务器索性不保存 session 数据了，所有数据都保存在客户端，每次请求都发回服务器。JWT 就是这种方案的一个代表。")]),a._v(" "),t("h2",{attrs:{id:"二、jwt-的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、jwt-的原理"}},[a._v("#")]),a._v(" 二、JWT 的原理")]),a._v(" "),t("h4",{attrs:{id:"jwt-的原理是-服务器认证以后-生成一个-json-对象-发回给用户-就像下面这样。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-的原理是-服务器认证以后-生成一个-json-对象-发回给用户-就像下面这样。"}},[a._v("#")]),a._v(" JWT 的原理是，服务器认证以后，生成一个 JSON 对象，发回给用户，就像下面这样。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"姓名"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"张三"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"角色"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"管理员"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"到期时间"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"2018年7月1日0点0分"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上签名（详见后文）。")]),a._v(" "),t("p",[a._v("服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。")]),a._v(" "),t("h2",{attrs:{id:"三、jwt-的数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、jwt-的数据结构"}},[a._v("#")]),a._v(" 三、JWT 的数据结构")]),a._v(" "),t("h4",{attrs:{id:"实际的-jwt-大概就像下面这样"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际的-jwt-大概就像下面这样"}},[a._v("#")]),a._v(" 实际的 JWT 大概就像下面这样")]),a._v(" "),t("img",{attrs:{src:a.$withBase("../bg2018072304.jpg"),alt:"dock"}}),a._v(" \n它是一个很长的字符串，中间用点（.）分隔成三个部分。注意，JWT 内部是没有换行的，这里只是为了便于展示，将它写成了几行。    \n#### JWT 的三个部分依次如下\n"),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("Header（头部）\nPayload（负载）\nSignature（签名）\n")])])]),t("p",[a._v("写成一行，就是下面的样子。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("Header.Payload.Signature\n")])])]),t("img",{attrs:{src:a.$withBase("../bg2018072303.jpg"),alt:"dock"}}),a._v("\n下面依次介绍这三个部分。   \n"),t("h4",{attrs:{id:"_3-1-header"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-header"}},[a._v("#")]),a._v(" 3.1 Header")]),a._v(" "),t("p",[a._v("Header 部分是一个 JSON 对象，描述 JWT 的元数据，通常是下面的样子。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"alg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"HS256"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"typ"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"JWT"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("上面代码中，"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v("alg ")]),a._v("属性表示签名的算法（algorithm），默认是 HMAC SHA256（写成 HS256）；"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v("typ ")]),a._v("属性表示这个令牌（token）的类型（type），"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v("JWT ")]),a._v("令牌统一写为JWT。")],1),a._v(" "),t("p",[a._v("最后，将上面的 JSON 对象使用 Base64URL 算法（详见后文）转成字符串。")]),a._v(" "),t("h4",{attrs:{id:"_3-2-payload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-payload"}},[a._v("#")]),a._v(" 3.2 Payload")]),a._v(" "),t("p",[a._v("Payload 部分也是一个 JSON 对象，用来存放实际需要传递的数据。JWT 规定了7个官方字段，供选用。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("    iss (issuer)：签发人\n    exp (expiration time)：过期时间\n    sub (subject)：主题\n    aud (audience)：受众\n    nbf (Not Before)：生效时间\n    iat (Issued At)：签发时间\n    jti (JWT ID)：编号\n")])])]),t("p",[a._v("除了官方字段，你还可以在这个部分定义私有字段，下面就是一个例子。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"sub"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1234567890"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"John Doe"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"admin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[a._v("注意，JWT 默认是不加密的，任何人都可以读到，所以不要把秘密信息放在这个部分。")]),a._v(" "),t("p",[a._v("这个 JSON 对象也要使用 Base64URL 算法转成字符串。")]),a._v(" "),t("h4",{attrs:{id:"_3-3-signature"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-signature"}},[a._v("#")]),a._v(" 3.3 Signature")]),a._v(" "),t("p",[a._v("Signature 部分是对前两部分的签名，防止数据篡改。")]),a._v(" "),t("p",[a._v("首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。")]),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("    HMACSHA256(\n      base64UrlEncode(header) + "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"."')]),a._v(" +\n      base64UrlEncode(payload)"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      secret)\n")])])]),t("p",[a._v('算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（'),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" . ")]),a._v("）分隔，就可以返回给用户。")],1),a._v(" "),t("h4",{attrs:{id:"_3-4-base64url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-base64url"}},[a._v("#")]),a._v(" 3.4 Base64URL")]),a._v(" "),t("p",[a._v("前面提到，Header 和 Payload 串型化的算法是 Base64URL。这个算法跟 Base64 算法基本类似，但有一些小的不同。")]),a._v(" "),t("p",[a._v("JWT 作为一个令牌（token），有些场合可能会放到 URL（比如 api.example.com/?token=xxx）。Base64 有三个字符"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" + ")]),a._v(" 、 "),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" / ")]),a._v("和"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" = ")]),a._v("，在 URL 里面有特殊含义，所以要被替换掉："),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" = ")]),a._v("被省略、"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" + ")]),a._v("替换成"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" - ")]),a._v("，"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" / ")]),a._v("替换成"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v(" _  ")]),a._v("。这就是 Base64URL 算法。")],1),a._v(" "),t("h2",{attrs:{id:"四、jwt-的使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、jwt-的使用方式"}},[a._v("#")]),a._v(" 四、JWT 的使用方式")]),a._v(" "),t("p",[a._v("客户端收到服务器返回的 JWT，可以储存在 Cookie 里面，也可以储存在 localStorage。")]),a._v(" "),t("p",[a._v("此后，客户端每次与服务器通信，都要带上这个 JWT。你可以把它放在 Cookie 里面自动发送，但是这样不能跨域，所以更好的做法是放在 HTTP 请求的头信息"),t("font",{attrs:{color:"#e96900",padding:"10px",face:"微软雅黑"}},[a._v("Authorization")]),a._v("字段里面。")],1),a._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[a._v("Authorization"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" Bearer <token>\n")])])]),t("p",[a._v("另一种做法是，跨域的时候，JWT 就放在 POST 请求的数据体里面。")]),a._v(" "),t("h2",{attrs:{id:"五、jwt-的几个特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、jwt-的几个特点"}},[a._v("#")]),a._v(" 五、JWT 的几个特点")]),a._v(" "),t("p",[a._v("1、JWT 默认是不加密，但也是可以加密的。生成原始 Token 以后，可以用密钥再加密一次。")]),a._v(" "),t("p",[a._v("2、JWT 不加密的情况下，不能将秘密数据写入 JWT。")]),a._v(" "),t("p",[a._v("3、JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。")]),a._v(" "),t("p",[a._v("4、JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")]),a._v(" "),t("p",[a._v("5、JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的有效期应该设置得比较短。对于一些比较重要的权限，使用时应该再次对用户进行认证。")]),a._v(" "),t("p",[a._v("6、为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要使用 HTTPS 协议传输。")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);