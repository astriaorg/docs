import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.ohJJpums.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/_bridge-to-flame-via-astria-mainnet.md","filePath":"components/_bridge-to-flame-via-astria-mainnet.md","lastUpdated":1730412752000}'),l={name:"components/_bridge-to-flame-via-astria-mainnet.md"};function e(h,s,p,k,r,d){return t(),a("div",null,s[0]||(s[0]=[n(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-EYiZX" id="tab-fgHWHB2" checked><label data-title="TIA" for="tab-fgHWHB2">TIA</label><input type="radio" name="group-EYiZX" id="tab-K66o07E"><label data-title="USDC" for="tab-K66o07E">USDC</label><input type="radio" name="group-EYiZX" id="tab-vMcMUnx"><label data-title="milkTIA" for="tab-vMcMUnx">milkTIA</label><input type="radio" name="group-EYiZX" id="tab-nMBQJ7m"><label data-title="stTIA" for="tab-nMBQJ7m">stTIA</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge-lock</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria13vptdafyttpmlwppt0s844efey2cpc0mevy92p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
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
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --asset=transfer/channel-3/stutia</span></span></code></pre></div></div></div>`,1)]))}const c=i(l,[["render",e]]);export{C as __pageData,c as default};