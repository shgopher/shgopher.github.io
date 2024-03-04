import{_ as n,c as s}from"./app.e0455488.js";const a={},t=s(`<h1 id="generating-markdown-docs-for-your-own-cobra-command" tabindex="-1"><a class="header-anchor" href="#generating-markdown-docs-for-your-own-cobra-command" aria-hidden="true">#</a> Generating Markdown Docs For Your Own cobra.Command</h1><p>\u4ECE cobra \u547D\u4EE4\u751F\u6210 Markdown \u6587\u6863\u975E\u5E38\u5BB9\u6613\u3002\u4E0B\u9762\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra&quot;</span>
	<span class="token string">&quot;github.com/spf13/cobra/doc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cmd <span class="token operator">:=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
		Use<span class="token punctuation">:</span>   <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
		Short<span class="token punctuation">:</span> <span class="token string">&quot;my test program&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	err <span class="token operator">:=</span> doc<span class="token punctuation">.</span><span class="token function">GenMarkdownTree</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u4E3A\u4F60\u63D0\u4F9B\u4E00\u4E2A Markdown \u6587\u6863<code>/tmp/test.md</code></p><h2 id="generate-markdown-docs-for-the-entire-command-tree" tabindex="-1"><a class="header-anchor" href="#generate-markdown-docs-for-the-entire-command-tree" aria-hidden="true">#</a> Generate markdown docs for the entire command tree</h2><p>\u8BE5\u7A0B\u5E8F\u5B9E\u9645\u4E0A\u53EF\u4EE5\u4E3Akubernetes\u9879\u76EE\u4E2D\u7684kubectl\u547D\u4EE4\u751F\u6210\u6587\u6863</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;io/ioutil&quot;</span>
	<span class="token string">&quot;os&quot;</span>

	<span class="token string">&quot;k8s.io/kubernetes/pkg/kubectl/cmd&quot;</span>
	cmdutil <span class="token string">&quot;k8s.io/kubernetes/pkg/kubectl/cmd/util&quot;</span>

	<span class="token string">&quot;github.com/spf13/cobra/doc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	kubectl <span class="token operator">:=</span> cmd<span class="token punctuation">.</span><span class="token function">NewKubectlCommand</span><span class="token punctuation">(</span>cmdutil<span class="token punctuation">.</span><span class="token function">NewFactory</span><span class="token punctuation">(</span><span class="token boolean">nil</span><span class="token punctuation">)</span><span class="token punctuation">,</span> os<span class="token punctuation">.</span>Stdin<span class="token punctuation">,</span> ioutil<span class="token punctuation">.</span>Discard<span class="token punctuation">,</span> ioutil<span class="token punctuation">.</span>Discard<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> doc<span class="token punctuation">.</span><span class="token function">GenMarkdownTree</span><span class="token punctuation">(</span>kubectl<span class="token punctuation">,</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u751F\u6210\u4E00\u7CFB\u5217\u6587\u4EF6\uFF0C\u4E00\u4E2A\u7528\u4E8E\u6811\u4E2D\u7684\u6BCF\u4E2A\u547D\u4EE4\uFF0C\u5728\u6307\u5B9A\u7684\u76EE\u5F55\u4E2D\uFF08\u5728\u672C\u4F8B\u4E2D\u4E3A<code>./</code>\uFF09</p><h2 id="generate-markdown-docs-for-a-single-command" tabindex="-1"><a class="header-anchor" href="#generate-markdown-docs-for-a-single-command" aria-hidden="true">#</a> Generate markdown docs for a single command</h2><p>\u4F60\u53EF\u80FD\u5E0C\u671B\u66F4\u591A\u5730\u63A7\u5236\u8F93\u51FA\uFF0C\u6216\u4EC5\u751F\u6210\u5355\u4E2A\u547D\u4EE4\uFF0C\u800C\u4E0D\u662F\u6574\u4E2A\u547D\u4EE4\u6811\u3002\u5982\u679C\u662F\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F60\u53EF\u80FD\u66F4\u559C\u6B22<code>GenMarkdown</code>\u800C\u4E0D\u662F<code>GenMarkdownTree</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>	out <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">)</span>
	err <span class="token operator">:=</span> doc<span class="token punctuation">.</span><span class="token function">GenMarkdown</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> out<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u5C06\u53EA\u6709<code>cmd</code>\u7684 markdown\u6587\u6863\u5199\u5165\u8F93\u51FA\u7F13\u51B2\u533A\u3002</p><h2 id="customize-the-output" tabindex="-1"><a class="header-anchor" href="#customize-the-output" aria-hidden="true">#</a> Customize the output</h2><p><code>GenMarkdown</code>\u548C<code>GenMarkdownTree</code>\u90FD\u6709\u5907\u7528\u7248\u672C\uFF0C\u5E26\u6709\u56DE\u8C03\u4EE5\u63A7\u5236\u8F93\u51FA:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GenMarkdownTreeCustom</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>Command<span class="token punctuation">,</span> dir <span class="token builtin">string</span><span class="token punctuation">,</span> filePrepender<span class="token punctuation">,</span> linkHandler <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">GenMarkdownCustom</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>Command<span class="token punctuation">,</span> out <span class="token operator">*</span>bytes<span class="token punctuation">.</span>Buffer<span class="token punctuation">,</span> linkHandler <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>filePrepender</code>\u5C06\u5728\u7ED9\u5B9A\u5B8C\u6574\u6587\u4EF6\u8DEF\u5F84\u7684\u60C5\u51B5\u4E0B\u5C06\u8FD4\u56DE\u503C\u6DFB\u52A0\u5230\u5448\u73B0\u7684Markdown\u6587\u4EF6\u4E2D\u3002\u4E00\u4E2A\u5E38\u89C1\u7684\u7528\u4F8B\u662F\u6DFB\u52A0\u524D\u7AEF\u5185\u5BB9\uFF0C\u4F7F\u7528<a href="http://gohugo.io/" target="_blank" rel="noopener noreferrer">Hugo</a>\u751F\u6210\u7684\u6587\u6863:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">const</span> fmTemplate <span class="token operator">=</span> <span class="token string">\`---
date: %s
title: &quot;%s&quot;
slug: %s
url: %s
---
\`</span>

filePrepender <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>filename <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	now <span class="token operator">:=</span> time<span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Format</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>RFC3339<span class="token punctuation">)</span>
	name <span class="token operator">:=</span> filepath<span class="token punctuation">.</span><span class="token function">Base</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	base <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSuffix</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">Ext</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
	url <span class="token operator">:=</span> <span class="token string">&quot;/commands/&quot;</span> <span class="token operator">+</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span>
	<span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span>fmTemplate<span class="token punctuation">,</span> now<span class="token punctuation">,</span> strings<span class="token punctuation">.</span><span class="token function">Replace</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> base<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED9\u5B9A\u6587\u4EF6\u540D\uFF0C<code>linkHandler</code>\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u5448\u73B0\u7684\u547D\u4EE4\u5185\u90E8\u94FE\u63A5:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>linkHandler <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	base <span class="token operator">:=</span> strings<span class="token punctuation">.</span><span class="token function">TrimSuffix</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">Ext</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> <span class="token string">&quot;/commands/&quot;</span> <span class="token operator">+</span> strings<span class="token punctuation">.</span><span class="token function">ToLower</span><span class="token punctuation">(</span>base<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function e(o,p){return t}var i=n(a,[["render",e],["__file","md_docs.html.vue"]]);export{i as default};
