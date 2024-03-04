import{_ as n,c as e}from"./app.e0455488.js";const s={},i=e(`<ul><li><p><code>*</code> \u8868\u793A\u5339\u914D\u591A\u4E2A\u5B57\u7B26\uFF0C\u5373\uFF1A\u901A\u914D\u7B26\uFF0C1\u4E2A\u6216\u8005\u591A\u4E2A</p></li><li><p><code>?</code> \u5339\u914D\u9664\u4E86/ \u4E4B\u5916\u7684\u4EFB\u610F<strong>\u4E00\u4E2A</strong>\u5B57\u7B26</p></li><li><p><code>[ab]</code> \u8868\u793A\u5339\u914Da\u548Cb\u5B57\u7B26</p></li><li><p><code>**</code> \u8868\u793A\u591A\u7EA7\u83DC\u5355</p></li><li><p>\u5FFD\u7565\u6587\u4EF6 name</p></li><li><p>\u5FFD\u7565\u76EE\u5F55 name/</p></li><li><p>\u53CD\u5411\u64CD\u4F5C !name/ ,\u5C31\u8868\u793A\u9664\u4E86name\u76EE\u5F55\u4E4B\u5916\u7684\u5FFD\u7565</p><p>\u4F8B\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> url
<span class="token operator">!</span>url/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>.gitignore \u6709\u4E00\u79CD\u60C5\u51B5\u4E0D\u4F1A\u751F\u6548\uFF0C\u5C31\u662F\u672C\u5730git\u5DF2\u7ECF\u8FFD\u8E2A\u4E86\u67D0\u4E2A\u6587\u4EF6\uFF0C\u6216\u8005\u76EE\u5F55\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token comment"># \u8868\u793A\u5FFD\u7565url\u9664\u4E86\u76EE\u5F55\u4E4B\u5916\u7684\u6240\u6709</span>
url
<span class="token operator">!</span>url/

<span class="token comment"># \u4F8B\u5982 abc.a u.c bdde.b</span>
*.<span class="token punctuation">[</span>abc<span class="token punctuation">]</span>

<span class="token comment"># \u5FFD\u7565\u7684\u662Fnodemodules\u4EE5\u53CA\u4E0B\u9762\u7684\u591A\u7EA7\u5185\u5BB9\uFF0C\u7B80\u800C\u8A00\u4E4B\uFF0C\u5982\u679C\u53EA\u662F\u67D0\u4E2A\u6587\u4EF6\u53EB\u505Anodemodules\u5C31\u4E0D\u4F1A\u5FFD\u7565\uFF0C\u5FC5\u987B\u6EE1\u8DB3nodemodules\u52A0\u4E0A\u591A\u7EA7\u7684\u5B50\u76EE\u5F55\u624D\u4F1A\u88AB\u5339\u914D\u4E0A</span>
nodemodules/**

<span class="token comment"># \u5FFD\u7565 url1 \u6240\u6709</span>
url1
<span class="token comment"># \u4EC5\u4EC5\u5FFD\u7565 url \u6587\u4EF6</span>
url1
<span class="token operator">!</span>url1/
<span class="token comment"># \u5FFD\u7565 url1  \u8FD9\u4E2A\u76EE\u5F55\uFF08\u5F53\u7136\u5305\u542B\u4E86\u8FD9\u4E2A\u76EE\u5F55\u7684\u6240\u6709\u5185\u5BB9\u4E5F\u88AB\u5FFD\u7565\u4E86\uFF09</span>
url1/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function l(a,d){return i}var r=n(s,[["render",l],["__file","1.html.vue"]]);export{r as default};
