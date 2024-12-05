import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.ohJJpums.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/_bridge-to-astria-devnet.md","filePath":"components/_bridge-to-astria-devnet.md","lastUpdated":1730412752000}'),e={name:"components/_bridge-to-astria-devnet.md"};function p(l,s,h,k,d,r){return t(),a("div",null,s[0]||(s[0]=[n(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_Vs_e" id="tab-WeOqUIs" checked><label data-title="From Celestia" for="tab-WeOqUIs">From Celestia</label><input type="radio" name="group-_Vs_e" id="tab-8K93NBg"><label data-title="From Noble" for="tab-8K93NBg">From Noble</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">celestia-appd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ibc-transfer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
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
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --packet-timeout-height</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0-0</span></span></code></pre></div></div></div>`,1)]))}const C=i(e,[["render",p]]);export{c as __pageData,C as default};