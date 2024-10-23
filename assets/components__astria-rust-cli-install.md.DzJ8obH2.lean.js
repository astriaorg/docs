import{_ as a,c as i,a3 as t,o as l}from"./chunks/framework.ohJJpums.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components/_astria-rust-cli-install.md","filePath":"components/_astria-rust-cli-install.md","lastUpdated":1729701864000}'),n={name:"components/_astria-rust-cli-install.md"};function e(p,s,h,r,k,d){return l(),i("div",null,s[0]||(s[0]=[t(`<div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Du4p2" id="tab-aga_iYa" checked><label data-title="ARM Mac" for="tab-aga_iYa">ARM Mac</label><input type="radio" name="group-Du4p2" id="tab-koZczP3"><label data-title="X86_64 Mac" for="tab-koZczP3">X86_64 Mac</label><input type="radio" name="group-Du4p2" id="tab--vw6Zfr"><label data-title="x86_64 Linux" for="tab--vw6Zfr">x86_64 Linux</label><input type="radio" name="group-Du4p2" id="tab-E-eo3fY"><label data-title="From Source" for="tab-E-eo3fY">From Source</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-aarch64-apple-darwin.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-x86_64-apple-darwin.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria/releases/download/cli-v0.5.0/astria-cli-x86_64-unknown-linux-gnu.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --git=https://github.com/astriaorg/astria</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tag=cli-v0.5.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --locked</span></span></code></pre></div></div></div>`,1)]))}const g=a(n,[["render",e]]);export{o as __pageData,g as default};
