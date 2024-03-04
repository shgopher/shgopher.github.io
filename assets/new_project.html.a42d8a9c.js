import{_ as d,r as c,o as i,a as t,b as s,d as n,w as a,F as l,e,c as r}from"./app.e0455488.js";const p={},u=s("h1",{id:"\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE","aria-hidden":"true"},"#"),e(" \u521B\u5EFA\u4E00\u4E2A\u65B0\u9879\u76EE")],-1),h=e("\u4E00\u65E6\u4F60"),m=e("\u5B89\u88C5\u4E86 dep"),_=e("\uFF0C\u6211\u4EEC\u9700\u8981\u4E3A\u6211\u4EEC\u7684\u9879\u76EE\u9009\u62E9\u4E00\u4E2A\u6839\u76EE\u5F55\u3002\u8FD9\u4E3B\u8981\u662F\u5173\u4E8E\u9009\u62E9\u6B63\u786E\u7684\u6839\u5BFC\u5165\u8DEF\u5F84\uFF0C\u4EE5\u53CA "),g=s("code",null,"$GOPATH/src",-1),b=e(" \u4E0B\u9762\u7684\u76F8\u5E94\u76EE\u5F55\uFF0C \u5728\u8BE5\u76EE\u5F55\u4E2D\u5B9A\u4F4D\u4F60\u7684\u9879\u76EE\u3002\u6709\u56DB\u79CD\u57FA\u672C\u53EF\u80FD\u6027:"),v=r(`<ol><li>\u4E00\u4E2A\u73B0\u5728\u6216\u8005\u6700\u7EC8\u53EF\u80FD\u4E0E\u5176\u4ED6 \u9879\u76EE/\u4EBA\u5458 \u5171\u4EAB\u6216\u5BFC\u5165 \u7684\u9879\u76EE\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u9009\u62E9\u4E0E\u5176\u9884\u671F\u7F51\u7EDC\u4F4D\u7F6E\u7684 VCS \u6839\u5BF9\u5E94\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF0C<code>$GOPATH/src/github.com/golang/dep</code>\u3002</li><li>\u4E00\u4E2A\u5B8C\u5168\u672C\u5730\u7684\u9879\u76EE - \u4F60\u65E0\u610F\u63A8\u9001\u5230\u4E2D\u592E\u670D\u52A1\u5668(\u5982 GitHub)\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code>$GOPATH/src</code> \u4E0B\u9762\u7684\u4EFB\u4F55\u5B50\u76EE\u5F55\u90FD\u53EF\u4EE5\u3002</li><li>\u4E00\u4E2A\u9700\u8981\u5B58\u5728\u4E8E\u5927\u578B\u5B58\u50A8\u5E93\u4E2D\u7684\u9879\u76EE\uFF0C\u4F8B\u5982\u516C\u53F8 monorepo\u3002 \u53EF\u80FD\uFF0C\u4F46\u4F1A\u53D8\u5F97\u66F4\u590D\u6742\u3002(\u4E0D\u5E78\u7684\u662F\uFF0C\u8FD8\u6CA1\u6709\u5173\u4E8E\u6B64\u7684\u6587\u6863 - \u5373\u5C06\u63A8\u51FA!)</li><li>\u5C06\u6574\u4E2A <code>GOPATH</code> \u89C6\u4E3A\u4E00\u4E2A\u5355\u72EC\u7684\u9879\u76EE\uFF0C\u90A3\u4E48 <code>$GOPATH/src</code> \u662F\u6839\u3002Dep <a href="https://github.com/golang/dep/issues/417" target="_blank" rel="noopener noreferrer">\u76EE\u524D\u4E0D\u652F\u6301\u6B64\u529F\u80FD</a> - \u5B83\u9700\u8981\u4E00\u4E2A\u975E\u7A7A\u7684\u5BFC\u5165\u8DEF\u5F84\uFF0C\u6765\u4F5C\u4E3A\u9879\u76EE\u5BFC\u5165\u547D\u540D\u7A7A\u95F4\u7684\u6839\u3002</li></ol><p>\u6211\u4EEC\u5C06\u5047\u8BBE\u7B2C\u4E00\u79CD\u60C5\u51B5\uFF0C\u56E0\u4E3A\u5B83\u662F\u6700\u5E38\u89C1\u7684\u60C5\u51B5\u3002\u521B\u5EFA\u5E76\u79FB\u5165\u76EE\u5F55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> -p <span class="token variable">$GOPATH</span>/src/github.com/me/example
$ <span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/github.com/me/example
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\uFF0C\u521D\u59CB\u5316\u9879\u76EE:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dep init
$ <span class="token function">ls</span>
Gopkg.toml Gopkg.lock vendor/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u50CF\u8FD9\u6837\u7684\u65B0\u9879\u76EE\u4E2D\uFF0C\u4E24\u6587\u4EF6\u548C <code>vendor</code> \u76EE\u5F55\u5B9E\u9645\u4E0A\u662F\u7A7A\u7684\u3002</p><p>\u8FD9\u4E5F\u662F\u8BBE\u7F6E\u7248\u672C\u63A7\u5236\u7684\u597D\u65F6\u673A\uFF0C\u4F8B\u5982<a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">git</a>\u3002\u867D\u7136 dep \u4E0D\u9700\u8981\u5BF9\u9879\u76EE\u8FDB\u884C\u7248\u672C\u63A7\u5236\uFF0C\u4F46\u5B83\u53EF\u4EE5\u66F4\u5BB9\u6613\u5730\u68C0\u67E5\u6B63\u5E38 dep \u64CD\u4F5C\u6240\u505A\u7684\u66F4\u6539\u3002\u6B64\u5916\uFF0C\u5B83\u57FA\u672C\u4E0A\u662F\u73B0\u4EE3 \u8F6F\u4EF6\u5F00\u53D1\u7684\u7B2C\u4E00\u6700\u4F73\u5B9E\u8DF5\uFF01</p><p>\u6B64\u65F6\uFF0C\u6211\u4EEC\u7684\u9879\u76EE\u5DF2\u521D\u59CB\u5316\uFF0C\u6211\u4EEC\u5DF2\u51C6\u5907\u597D\u5F00\u59CB\u7F16\u5199\u4EE3\u7801\u3002\u4F60\u53EF\u4EE5\u6253\u5F00\u4E00\u4E2A <code>.go</code> \u5728\u7F16\u8F91\u5668\u4E2D\u5B58\u6863\uFF0C\u5E76\u5F00\u59CB\u778E\u641E\u3002\u8981\u4E48\uFF0C<strong>\u521B\u5EFA\u7B2C\u4E00\u4E2A\u4E4B\u540E <code>.go</code> \u6587\u4EF6</strong>\uFF0C \u4F60\u53EF\u4EE5\u7EE7\u7EED\u9884\u5148\u586B\u5145\u4F60\u7684 <code>vendor</code>\uFF0C \u6765\u5305\u542B\u4E00\u4E9B\u4F60\u5DF2\u7ECF\u77E5\u9053\u7684\u4F9D\u8D56\u9879\u76EE\u7684\u76EE\u5F55:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ dep ensure -add github.com/foo/bar github.com/baz/quux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),f=e("\u73B0\u5728\u4F60\u51C6\u5907\u7EE7\u7EED\u524D\u8FDB\u5230 "),k=e("\u6BCF\u65E5 Dep"),x=e("!");function $(G,H){const o=c("RouterLink");return i(),t(l,null,[u,s("p",null,[h,n(o,{to:"/posts/2023/4/docs/Dep/docs/guides/installation.html"},{default:a(()=>[m]),_:1}),_,g,b]),v,s("p",null,[f,n(o,{to:"/posts/2023/4/docs/Dep/docs/guides/daily_dep.html"},{default:a(()=>[k]),_:1}),x])],64)}var A=d(p,[["render",$],["__file","new_project.html.vue"]]);export{A as default};
