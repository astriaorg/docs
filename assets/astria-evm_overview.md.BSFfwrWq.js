import{_ as a,c as t,o as s,a5 as e}from"./chunks/framework.-Zveb6AF.js";const u=JSON.parse('{"title":"Astria EVM","description":"","frontmatter":{},"headers":[],"relativePath":"astria-evm/overview.md","filePath":"astria-evm/overview.md","lastUpdated":1723651250000}'),i={name:"astria-evm/overview.md"},r=e('<h1 id="astria-evm" tabindex="-1">Astria EVM <a class="header-anchor" href="#astria-evm" aria-label="Permalink to &quot;Astria EVM&quot;">​</a></h1><h2 id="network-information" tabindex="-1">Network Information <a class="header-anchor" href="#network-information" aria-label="Permalink to &quot;Network Information&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Value</th></tr></thead><tbody><tr><td>Network Name</td><td>dusk-8</td></tr><tr><td>RPC URL</td><td><a href="https://rpc.evm.dusk-8.devnet.astria.org" target="_blank" rel="noreferrer">https://rpc.evm.dusk-8.devnet.astria.org</a></td></tr><tr><td>Chain ID</td><td>912559</td></tr><tr><td>Currency Symbol</td><td>RIA</td></tr><tr><td>Dora</td><td><a href="https://www.ondora.xyz/network/astria-devnet" target="_blank" rel="noreferrer">https://www.ondora.xyz/network/astria-devnet</a></td></tr><tr><td>Faucet</td><td><a href="https://faucet.evm.dusk-8.devnet.astria.org" target="_blank" rel="noreferrer">https://faucet.evm.dusk-8.devnet.astria.org</a></td></tr><tr><td>Block Scout</td><td><a href="https://explorer.evm.dusk-8.devnet.astria.org/" target="_blank" rel="noreferrer">https://explorer.evm.dusk-8.devnet.astria.org/</a></td></tr></tbody></table><h2 id="adding-to-metamask" tabindex="-1">Adding to Metamask <a class="header-anchor" href="#adding-to-metamask" aria-label="Permalink to &quot;Adding to Metamask&quot;">​</a></h2><p>Follow Metamask&#39;s official documentation to <a href="https://support.metamask.io/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC#h_01G63GGJ83DGDRCS2ZWXM37CV5" target="_blank" rel="noreferrer">manually add a custom network.</a></p><p>Your settings should be the following:</p><ul><li>Network Name: <code>dusk-8</code></li><li>New RPC URL: <code>https://rpc.evm.dusk-8.devnet.astria.org</code></li><li>Chain ID: <code>912559</code></li><li>Currency symbol: <code>RIA</code></li><li>Block Explorer URL: <code>&lt;empty&gt;</code></li></ul><h2 id="using-cast" tabindex="-1">Using Cast <a class="header-anchor" href="#using-cast" aria-label="Permalink to &quot;Using Cast&quot;">​</a></h2><p>Set your <code>ETH_RPC_URL</code>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ETH_RPC_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">https://rpc.evm.dusk-8.devnet.astria.org</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> REC_ADDR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SOME_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--value</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000000000000000000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --private-key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PRIVATE-KE</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $REC_ADDR</span></span></code></pre></div>',14),n=[r];function h(d,l,o,p,k,c){return s(),t("div",null,n)}const v=a(i,[["render",h]]);export{u as __pageData,v as default};
