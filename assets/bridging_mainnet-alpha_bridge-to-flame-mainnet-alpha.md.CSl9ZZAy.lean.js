import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.ohJJpums.js";const o=JSON.parse('{"title":"Bridging to Flame on Mainnet Alpha","description":"","frontmatter":{},"headers":[],"relativePath":"bridging/mainnet-alpha/bridge-to-flame-mainnet-alpha.md","filePath":"bridging/mainnet-alpha/bridge-to-flame-mainnet-alpha.md","lastUpdated":1730412752000}'),l={name:"bridging/mainnet-alpha/bridge-to-flame-mainnet-alpha.md"};function h(e,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="bridging-to-flame-on-mainnet-alpha" tabindex="-1">Bridging to Flame on Mainnet Alpha <a class="header-anchor" href="#bridging-to-flame-on-mainnet-alpha" aria-label="Permalink to &quot;Bridging to Flame on Mainnet Alpha&quot;">​</a></h1><p>Bridging commands from Astria, Celestia, Noble, Osmosis, and Stride Mainnets to Flame running on Astria Mainnet Alpha.</p><p>You will need the <code>astria-cli</code>, <code>celestia-appd</code>, <code>nobled</code>, <code>osmosisd</code>, and <code>strided</code> installed. Follow the install steps <a href="./../overview#bridging-dependencies">here</a>.</p><p>You can export the following to make the commands below easily copy and pastable.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ASTRIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address-private-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-celestia-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-celestia-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-noble-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-noble-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OSMOSIS_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-osmosis-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> OSMOSIS_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-osmosis-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STRIDE_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-stride-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STRIDE_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-stride-address&gt;&quot;</span></span></code></pre></div><h2 id="bridge-to-flame" tabindex="-1">Bridge to Flame <a class="header-anchor" href="#bridge-to-flame" aria-label="Permalink to &quot;Bridge to Flame&quot;">​</a></h2><h3 id="via-ibc" tabindex="-1">Via IBC <a class="header-anchor" href="#via-ibc" aria-label="Permalink to &quot;Via IBC&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-qbQr7" id="tab-RrX4s97" checked><label data-title="From Celestia" for="tab-RrX4s97">From Celestia</label><input type="radio" name="group-qbQr7" id="tab-uS9e6Vh"><label data-title="From Noble" for="tab-uS9e6Vh">From Noble</label><input type="radio" name="group-qbQr7" id="tab-INYoPrW"><label data-title="From Osmosis" for="tab-INYoPrW">From Osmosis</label><input type="radio" name="group-qbQr7" id="tab-DzGYfc5"><label data-title="From Stride" for="tab-DzGYfc5">From Stride</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia-appd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-48</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;10000utia&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fees=420utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --memo=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rollupDepositAddress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FLAME_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;celestia&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CELESTIA_KEY_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node=https://celestia-rpc.polkachu.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nobled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-104</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    astriacompat1eg8hhey0n4untdvqqdvlyl0e7zx8wfcaz3l6wu</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;100000uusdc&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --memo=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rollupDepositAddress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FLAME_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;noble-1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NOBLE_KEY_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node=https://noble-rpc.polkachu.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">osmosisd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-85486</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    1000000uusdc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --memo=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rollupDepositAddress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FLAME_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $OSMOSIS_KEY_NAME </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://osmosis-rpc.polkachu.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> osmosis-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strided</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    channel-285</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;100000stutia&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --memo=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rollupDepositAddress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$FLAME_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --chain-id=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stride-1&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --from=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$STRIDE_KEY_NAME</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --node=https://stride-rpc.polkachu.com:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0-0&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fees=500ustrd</span></span></code></pre></div></div></div><h3 id="direct-from-astria" tabindex="-1">Direct from Astria <a class="header-anchor" href="#direct-from-astria" aria-label="Permalink to &quot;Direct from Astria&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-kDVu-" id="tab-ZL4yvgV" checked><label data-title="TIA" for="tab-ZL4yvgV">TIA</label><input type="radio" name="group-kDVu-" id="tab-PYcOB0T"><label data-title="USDC" for="tab-PYcOB0T">USDC</label><input type="radio" name="group-kDVu-" id="tab-7FMMZCI"><label data-title="milkTIA" for="tab-7FMMZCI">milkTIA</label><input type="radio" name="group-kDVu-" id="tab-Vut73Iq"><label data-title="stTIA" for="tab-Vut73Iq">stTIA</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-lock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset=transfer/channel-0/utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset=transfer/channel-0/utia</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-lock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria1eg8hhey0n4untdvqqdvlyl0e7zx8wfca48kglh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset=transfer/channel-0/utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset=transfer/channel-1/uusdc</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-lock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria1kgxhyhvynhcwwrylkzzx6q3a8rn3tuvasxvuy8</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset=transfer/channel-0/utia\\ \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset=transfer/channel-2/factory/osmo1f5vfcph2dvfeqcqkhetwv75fda69z7e5c2dldm3kvgj23crkv6wqcn47a0/umilkTIA</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-lock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria1dllx9d9karss9ca8le25a4vqhf67a67d5d4l6r</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset=transfer/channel-0/utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset=transfer/channel-3/stutia</span></span></code></pre></div></div></div><h2 id="check-your-balances-on-flame" tabindex="-1">Check Your Balances on Flame <a class="header-anchor" href="#check-your-balances-on-flame" aria-label="Permalink to &quot;Check Your Balances on Flame&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aTSQj" id="tab-GRr-TN5" checked><label data-title="TIA" for="tab-GRr-TN5">TIA</label><input type="radio" name="group-aTSQj" id="tab-c3h6L5E"><label data-title="USDC" for="tab-c3h6L5E">USDC</label><input type="radio" name="group-aTSQj" id="tab-fv9cXjO"><label data-title="milkTIA" for="tab-fv9cXjO">milkTIA</label><input type="radio" name="group-aTSQj" id="tab-gTBVPi9"><label data-title="stTIA" for="tab-gTBVPi9">stTIA</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--rpc-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.flame.astria.org</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--erc20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0x3f65144F387f6545bF4B19a1B39C94231E1c849F</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.flame.astria.org</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--erc20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xcbb93e854AA4EF5Db51c3b094F28952eF0dC67bE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.flame.astria.org</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--erc20</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0xdf941D092b10FF07eAb44bD174dEe915c13FECcd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.flame.astria.org</span></span></code></pre></div></div></div><h2 id="view-your-transactions-on-flame" tabindex="-1">View Your Transactions on Flame <a class="header-anchor" href="#view-your-transactions-on-flame" aria-label="Permalink to &quot;View Your Transactions on Flame&quot;">​</a></h2><p>Open the <a href="https://explorer.flame.astria.org" target="_blank" rel="noreferrer">Flame Block Explorer</a> and search for your Flame address to see your transactions.</p><p>On the account page you can view your TIA balance directly. To view your USDC balance, select the <code>Tokens</code> tab.</p><h2 id="view-transactions-on-mintscan" tabindex="-1">View Transactions on <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> <a class="header-anchor" href="#view-transactions-on-mintscan" aria-label="Permalink to &quot;View Transactions on [Mintscan](https://www.mintscan.io/)&quot;">​</a></h2><p>If you bridge from an IBC chain, you can view your transactions by visiting the following:</p><ul><li><code>https://www.mintscan.io/celestia/address/&lt;your-celestia-address&gt;</code></li><li><code>https://www.mintscan.io/noble/address/&lt;your-noble-address&gt;</code></li><li><code>https://www.mintscan.io/osmosis/address/&lt;your-osmosis-address&gt;</code></li><li><code>https://www.mintscan.io/stride/address/&lt;your-stride-address&gt;</code></li></ul><p>You can also go directly to <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> and search for the <code>txhash</code> that is returned after sending your transaction, but it is recommended to view your address transaction history as this will show if an acknowledgement for your transfer was received.</p>`,19)]))}const g=i(l,[["render",h]]);export{o as __pageData,g as default};
