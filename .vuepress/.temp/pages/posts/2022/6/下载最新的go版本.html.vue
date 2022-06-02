<template><p>首先，我们使用这个命令，将你需要的go版本包下载到go的可执行文件目录</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code><span class="token keyword">go</span> install golang<span class="token punctuation">.</span>org<span class="token operator">/</span>dl<span class="token operator">/</span>go1<span class="token punctuation">.</span><span class="token number">18.3</span>@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里，我下载的是<code v-pre>go1.18.3</code> 这个包，<code v-pre>@latest</code> 注明版本，这里指的是<code v-pre>go1.18.3</code> 这个包的最新版</p>
<div class="language-go ext-go line-numbers-mode"><pre v-pre class="language-go"><code>go1<span class="token punctuation">.</span><span class="token number">18.3</span> download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用这个命令，将go全量数据下载到本地，使用macOS的话是下载到了<code v-pre>~/sdk</code>中</p>
<p>下载以后就可以使用 <code v-pre>go1.18.3</code> 这样的命令去行使<code v-pre>go</code>的命令了。</p>
<p><code v-pre>go.18.3</code>命令最终调用的是sdk中的go项目中的<code v-pre>bin/go</code>命令</p>
<p>你可以试试将sdk中go项目的bin/go 删除会发生什么</p>
<p>答案就是 go.18.3 命令将不会出现任何效果，所以可以佐证上文的说法</p>
</template>
