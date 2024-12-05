import{_ as i,c as a,a3 as t,o as n}from"./chunks/framework.ohJJpums.js";const c=JSON.parse('{"title":"Bridging to the Astria dusk Devnet","description":"","frontmatter":{},"headers":[],"relativePath":"bridging/devnet/bridge-to-astria-devnet.md","filePath":"bridging/devnet/bridge-to-astria-devnet.md","lastUpdated":1730412752000}'),e={name:"bridging/devnet/bridge-to-astria-devnet.md"};function l(h,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="bridging-to-the-astria-dusk-devnet" tabindex="-1">Bridging to the Astria <code>dusk</code> Devnet <a class="header-anchor" href="#bridging-to-the-astria-dusk-devnet" aria-label="Permalink to &quot;Bridging to the Astria \`dusk\` Devnet&quot;">​</a></h1><p>Bridging commands from Celestia and Noble testnets to the Astria <code>dusk</code> testnet.</p><p>You will need the <code>astria-cli</code>, <code>celestia-appd</code>, and <code>nobled</code> installed. Follow the install steps <a href="./../overview#bridging-dependencies">here</a>.</p><p>You can export the following to make the commands below easily copy and pastable.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ASTRIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address-private-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-celestia-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-celestia-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-noble-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-noble-address&gt;&quot;</span></span></code></pre></div><h2 id="bridge-to-astria" tabindex="-1">Bridge to Astria <a class="header-anchor" href="#bridge-to-astria" aria-label="Permalink to &quot;Bridge to Astria&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-xvCu_" id="tab-5Izre4d" checked><label data-title="From Celestia" for="tab-5Izre4d">From Celestia</label><input type="radio" name="group-xvCu_" id="tab-W4MNaI1"><label data-title="From Noble" for="tab-W4MNaI1">From Noble</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia-appd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-159</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1000000utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fees=420utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CELESTIA_KEY_NAME  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node=https://rpc-mocha.pops.one:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mocha-4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nobled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-231</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1000000uusdc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NOBLE_KEY_NAME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://noble-testnet-rpc.polkachu.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> grand-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div></div></div><h2 id="check-your-balances-on-astria" tabindex="-1">Check Your Balances on Astria <a class="header-anchor" href="#check-your-balances-on-astria" aria-label="Permalink to &quot;Check Your Balances on Astria&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.sequencer.dusk-11.devnet.astria.org/</span></span></code></pre></div><h2 id="view-transactions-on-mintscan" tabindex="-1">View Transactions on <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> <a class="header-anchor" href="#view-transactions-on-mintscan" aria-label="Permalink to &quot;View Transactions on [Mintscan](https://www.mintscan.io/)&quot;">​</a></h2><p>You can view your transactions by visiting the following:</p><ul><li><code>https://www.mintscan.io/celestia-testnet/address/&lt;your-celestia-address&gt;</code></li><li><code>https://www.mintscan.io/noble-testnet/address/&lt;your-noble-address&gt;</code></li></ul><p>You can also go directly to <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> and search for the <code>txhash</code> that is returned after sending your transaction, but it is recommended to view your address transaction history as this will show if an acknowledgement for your transfer was received.</p>`,13)]))}const g=i(e,[["render",l]]);export{c as __pageData,g as default};