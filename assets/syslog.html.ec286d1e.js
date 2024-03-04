import{_ as n,c as s}from"./app.e0455488.js";const a={},o=s(`<h1 id="syslog-hooks-for-logrus" tabindex="-1"><a class="header-anchor" href="#syslog-hooks-for-logrus" aria-hidden="true">#</a> Syslog Hooks for Logrus <img src="http://i.imgur.com/hTeVwmJ.png" width="40" height="40" alt=":walrus:" class="emoji" title=":walrus:"></h1><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;log/syslog&quot;</span>
  <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
  lSyslog <span class="token string">&quot;github.com/sirupsen/logrus/hooks/syslog&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log       <span class="token operator">:=</span> logrus<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  hook<span class="token punctuation">,</span> err <span class="token operator">:=</span> lSyslog<span class="token punctuation">.</span><span class="token function">NewSyslogHook</span><span class="token punctuation">(</span><span class="token string">&quot;udp&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost:514&quot;</span><span class="token punctuation">,</span> syslog<span class="token punctuation">.</span>LOG_INFO<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span>Hooks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u8FDE\u63A5\u5230\u672C\u673A\u7684 syslog (Ex. &quot;/dev/log&quot; or &quot;/var/run/syslog&quot; or &quot;/var/run/log&quot;)\u3002 \u53EA\u9700\u5C06\u7A7A\u5B57\u7B26\u4E32\u5206\u914D\u7ED9 <code>NewSyslogHook</code> \u7684\u524D\u4E24\u4E2A\u53C2\u6570\u3002\u50CF\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;log/syslog&quot;</span>
  <span class="token string">&quot;github.com/sirupsen/logrus&quot;</span>
  lSyslog <span class="token string">&quot;github.com/sirupsen/logrus/hooks/syslog&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log       <span class="token operator">:=</span> logrus<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  hook<span class="token punctuation">,</span> err <span class="token operator">:=</span> lSyslog<span class="token punctuation">.</span><span class="token function">NewSyslogHook</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> syslog<span class="token punctuation">.</span>LOG_INFO<span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>

  <span class="token keyword">if</span> err <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    log<span class="token punctuation">.</span>Hooks<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function t(p,e){return o}var i=n(a,[["render",t],["__file","syslog.html.vue"]]);export{i as default};
