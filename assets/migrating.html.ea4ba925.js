import{_ as i,r as n,o as l,a as p,b as o,d as t,w as c,F as r,c as s,e}from"./app.e0455488.js";const a={},_=s(`<h1 id="\u8FC1\u79FB\u5230-dep" tabindex="-1"><a class="header-anchor" href="#\u8FC1\u79FB\u5230-dep" aria-hidden="true">#</a> \u8FC1\u79FB\u5230 Dep</h1><p>\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u5C06\u73B0\u6709 GO \u9879\u76EE\u8FC1\u79FB\u5230 Dep \u662F\u5F88\u7B80\u5355\u7684\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/path/to/project/root
$ dep init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3),h=e("\u5BF9\u8BB8\u591A\u9879\u76EE\u6765\u8BF4\uFF0C\u8FD9\u5C31\u4F1A\u8D77\u4F5C\u7528\u3002"),u=o("code",null,"dep init",-1),g=e(" \u5C06\u5BF9\u4F60\u7684\u4F9D\u8D56\u9879\u4F7F\u7528\u54EA\u4E9B\u7248\u672C\u8FDB\u884C\u6709\u610F\u4E49\u7684\u731C\u6D4B\uFF0C\u751F\u6210\u5408\u7406\u7684 "),k=o("code",null,"Gopkg.toml",-1),m=e("\uFF0C"),f=o("code",null,"Gopkg.lock",-1),G=e(" \u548C "),b=o("code",null,"vendor/",-1),v=e("\uFF0C\u5982\u679C\u4F60\u7684\u6D4B\u8BD5\u901A\u8FC7\uFF0C \u5E76\u6784\u5EFA\u6210\u529F\uFF0C\u90A3\u4E48\u4F60\u53EF\u80FD\u5DF2\u7ECF\u5B8C\u6210\u4E86\u3002(\u5982\u679C\u662F\u7684\u8BDD\uFF0C\u795D\u8D3A\u4F60\uFF01\u90A3\u4F60\u7684\u4E0B\u4E00\u6B65\u5E94\u8BE5\u53BB "),D=e("\u6BCF\u65E5 Dep"),x=e(" \u770B\u770B)"),q=s('<p>\u4F46\u4E00\u4E9B\u9879\u76EE\u7684\u8FC1\u79FB\u8FC7\u7A0B\u4ECD\u4F1A\u4F1A\u51FA\u73B0\u56F0\u96BE\u3002\u5982\u679C\u4F60\u662F\u7B2C\u4E00\u6B21\u5C1D\u8BD5 dep\uFF0C\u8FD9\u53EF\u80FD\u4F1A\u7279\u522B\u4EE4\u4EBA\u6CAE\u4E27\uFF0C\u56E0\u4E3A\u4F60\u8BD5\u56FE\u540C\u65F6\u5B66\u4E60\uFF0C\u5982\u4F55\u4F7F\u7528 dep\uFF0C\u548C\u5982\u4F55\u4F7F\u7528 dep \u7BA1\u7406\u9879\u76EE\u3002 \u597D\u6D88\u606F\u662F <code>dep init</code> \u901A\u5E38\u5C31\u662F\u96BE\u5EA6\u6700\u5927\u7684\u90A3\u5EA7\u5C71\u5CF0; \u4E00\u65E6\u4F60\u8DE8\u8FC7\u5B83\uFF0C\u4E8B\u60C5\u5C31\u53D8\u5F97\u5BB9\u6613\u591A\u4E86\u3002</p><p>\u672C\u6307\u5357\u7684\u76EE\u7684\u662F\u63D0\u4F9B\u8DB3\u591F\u7684\u4FE1\u606F\uFF0C\u8BA9\u4F60\u5BF9 <code>dep init</code> \u53D1\u751F\u7684\u4E8B\u60C5\u8FDB\u884C\u63A8\u7406\u3002\u8FD9\u6837\uFF0C\u4F60\u81F3\u5C11\u53EF\u4EE5\u7406\u89E3\u4F60\u9047\u5230\u7684\u662F\u4EC0\u4E48\u6837\u7684\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u91C7\u53D6\u4EC0\u4E48\u6B65\u9AA4\u6765\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898\u3002 \u4E3A\u6B64\uFF0C\u6211\u4EEC\u5C06\u9996\u5148\u6982\u8FF0\u4E00\u4E0B <code>dep init</code> \u505A\u4E86\u5565\u3002</p><blockquote><p>\u6CE8\u610F\uFF1A\u7B2C\u4E00\u6B21\u8FD0\u884C <code>dep init</code> \u53EF\u80FD\u9700\u8981\u76F8\u5F53\u957F\u7684\u65F6\u95F4\uFF0C\u56E0\u4E3A Dep \u6B63\u5728\u628A\u4F60\u6240\u6709\u7684\u4F9D\u8D56\u9879\u7684\u65B0\u514B\u9686\u521B\u9020\u5230\u4E00\u4E2A\u6307\u5B9A\u7684\u4F4D\u7F6E\uFF0C<code>$GOPATH/pkg/dep/sources/</code>\u3002 \u8FD9\u5BF9\u4E8E Dep \u7684\u6B63\u5E38\u64CD\u4F5C\u662F\u5FC5\u8981\u7684\uFF0C\u5E76\u4E14\u5728\u5F88\u5927\u7A0B\u5EA6\u4E0A\u4EC5\u662F\u4E00\u6B21\u6027\u6210\u672C\u3002</p></blockquote><h2 id="dep-init-\u529B\u5B66" tabindex="-1"><a class="header-anchor" href="#dep-init-\u529B\u5B66" aria-hidden="true">#</a> <code>dep init</code> \u529B\u5B66</h2><p>\u8FC1\u79FB\u73B0\u6709\u9879\u76EE\u65F6\uFF0C\u9996\u8981\u76EE\u6807\u662F <code>dep init</code> \u5C3D\u53EF\u80FD\u81EA\u52A8\u5316\u521B\u5EFA\u4E00\u4E2A <code>Gopkg.toml</code>\u3002\u8FD9\u5FC5\u7136\u662F\u4E00\u4E2A\u542F\u53D1\u6027\u7684\u76EE\u6807\uFF0C\u56E0\u4E3A Dep \u5BF9\u4E8E\u4F60\u4E4B\u524D\u6240\u505A\u7684\u4E00\u5207\u53EF\u80FD\u6CA1\u6709 <code>1:1</code> \u7684\u5BF9\u5E94\u5173\u7CFB\u3002 \u56E0\u6B64\uFF0C\u91CD\u8981\u7684\u662F\uFF0C\u671F\u5F85 <code>dep init</code> \u80FD\u5C3D\u529B\u800C\u4E3A\uFF0C \u8FDB\u884C\u7740\u81EA\u52A8\u5316\u8FC1\u79FB\u3002</p><p><code>dep init</code> \u884C\u4E3A\u53D6\u51B3\u4E8E\u73B0\u6709\u4EE3\u7801\u5E93\u4E2D\u7684\u5185\u5BB9\u548C\u4F20\u9012\u7ED9\u5B83\u7684\u547D\u4EE4\u53C2\u6570\u3002\u7136\u800C\uFF0C\u5B83\u603B\u662F\u5206\u4E24\u4E2A\u9636\u6BB5\u8FDB\u884C:</p><ol><li>*\u63A8\u7406\u9636\u6BB5:*\u4ECE\u5404\u79CD\u6765\u6E90\u63A8\u7406\u89C4\u5219\u548C\u63D0\u793A\uFF0C\u8BF4\u660E\u4F7F\u7528\u54EA\u4E9B\u7248\u672C\u7684\u4F9D\u8D56\u9879\u3002</li><li>*\u6C42\u89E3\u9636\u6BB5:*\u5728 Dep \u7684\u6A21\u578B\u4E0B\u8BBE\u8BA1\u4E00\u4E2A\u53EF\u4EE5\u63A5\u53D7\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u540C\u65F6\u5C3D\u53EF\u80FD\u591A\u5730\u7ED3\u5408\u4E0A\u9762\u7684\u63A8\u7406\u7ED3\u8BBA\u3002</li></ol><h3 id="\u63A8\u7406\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u63A8\u7406\u9636\u6BB5" aria-hidden="true">#</a> \u63A8\u7406\u9636\u6BB5</h3><p><code>dep init</code> \u7684\u63A8\u7406\u9636\u6BB5\u5176\u884C\u4E3A\u5404\u4E0D\u76F8\u540C\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>dep init</code> \u5C06\u67E5\u770B\u4F60\u7684\u4EE3\u7801\u5E93\u4E2D <a href="https://github.com/golang/dep/tree/master/internal/importers" target="_blank" rel="noopener noreferrer">\u5176\u4ED6\u53EF\u4EE5\u7406\u89E3\u7684 GO \u5305\u7BA1\u7406\u5DE5\u5177</a> \u7684\u5143\u6570\u636E\u6587\u4EF6\uFF0C \u4EE5\u53CA\u5C1D\u8BD5\u81EA\u52A8\u5C06\u8FD9\u4E9B\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u8FC1\u79FB\u5230\u5408\u9002\u7684 dep \u6982\u5FF5\u4E2D\u3002\u6839\u636E\u5DE5\u5177\u548C dep \u627E\u5230\u7684\u7279\u5B9A\u503C\uFF0C\u53EF\u4EE5\u5C06\u6765\u81EA\u5DE5\u5177\u7684\u5143\u6570\u636E\u89C6\u4E3A:</p><ul><li>\u4E00\u4E2A <strong>hint</strong>: dep\u5728\u6C42\u89E3\u9636\u6BB5\u4F1A\u5C3D\u529B\u9075\u5B88\u7684\u4FE1\u606F\uFF0C\u4F46\u662F\u5982\u679C\u5B83\u627E\u4E0D\u5230\u9075\u5FAA\u63D0\u793A\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5C31\u4F1A\u4E22\u5F03\u8FD9\u4E9B\u4FE1\u606F\u3002</li><li>\u4E00\u4E2A <strong>rule</strong>: \u5728\u6C42\u89E3\u9636\u6BB5\u5FC5\u987B\u9075\u5B88\u7684\u4FE1\u606F\uFF0C\u6700\u7EC8\u5C06\u4F5C\u4E3A\u4E00\u4E2A <code>[[constraint]]</code> \u51FA\u73B0\u5728 <code>Gopkg.toml</code> \u6587\u4EF6\u3002 \u5982\u679C\u6C42\u89E3\u9636\u6BB5\u4E0D\u80FD\u627E\u5230\u6EE1\u8DB3\u89C4\u5219\u7684\u89E3\u51B3\u65B9\u6848\uFF0C \u90A3\u4E48\u5B83\u4F1A\u5931\u8D25\uFF0C\u4E14\u5E26\u6709\u4E00\u4E2A\u6D88\u606F\u3002</li></ul><p>\u6709\u4E09\u79CD\u60C5\u51B5\u53EF\u4EE5\u5BFC\u81F4 Dep \u4E0D\u505A\u4EFB\u4F55\u57FA\u4E8E\u5DE5\u5177\u7684\u63A8\u7406:</p><ul><li>\u4F60\u7684\u9879\u76EE\u4E0D\u4F7F\u7528\u5305\u7BA1\u7406\u5DE5\u5177</li><li>Dep \u8FD8\u4E0D\u652F\u6301\u4F60\u4F7F\u7528\u7684\u5DE5\u5177</li><li>\u901A\u8FC7 <code>dep init -skip-tools</code></li></ul><p>\u5728\u57FA\u4E8E\u5DE5\u5177\u7684\u63A8\u7406\u5B8C\u6210\u4E4B\u540E\uFF0Cdep \u901A\u5E38\u4F1A\u8FDB\u5165\u6C42\u89E3\u9636\u6BB5\u3002\u4F46\u662F\uFF0C\u5982\u679C\u7528\u6237\u4F20\u9012 <code>-gopath</code> \u6807\u5FD7\uFF0Cdep \u5C06\u9996\u5148\u5C1D\u8BD5\u901A\u8FC7\u68C0\u67E5\u5305\u542B <code>GOPATH</code> \u7684\u5F53\u524D\u9879\u76EE\u6765\u586B\u5145\u4ECE\u5DE5\u5177 \u5143\u6570\u636E\u4E2D\u63D0\u53D6\u7684\u63A8\u65AD\u4E2D\u7684\u4EFB\u4F55\u6F0F\u6D1E\u3002 \u53EA\u4ECE <code>GOPATH</code> \u6536\u96C6\u63D0\u793A\uFF0C\u5B83\u4EEC\u6C38\u8FDC\u4E0D\u4F1A\u53D6\u4EE3\u5DE5\u5177\u5143\u6570\u636E\u7684\u63A8\u8BBA\u3002 \u5982\u679C\u4F60\u60F3\u5B8C\u5168\u638C\u63A7 <code>GOPATH</code>\uFF0C\u8BF7\u4F20\u9012\u4E24\u4E2A\u6807\u5FD7\uFF1A<code>dep init -skip-tools -gopath</code>\u3002</p><p>\u4E00\u65E6 Dep \u7F16\u8BD1\u4E86\u5B83\u7684\u63A8\u7406\u96C6\u5408\uFF0C\u5B83\u5C31\u5F00\u59CB\u6C42\u89E3\u3002</p><h3 id="\u6C42\u89E3\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6C42\u89E3\u9636\u6BB5" aria-hidden="true">#</a> \u6C42\u89E3\u9636\u6BB5</h3>',15),O=e("\u4E00\u65E6\u63A8\u7406\u9636\u6BB5\u5B8C\u6210\uFF0C\u5DF2\u7EC4\u88C5\u7684\u89C4\u5219\u548C\u63D0\u793A\u96C6\u5C06\u88AB\u4F20\u9012\u7ED9\u5176 "),P=e("\u6C42\u89E3\u5668"),T=e("\uFF0C\u4EE5\u8BA1\u7B97\u51FA\u4E00\u4E2A\u5B8C\u6574\u7684 "),A=o("code",null,"depgraph",-1),H=e("\uFF0C\u6700\u7EC8\u5C06\u8BB0\u5F55\u4E3A "),N=o("code",null,"Gopkg.lock",-1),L=e("\u3002 "),V=o("code",null,"dep ensure",-1),$=e(" \u4E5F\u662F\u76F8\u540C\u7684\u6C42\u89E3\u8FC7\u7A0B\u3002\u5E76\u4E14\u6210\u529F\u5B8C\u6210\u5B83\uFF0C\u610F\u5473\u7740dep\u5DF2\u7ECF\u627E\u5230\u9075\u5B88\u6240\u6709\u63A8\u7406\u89C4\u5219\u7684\u4F9D\u8D56\u7248\u672C\u7684\u7EC4\u5408\uFF0C\u4EE5\u53CA\u5C3D\u53EF\u80FD\u591A\u7684\u63A8\u7406\u63D0\u793A\u3002\u5982\u679C\u89E3\u51B3\u6210\u529F\uFF0C\u90A3\u4E48\u8F9B\u82E6\u7684\u5DE5\u4F5C\u5C31\u5B8C\u6210\u4E86; \u5269\u4E0B\u7684\u5927\u90E8\u5206\u662F\u5199\u51FA "),B=o("code",null,"Gopkg.toml",-1),C=e("\uFF0C"),w=o("code",null,"Gopkg.lock",-1),y=e(" \u548C "),F=o("code",null,"vendor/",-1),R=e("\u3002"),S=s('<p>\u6C42\u89E3\u5668\u8FD4\u56DE\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\uFF0C\u8BE5\u89E3\u51B3\u65B9\u6848\u672C\u8EAB\u53EA\u662F <a href="https://godoc.org/github.com/golang/dep#Lock" target="_blank" rel="noopener noreferrer">Gopkg.lock \u4E2D\u5B58\u50A8\u7684\u6570\u636E</a> \u7684\u8868\u793A\uFF1A \u6574\u4E2A\u4F9D\u8D56\u5173\u7CFB\u56FE\u7684\u53EF\u4F20\u9012\u5B8C\u6574\uFF0C\u53EF\u91CD\u73B0\u7684 <a href="https://godoc.org/github.com/golang/dep/gps#Solution" target="_blank" rel="noopener noreferrer">\u5FEB\u7167</a>\u3002\u4ECE\u4E00\u4E2A\u89E3\u51B3\u65B9\u6848\u5199\u51FA <code>Gopkg.lock</code>\uFF0C \u53EA\u4E0D\u8FC7\u662F\u4E00\u4E2A\u590D\u5236\u548C\u7F16\u7801{<strong>copy-and-encode</strong>}\u64CD\u4F5C\uFF0C\u548C\u5199 <code>vendor/</code> \u65F6\uFF0C\u5C06\u6307\u5B9A\u7684\u89E3\u51B3\u65B9\u6848\u4E2D\u5217\u51FA\u7684\u6BCF\u4E00\u4E2A\u9879\u76EE\uFF0C\u653E\u5230\u6307\u5B9A\u7684\u4FEE\u8BA2\u4E2D\u3002 \u8FD9\u4E0E <code>dep ensure</code> \u7684\u884C\u4E3A\u5B8C\u5168\u4E00\u6837\u3002</p><p><code>Gopkg.toml</code> \u6709\u70B9\u4E0D\u540C\u3002\u4E0D\u80FD\u4FDD\u8BC1\u4E3A\u4F60\u9879\u76EE\u7684\u6240\u6709(\u751A\u81F3\u4EFB\u4F55)\u4F9D\u8D56\u63A8\u7406\u51FA\u89C4\u5219\uFF0C\u4F46\u6211\u4EEC\u4ECD\u7136\u5E0C\u671B\u586B\u5145 <code>Gopkg.toml</code> \u5E26\u6709\u4E9B\u8BB8\u5408\u7406\u7684\u503C\u3002\u56E0\u6B64\uFF0C\u5BF9\u4E8E\u672A\u63A8\u7406\u89C4\u5219\u7684\u4EFB\u4F55\u4F9D\u8D56\u9879\uFF0C dep \u68C0\u67E5\u89E3\u51B3\u65B9\u6848\uFF0C\u4EE5\u67E5\u770B\u6700\u7EC8\u9009\u62E9\u4E86\u4EC0\u4E48\u7248\u672C\uFF0C\u5E76\u57FA\u4E8E\u6B64\u521B\u5EFA\u7EA6\u675F:</p><ul><li>\u5982\u679C\u4E00\u4E2A\u5206\u652F\uFF0C\u50CF <code>master</code>\uFF0C\u5728\u89E3\u51B3\u65B9\u6848\u4E2D\u88AB\u9009\u4E2D\u3002<code>branch: &quot;master&quot;</code> \u5C06\u51FA\u73B0\u5728 <code>Gopkg.toml</code>\u3002</li><li>\u5982\u679C\u9009\u62E9\u4E86\u7B26\u5408\u8BED\u4E49\u7248\u672C\u7684\u7248\u672C\uFF0C\u50CF <code>v1.2.0</code>\uFF0C\u7136\u540E\u5C06\u6307\u5B9A\u4E3A\u6700\u5C0F\u7248\u672C: <code>version: &quot;v1.2.0&quot;</code>\u3002</li><li>\u5982\u679C\u53EA\u9009\u62E9\u539F\u59CB\u4FEE\u8BA2\u7248\uFF0C\u5219 <code>Gopkg.toml</code> \u6CA1\u6709\u4EFB\u4F55\u5185\u5BB9\u3002 \u800C Dep \u786E\u5B9E\u7EA6\u675F\u4E86 <code>Gopkg.toml</code> \u4E2D\u7684 <code>revision: &quot;\u2026&quot;</code>\uFF0C\u56E0\u4E3A\u4F7F\u7528\u5B83\u4EEC\u88AB\u8BA4\u4E3A\u662F\u53CD\u6A21\u5F0F\uFF0C \u56E0\u6B64 dep \u4E0D\u4F1A\u81EA\u52A8\u521B\u5EFA\u5B83\u4EEC\u4EE5\u907F\u514D\u9690\u542B\u5730\u9F13\u52B1\u5B83\u4EEC\u7684\u4F7F\u7528\u3002</li></ul><h2 id="\u5904\u7406\u5931\u8D25" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u5931\u8D25" aria-hidden="true">#</a> \u5904\u7406\u5931\u8D25</h2><p>\u9996\u5148\uFF0C\u786E\u4FDD\u4F60 <code>dep init</code> \u5E26 <code>-v</code>\u3002\u8FD9\u5C06\u63D0\u4F9B\u66F4\u591A\u7684\u4FE1\u606F\u3002</p><p><code>dep init</code>\uFF0C\u901A\u5E38\u6765\u8BF4\u4E0E Dep \u4E00\u6837\uFF0C\u5B83\u65E2\u6709\u786C\u6A21\u5F0F\u53C8\u6709\u8F6F\u6545\u969C\u6A21\u5F0F\u3002\u786C\u6545\u969C\u5BFC\u81F4\u8FDB\u7A0B\u6302\u8D77\u6216\u5B8C\u5168\u4E2D\u6B62\uFF0C\u4E14\u6CA1\u6709\u4EFB\u4F55\u4E1C\u897F\u5199\u5165\u78C1\u76D8\u3002 \u8F6F\u6545\u969C\u53EF\u80FD\u5305\u62EC\u6216\u4E0D\u5305\u62EC\u8B66\u544A\uFF0C \u4F46\u6700\u7EC8\u5199\u5165 <code>Gopkg.toml</code>\uFF0C<code>Gopkg.lock</code> \u548C <code>vendor/</code> -\u53EA\u662F\u90FD\u4E0D\u662F\u4F60\u60F3\u8981\u7684\u800C\u5DF2\u3002\u5728\u6211\u4EEC\u6DF1\u5165\u7814\u7A76\u8FD9\u4E9B\u5185\u5BB9\u4E4B\u524D\uFF0C\u8BA9\u6211\u4EEC\u6765\u8BBE\u7F6E\u4E00\u4E9B\u4E0A\u4E0B\u6587\u3002</p><p>\u867D\u7136 dep \u8D21\u732E\u8005\u5DF2\u7ECF\u6295\u5165\u4E86\u5DE8\u5927\u7684\u52AA\u529B\u6765\u521B\u5EFA\u5230 dep \u7684\u81EA\u52A8\u8FC1\u79FB\u8DEF\u5F84\uFF0C\u4F46\u662F\u8FD9\u4E9B\u8DEF\u5F84\u4EC5\u662F\u5C3D\u529B\u800C\u4E3A\u5E76\u4E14\u4E0D\u7CBE\u786E\u3002 \u4ECE\u5176\u4ED6\u5DE5\u5177\u6216 <code>GOPATH</code> \u8F6C\u6362\u4E3A\u5B8C\u5168\u4FDD\u771F\u5E76\u4E0D\u603B\u5BF9\u7684\u3002 dep \u662F\u4E00\u4E2A\u81EA\u4EE5\u4E3A\u662F\u7684\u5DE5\u5177\uFF0C\u5177\u6709\u76F8\u5E94\u7684\u81EA\u4EE5\u4E3A\u662F\u7684\u6A21\u578B\uFF0C\u5E76\u4E14\u8BE5\u6A21\u578B\u6709\u65F6\u786E\u5B9E\u4E0E\u5176\u4ED6\u5DE5\u5177\u6709\u6839\u672C\u7684\u4E0D\u540C\u3002\u6709\u65F6\u8FD9\u4E9B\u6A21\u578B\u4E0D\u5339\u914D\u5BFC\u81F4\u786C\u6545\u969C\uFF0C\u6709\u65F6\u662F\u8F6F\u7684\uFF0C\u603B\u662F\u5145\u6EE1\u4E0D\u786E\u5B9A\u6027\u3002</p><p>\u56E0\u4E3A\u8FD9\u4E9B\u90FD\u662F\u6DF1\u5C42\u6B21\u7684\u5047\u8BBE\uFF0C\u4ED6\u4EEC\u7684\u75C7\u72B6\u53EF\u4EE5\u662F\u591A\u6837\u7684\u548C\u4EE4\u4EBA\u60CA\u8BB6\u7684\u3002\u8BB0\u4F4F\u8FD9\u4E9B\u5047\u8BBE\u53EF\u4EE5\u5E2E\u4F60\u8282\u7701\u4E00\u4E9B\u65F6\u95F4\u3002</p><ol><li>Dep \u4E0D\u5141\u8BB8\u5D4C\u5957 <code>vendor/</code> \u76EE\u5F55;\u5B83\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u4E0B\uFF0C\u5C06\u6240\u6709\u4F9D\u8D56\u9879\u5E73\u94FA\u5230 <code>vendor/</code> \u76EE\u5F55\u7684\u6700\u9876\u5C42\u3002\u8FD9\u662F Dep \u6A21\u578B\u7684\u57FA\u7840\uFF0C\u4E0D\u80FD\u88AB\u7981\u7528\u3002</li><li>Dep \u6574\u4F53\u63A7\u5236 <code>vendor</code>\uFF0C\u5E76\u5C06\u5439\u6389\u4EFB\u4F55\u4E0E\u4E0A\u6E38\u6E90 dep \u9009\u62E9\u7248\u672C\u4E0D\u540C\u7684\u624B\u52A8\u66F4\u6539\u6216\u6DFB\u52A0\u3002</li><li>Dep \u8981\u6C42\u6765\u81EA\u7ED9\u5B9A\u9879\u76EE/\u4ED3\u5E93\u7684\u6240\u6709\u5305\u90FD\u5728\u540C\u4E00\u7248\u672C\u3002</li><li>Dep \u901A\u5E38\u4E0D\u5173\u5FC3 <code>GOPATH</code> \u4E0A\u7684\u5185\u5BB9; \u5B83\u53EA\u5904\u7406\u6E90\u81EA\u8FDC\u7A0B\u7F51\u7EDC\u4F4D\u7F6E\u7684\u9879\u76EE\u3002(\u63D0\u793A\u63A8\u7406\u662F\u552F\u4E00\u7684\u4F8B\u5916;\u4E00\u65E6\u89E3\u51B3\u9636\u6BB5\u5F00\u59CB\uFF0C<code>GOPATH</code> \u2014\u2014\u4EE5\u53CA\u4F60\u5BF9\u4EE3\u7801\u6240\u505A\u7684\u4EFB\u4F55\u81EA\u5B9A\u4E49\u66F4\u6539\u2014\u2014\u5C06\u88AB\u5FFD\u7565\u3002)</li><li>Dep \u901A\u5E38\u503E\u5411\u4E8E\u8BED\u4E49\u7248\u672C\u6807\u8BB0\u7684\u53D1\u5E03\u5230\u5206\u652F(\u5F53\u6CA1\u6709\u7ED9\u51FA\u4EFB\u4F55\u9644\u52A0\u89C4\u5219)\u65F6\u3002\u8FD9\u662F\u4ECE <code>go get</code> \u8FD8\u6709\u5176\u4ED6\u4E00\u4E9B\u5DE5\u5177\u7684&quot;\u9ED8\u8BA4\u5206\u652F&quot;\u6A21\u578B\u7684\u91CD\u5927\u8F6C\u53D8\u3002\u5B83\u53EF\u4EE5\u5BFC\u81F4 Dep \u505A\u51FA\u60CA\u5413\u7684\u9009\u62E9\uFF0C \u53EA\u56E0\u65E0\u6CD5\u63A8\u7406\u4E00\u4E2A\u89C4\u5219\u7684\u4F9D\u8D56\u3002</li><li>Dep \u5047\u5B9A\u6240\u6709\u751F\u6210\u7684\u4EE3\u7801\u90FD\u5B58\u5728\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u63D0\u4EA4\u7ED9\u6E90\u3002</li></ol><p>\u8FC4\u4ECA\u4E3A\u6B62\uFF0C\u5F88\u5C11\u6709\u9879\u76EE\u80FD\u591F\u627E\u5230\u4E00\u79CD\u5408\u7406\u7684\u65B9\u6CD5\u6765\u9002\u5E94\u8FD9\u4E9B\u8981\u6C42\u3002 \u5982\u679C\u4F60\u4E0D\u80FD\u60F3\u51FA\u5982\u4F55\u4F7F\u4F60\u7684\u9879\u76EE\u9002\u5408\uFF0C\u8BF7\u63D0\u4EA4\u4E00\u4E2A\u95EE\u9898-\u867D\u7136 dep \u5FC5\u7136\u4E0D\u80FD\u9002\u5E94\u6BCF\u4E00\u4E2A\u73B0\u6709\u7684\u65B9\u6CD5\uFF0C\u5B83\u7684\u76EE\u6807\u662F\u5B9A\u4E49\u89C4\u5219\uFF0C \u6240\u6709\u7684 Go \u9879\u76EE\u53EF\u4EE5\u5408\u7406\u5730\u9002\u5E94\u3002</p><h3 id="\u786C\u6545\u969C" tabindex="-1"><a class="header-anchor" href="#\u786C\u6545\u969C" aria-hidden="true">#</a> \u786C\u6545\u969C</h3>',11),j=e("\u6240\u6709\u7684\u786C\u6545\u969C\u6A21\u5F0F\u5728\u53C2\u8003\u6587\u732E\u4E2D\u88AB\u5E7F\u6CDB\u5730\u8986\u76D6\u3002"),E=e("\u5931\u6548\u6A21\u5F0F"),M=e("\u3002"),Y=e("\u56E0\u4E3A\u6C42\u89E3\u5668\u53CA\u5176\u6240\u6709\u53EF\u80FD\u7684\u6545\u969C\u90FD\u662F\u76F8\u540C\u7684\u3002"),z=o("code",null,"dep init",-1),I=e(" \u4EE5\u53CA "),J=o("code",null,"dep ensure",-1),K=e(" \u6709\u4E00\u4E2A\u5355\u72EC\u7684\u90E8\u5206\u6765\u7406\u89E3\u548C\u5904\u7406\u5B83\u4EEC: "),Q=e("\u89E3\u51B3\u6545\u969C\u5904\u7406"),U=e("\u3002"),W=o("code",null,"dep init",-1),X=e(" \u8FD9\u53EF\u80FD\u66F4\u68D8\u624B\uFF0C\u7136\u800C\uFF0C\u5176\u5B9E\u8BB8\u591A\u8865\u6551\u63AA\u65BD\u9700\u8981\u8C03\u6574 "),Z=o("code",null,"Gopkg.toml",-1),ee=e("\u3002"),oe=o("p",null,[e("\u4E0D\u5E78\u7684\u662F\uFF0C\u5F53 "),o("code",null,"dep init"),e(" \u5931\u8D25\u65F6\uFF0C\u5B83\u4E0D\u4F1A\u5199\u51FA\u90E8\u5206 "),o("code",null,"Gopkg.toml"),e("\u3002\u8FD9\u662F\u4E00\u4E2A\u5DF2\u77E5\u7684\u3001\u5173\u952E\u7684\u95EE\u9898\uFF0C "),o("a",{href:"https://github.com/golang/dep/issues/909",target:"_blank",rel:"noopener noreferrer"},"\u6211\u4EEC\u6709\u4E00\u4E2A\u5F00\u653E\u7684\u95EE\u9898(\u9700\u8981\u5E2E\u52A9!)"),e("\u3002")],-1),de=e("\u540C\u65F6\uFF0C\u5982\u679C\u4F60\u9047\u5230\u7684\u7279\u5B9A\u9519\u8BEF\u786E\u5B9E\u9700\u8981 "),te=o("code",null,"Gopkg.toml",-1),ce=e(" \u8C03\u6574\u4E00\u4E0B\uFF0C\u4E0D\u5E78\u7684\u662F\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u5B8C\u6210 "),se=o("code",null,"dep init",-1),ie=e(" \u64CD\u4F5C: \u521B\u5EFA\u4E00\u4E2A\u7A7A "),ne=o("code",null,"Gopkg.toml",-1),le=e("\uFF0C \u5E76\u7528\u624B\u5DE5\u586B\u5145\u89C4\u5219\u3002\u5728\u91CD\u6392\u4E4B\u524D\uFF0C\u786E\u4FDD\u4F60\u5DF2\u7ECF "),pe=o("code",null,"dep init",-1),re=e(" \u5177\u6709\u63A8\u7406\u53C2\u6570\u7684\u5404\u79CD\u7EC4\u5408("),ae=o("code",null,"-skip-tools",-1),_e=e(" \u548C "),he=o("code",null,"-gopath",-1),ue=e(")\uFF0C \u770B\u770B\u4ED6\u4EEC\u80FD\u4E0D\u80FD\u7ED9\u4F60\u70B9\u4E1C\u897F\u3002"),ge=s('<h3 id="\u8F6F\u6545\u969C" tabindex="-1"><a class="header-anchor" href="#\u8F6F\u6545\u969C" aria-hidden="true">#</a> \u8F6F\u6545\u969C</h3><p>\u8F6F\u6545\u969C\u5C31\u662F <code>dep init</code> \u4F3C\u4E4E\u5E72\u51C0\u5730\u9000\u51FA\u7684\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F46\u968F\u540E <code>go build</code> \u6216 <code>go test</code> \u5931\u8D25\u3002Dep \u7684\u8F6F\u6545\u969C\u901A\u5E38\u6BD4\u7EC6\u5FAE\u9519\u8BEF\u5927\u5F97\u591A\uFF0C\u4F8B\u5982\uFF0C\u5F53\u4F60\u5C1D\u8BD5\u6784\u5EFA\u65F6\uFF0C\u7C7B\u578B\u9519\u8BEF\u53D1\u751F\u7206\u70B8\uFF0C \u56E0\u4E3A\u9009\u62E9\u4E86\u4E00\u4E9B\u4F9D\u8D56\u7684\u9519\u8BEF\u7248\u672C\u3002</p><p>\u5982\u679C\u4F60\u9047\u5230\u8FD9\u6837\u7684\u95EE\u9898\uFF0C<code>dep status</code> \u662F\u4F60\u7684\u7B2C\u4E00\u4E2A\u8BCA\u65AD\u6B65\u9AA4;\u5B83\u5C06\u62A5\u544A\u4E3A\u4F60\u7684\u6240\u6709\u4F9D\u8D56\u9879\u9009\u62E9\u4E86\u54EA\u4E9B\u7248\u672C\u3002\u5F88\u663E\u7136\uFF0C\u4F9D\u8D56\u5173\u7CFB\u4EC5\u4EC5\u662F\u4ECE build \u6216 test \u9519\u8BEF\u6D88\u606F\u4E2D\u4EA7\u751F\u7684\u95EE\u9898\u3002 \u5982\u679C\u6CA1\u6709\uFF0C\u6BD4\u8F83 <code>dep status</code> \u5217\u51FA\u4E0E\u524D\u4E00\u4E2A\u5DE5\u5177\u8BB0\u5F55\u7684\u7248\u672C\uFF0C\u627E\u51FA\u5DEE\u5F02\u3002</p><p>\u4E00\u65E6\u786E\u5B9A\u4E86\u6709\u95EE\u9898\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E0B\u4E00\u6B65\u5C31\u662F\u5BF9\u5B83\u4EEC\uFF0C \u5728 <code>Gopkg.toml</code> \u8FDB\u884C\u9002\u5F53\u7684\u63A7\u5236\u3002</p>',4),ke=e("\u5BF9\u4E8E\u4E0B\u9762\u7684\u6BCF\u4E00\u9879\uFF0C \u90FD\u5047\u8BBE\u5728\u63D0\u51FA\u5EFA\u8BAE\u7684\u6539\u53D8\u4E4B\u540E\uFF0C\u4F60\u5E94\u8BE5\u8FD0\u884C "),me=o("code",null,"dep ensure",-1),fe=e("\u3002\u5982\u679C\u5931\u8D25\uFF0C\u8BF7\u6559"),Ge=e("\u89E3\u51B3\u6545\u969C\u5904\u7406"),be=e("\u3002"),ve=s('<ul><li>\u5982\u679C <code>[[constraint]]</code> \u9519\u4E86\u88AB\u63A8\u7406\u4E3A\u4F60\u7684\u76F4\u63A5\u4F9D\u8D56\u4E4B\u4E00\uFF0C\u6539\u53D8\u5B83\u3002\u7136\u540E\uFF0C\u5411 Dep \u63D0\u4EA4\u4E00\u4E2A\u95EE\u9898-\u800C <code>dep init</code> \u53EF\u4EE5\u9009\u62E9\u7701\u7565\u7EA6\u675F\uFF0C\u9519\u8BEF\u5730\u8F6C\u6362\u53EF\u4EE5\u8BA4\u4E3A\u662F\u4E00\u4E2A bug\u3002</li><li>\u5982\u679C\u4F60\u7684\u4F20\u9012\u4F9D\u8D56\u9879\u4F4D\u4E8E\u9519\u8BEF\u7684\u7248\u672C\u4E2D\uFF0C\u5219\u628A <code>[[override]]</code> \u5B9A\u4E49\u903C\u5230\u4F60\u9700\u8981\u7684\u7248\u672C\u3002 <ul><li>\u5982\u679C\u4F60\u9700\u8981\u7684\u7248\u672C\u662F\u7279\u5B9A\u7684Git\u63D0\u4EA4\uFF0C\u90A3\u4E48\u6700\u597D\u5728\u90A3\u4E2A\u9879\u76EE\u7684 <code>Gopkg.lock</code>\uFF0C \u624B\u52A8\u66F4\u6539 <code>revision</code> \u671F\u671B\u7684\u6563\u5217\uFF0C\u7136\u540E\u653E\u5F03<code>version</code>\u6216<code>branch</code>\u5B57\u6BB5(\u5982\u679C\u6709\u7684\u8BDD)\u3002</li></ul></li><li>\u5982\u679C\u4F60\u7684\u4E00\u4E2A\u76F4\u63A5\u4F9D\u8D56\u662F\u9519\u8BEF\u7684\u7248\u672C\uFF0C \u5E76\u4E14 <code>Gopkg.toml</code> \u5DF2\u6CA1\u6709 <code>[[constraint]]</code> \u5173\u4E8E\u5B83\uFF0C \u90A3\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u5408\u9002\u7684\u3002 <ul><li>\u4E0E\u4F20\u9012\u4F9D\u8D56\u5173\u7CFB\u4E00\u6837\uFF0C\u5982\u679C\u9700\u8981\u7684\u7248\u672C\u662F\u7279\u5B9A\u7684Git\u63D0\u4EA4\uFF0C\u5219\u6700\u597D\u5BF9 <code>Gopkg.lock</code> \u624B\u52A8\u64CD\u4F5C\u3002</li></ul></li></ul><p>\u5E0C\u671B\u8FD9\u4E9B\u4FE1\u606F\u8DB3\u4EE5\u5E2E\u52A9\u4F60\u901A\u8FC7\u9879\u76EE\u8FC1\u79FB\u5230 dep\u3002\u5982\u679C\u6CA1\u6709\uFF0C\u8BF7\u968F\u65F6\u63D0\u4EA4\u95EE\u9898\uFF0C\u6216\u8005\u52A0\u5165 \u6211\u4EEC <a href="https://gophers.slack.com/messages/C0M5YP9LN" target="_blank" rel="noopener noreferrer">#vendor on the Gopher&#39;s slack</a> \u5BFB\u6C42\u5E2E\u52A9!</p>',2);function De(xe,qe){const d=n("RouterLink");return l(),p(r,null,[_,o("p",null,[h,u,g,k,m,f,G,b,v,t(d,{to:"/posts/2023/4/docs/Dep/docs/guides/daily_dep.html"},{default:c(()=>[D]),_:1}),x]),q,o("p",null,[O,t(d,{to:"/posts/2023/4/docs/Dep/docs/references/the_solver.html"},{default:c(()=>[P]),_:1}),T,A,H,N,L,V,$,B,C,w,y,F,R]),S,o("p",null,[j,t(d,{to:"/posts/2023/4/docs/Dep/docs/references/failure_modes.html"},{default:c(()=>[E]),_:1}),M]),o("p",null,[Y,z,I,J,K,t(d,{to:"/posts/2023/4/docs/Dep/docs/references/failure-modes.html#solving-failures"},{default:c(()=>[Q]),_:1}),U,W,X,Z,ee]),oe,o("p",null,[de,te,ce,se,ie,t(d,{to:"/posts/2023/4/docs/Dep/docs/guides/Gopkg.toml.html"},{default:c(()=>[ne]),_:1}),le,pe,re,ae,_e,he,ue]),ge,o("p",null,[ke,me,fe,t(d,{to:"/posts/2023/4/docs/Dep/docs/references/failure-modes.html#solving-failures"},{default:c(()=>[Ge]),_:1}),be]),ve],64)}var Pe=i(a,[["render",De],["__file","migrating.html.vue"]]);export{Pe as default};
