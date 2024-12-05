import{_ as a,c as i,a3 as t,o as l}from"./chunks/framework.ohJJpums.js";const g=JSON.parse('{"title":"Install the astria-go CLI","description":"","frontmatter":{},"headers":[],"relativePath":"developer/astria-go/astria-go-installation.md","filePath":"developer/astria-go/astria-go-installation.md","lastUpdated":1729701864000}'),n={name:"developer/astria-go/astria-go-installation.md"};function e(h,s,p,r,k,o){return l(),i("div",null,s[0]||(s[0]=[t(`<h1 id="install-the-astria-go-cli" tabindex="-1">Install the <code>astria-go</code> CLI <a class="header-anchor" href="#install-the-astria-go-cli" aria-label="Permalink to &quot;Install the \`astria-go\` CLI&quot;">​</a></h1><p>The <code>astria-go</code> CLI is a tool designed to make local rollup development as simple and dependency free as possible. It provides functionality to easily run the Astria stack and interact with the Sequencer.</p><h2 id="download-using-curl" tabindex="-1">Download using Curl <a class="header-anchor" href="#download-using-curl" aria-label="Permalink to &quot;Download using Curl&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0KFG5" id="tab-PquzO8T" checked><label data-title="ARM Mac" for="tab-PquzO8T">ARM Mac</label><input type="radio" name="group-0KFG5" id="tab-7wtxPl7"><label data-title="X86_64 Mac" for="tab-7wtxPl7">X86_64 Mac</label><input type="radio" name="group-0KFG5" id="tab-_vc5F9Y"><label data-title="x86_64 Linux" for="tab-_vc5F9Y">x86_64 Linux</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.15.1/astria-go-v0.15.1-darwin-arm64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.15.1/astria-go-v0.15.1-darwin-amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.15.1/astria-go-v0.15.1-linux-amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div></div></div><p>View all releases <a href="https://github.com/astriaorg/astria-cli-go/releases" target="_blank" rel="noreferrer">here</a>.</p><h2 id="build-from-source" tabindex="-1">Build from Source <a class="header-anchor" href="#build-from-source" aria-label="Permalink to &quot;Build from Source&quot;">​</a></h2><p>This requires <code>Go</code> and <code>just</code> to be installed on your system.</p><ul><li><a href="https://go.dev/doc/install" target="_blank" rel="noreferrer">Go</a></li><li><a href="https://github.com/casey/just" target="_blank" rel="noreferrer">just</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-RWGQj" id="tab-Sk2V7Q9" checked><label data-title="SSH" for="tab-Sk2V7Q9">SSH</label><input type="radio" name="group-RWGQj" id="tab-bEhHwR3"><label data-title="HTTPS" for="tab-bEhHwR3">HTTPS</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:astriaorg/astria-cli-go.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli-go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># run the cli in the repo directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR you can move the binary to a location in your PATH if you&#39;d like</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./bin/astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli-go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># run the cli in the repo directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR you can move the binary to a location in your PATH if you&#39;d like</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./bin/astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div></div></div><p>View the source code <a href="https://github.com/astriaorg/astria-cli-go/tree/main/modules/cli" target="_blank" rel="noreferrer">here</a>.</p>`,10)]))}const c=a(n,[["render",e]]);export{g as __pageData,c as default};