import{_ as n,c as s}from"./app.e0455488.js";const a={},t=s(`<h1 id="generating-man-pages-for-your-own-cobra-command" tabindex="-1"><a class="header-anchor" href="#generating-man-pages-for-your-own-cobra-command" aria-hidden="true">#</a> Generating Man Pages For Your Own cobra.Command</h1><p>\u4ECE cobra \u547D\u4EE4\u751F\u6210 man \u624B\u518C\u975E\u5E38\u5BB9\u6613\u3002\u4E0B\u9762\u4E00\u4E2A\u4F8B\u5B50:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

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
	header <span class="token operator">:=</span> <span class="token operator">&amp;</span>doc<span class="token punctuation">.</span>GenManHeader<span class="token punctuation">{</span>
		Title<span class="token punctuation">:</span> <span class="token string">&quot;MINE&quot;</span><span class="token punctuation">,</span>
		Section<span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	err <span class="token operator">:=</span> doc<span class="token punctuation">.</span><span class="token function">GenManTree</span><span class="token punctuation">(</span>cmd<span class="token punctuation">,</span> header<span class="token punctuation">,</span> <span class="token string">&quot;/tmp&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u5C06\u4E3A\u4F60\u63D0\u4F9B\u4E00\u4E2A man \u624B\u518C<code>/tmp/test.3</code></p>`,4);function e(o,p){return t}var i=n(a,[["render",e],["__file","man_docs.html.vue"]]);export{i as default};
