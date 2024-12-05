import{_ as i,c as a,a3 as t,o as n}from"./chunks/framework.ohJJpums.js";const c=JSON.parse('{"title":"Withdraw from the Astria dawn Testnet","description":"","frontmatter":{},"headers":[],"relativePath":"bridging/testnet/withdraw-from-astria-testnet.md","filePath":"bridging/testnet/withdraw-from-astria-testnet.md","lastUpdated":1730412752000}'),e={name:"bridging/testnet/withdraw-from-astria-testnet.md"};function h(l,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<h1 id="withdraw-from-the-astria-dawn-testnet" tabindex="-1">Withdraw from the Astria <code>dawn</code> Testnet <a class="header-anchor" href="#withdraw-from-the-astria-dawn-testnet" aria-label="Permalink to &quot;Withdraw from the Astria \`dawn\` Testnet&quot;">​</a></h1><p>Withdrawal commands from Astria <code>dawn</code> Testnet to Celestia, Noble, and Stride Testnets.</p><p>You will need the <code>astria-cli</code>, <code>celestia-appd</code>, <code>nobled</code> and <code>strided</code> installed. Follow the install steps <a href="./../overview#bridging-dependencies">here</a>.</p><p>You can export the following to make the commands below easily copy and pastable.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ASTRIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-astria-address-private-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-celestia-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CELESTIA_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-celestia-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-noble-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NOBLE_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-noble-address&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STRIDE_KEY_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;name-of-your-stride-key&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> STRIDE_ADDRESS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your-stride-address&gt;&quot;</span></span></code></pre></div><h2 id="withdraw-from-astria" tabindex="-1">Withdraw from Astria <a class="header-anchor" href="#withdraw-from-astria" aria-label="Permalink to &quot;Withdraw from Astria&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IpQER" id="tab-xBvwgIa" checked><label data-title="To Celestia" for="tab-xBvwgIa">To Celestia</label><input type="radio" name="group-IpQER" id="tab-eRdHIre"><label data-title="To Noble" for="tab-eRdHIre">To Noble</label><input type="radio" name="group-IpQER" id="tab-bgeEf53"><label data-title="To Stride" for="tab-bgeEf53">To Stride</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ics20-withdrawal</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$CELESTIA_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --source-channel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channel-0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PRIV_KEY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dawn-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-0/utia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-0/utia</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ics20-withdrawal</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$NOBLE_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --source-channel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channel-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PRIV_KEY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dawn-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-1/uusdc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-0/utia</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ics20-withdrawal</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --destination-chain-address=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$STRIDE_ADDRESS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --source-channel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channel-2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --private-key=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$PRIV_KEY</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer-url=https://rpc.sequencer.dawn-1.astria.org/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --sequencer.chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dawn-1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-3/stutia</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --fee-asset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer/channel-0/utia</span></span></code></pre></div></div></div><h2 id="view-transactions-on-astrotrek" tabindex="-1">View Transactions on <a href="https://dawn.astrotrek.io/" target="_blank" rel="noreferrer">Astrotrek</a> <a class="header-anchor" href="#view-transactions-on-astrotrek" aria-label="Permalink to &quot;View Transactions on [Astrotrek](https://dawn.astrotrek.io/)&quot;">​</a></h2><p>Go to <code>https://dawn.astrotrek.io/account/&lt;your-astria-account&gt;?tab=transactions</code> to see the withdrawal transactions. You can also search the returned transaction hash directly in <a href="https://dawn.astrotrek.io/" target="_blank" rel="noreferrer">Astrotrek</a>.</p><h2 id="view-transactions-on-mintscan" tabindex="-1">View Transactions on <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> <a class="header-anchor" href="#view-transactions-on-mintscan" aria-label="Permalink to &quot;View Transactions on [Mintscan](https://www.mintscan.io/)&quot;">​</a></h2><p>If you bridge out to an IBC chain, you can view your transactions by visiting the following:</p><ul><li><code>https://www.mintscan.io/celestia-testnet/address/&lt;your-celestia-address&gt;</code></li><li><code>https://www.mintscan.io/noble-testnet/address/&lt;your-noble-address&gt;</code></li></ul><p>You can also go directly to <a href="https://www.mintscan.io/" target="_blank" rel="noreferrer">Mintscan</a> and search for the <code>txhash</code> that is returned after sending your transaction, but it is recommended to view your address transaction history as this will show if an acknowledgement for your transfer was received.</p><h2 id="check-your-testnet-balances" tabindex="-1">Check your Testnet Balances <a class="header-anchor" href="#check-your-testnet-balances" aria-label="Permalink to &quot;Check your Testnet Balances&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-JnmCj" id="tab-lLStVBz" checked><label data-title="Astria" for="tab-lLStVBz">Astria</label><input type="radio" name="group-JnmCj" id="tab-uSRIEkG"><label data-title="Celestia" for="tab-uSRIEkG">Celestia</label><input type="radio" name="group-JnmCj" id="tab-T7iPO72"><label data-title="Noble" for="tab-T7iPO72">Noble</label><input type="radio" name="group-JnmCj" id="tab-7UNYkZ9"><label data-title="Osmosis" for="tab-7UNYkZ9">Osmosis</label><input type="radio" name="group-JnmCj" id="tab-LvoSOuT"><label data-title="Stride" for="tab-LvoSOuT">Stride</label><input type="radio" name="group-JnmCj" id="tab-_BxLGxa"><label data-title="Flame" for="tab-_BxLGxa">Flame</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ASTRIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--sequencer-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.sequencer.dawn-1.astria.org/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia-appd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $CELESTIA_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--node=https://rpc-mocha.pops.one:443</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --chain-id</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mocha-4</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nobled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $NOBLE_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://noble-testnet-rpc.polkachu.com:443</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">osmosisd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $OSMOSIS_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://osmosis-testnet-rpc.polkachu.com:443</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">strided</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bank</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $STRIDE_ADDRESS </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://stride-testnet-rpc.polkachu.com:443</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rpc-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://rpc.flame.dawn-1.astria.org</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $FLAME_ADDRESS</span></span></code></pre></div></div></div>`,15)]))}const F=i(e,[["render",h]]);export{c as __pageData,F as default};