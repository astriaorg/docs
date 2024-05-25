import{_ as s,c as a,o as i,a5 as t}from"./chunks/framework.EN5ALL4V.js";const F=JSON.parse('{"title":"Install the Astria CLI","description":"","frontmatter":{},"headers":[],"relativePath":"developer/tutorials/install-the-cli.md","filePath":"developer/tutorials/install-the-cli.md","lastUpdated":1716595602000}'),e={name:"developer/tutorials/install-the-cli.md"},l=t(`<h1 id="install-the-astria-cli" tabindex="-1">Install the Astria CLI <a class="header-anchor" href="#install-the-astria-cli" aria-label="Permalink to &quot;Install the Astria CLI&quot;">​</a></h1><p>The astria-go cli is a tool designed to make local rollup development as simple and dependency free as possible. It provides functionality to easily run the Astria stack and interact with the Sequencer.</p><h2 id="download-using-curl" tabindex="-1">Download using Curl <a class="header-anchor" href="#download-using-curl" aria-label="Permalink to &quot;Download using Curl&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-fV9v_" id="tab-HpUbT7z" checked="checked"><label for="tab-HpUbT7z">ARM Mac</label><input type="radio" name="group-fV9v_" id="tab-fmqfWCi"><label for="tab-fmqfWCi">X86_64 Mac</label><input type="radio" name="group-fV9v_" id="tab-o0PK5Tq"><label for="tab-o0PK5Tq">x86_64 Linux</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.7.1/astria-go-v0.7.1-darwin-arm64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.7.1/astria-go-v0.7.1-darwin-amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-cli-go/releases/download/v0.7.1/astria-go-v0.7.1-linux-amd64.tar.gz</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div></div></div><p>View all releases <a href="https://github.com/astriaorg/astria-cli-go/releases" target="_blank" rel="noreferrer">here</a>.</p><h2 id="build-from-source" tabindex="-1">Build from Source <a class="header-anchor" href="#build-from-source" aria-label="Permalink to &quot;Build from Source&quot;">​</a></h2><p>This requires <code>Go</code> and <code>just</code> to be installed on your system.</p><ul><li>Go: <a href="https://go.dev/doc/install" target="_blank" rel="noreferrer">https://go.dev/doc/install</a></li><li>just: <a href="https://github.com/casey/just" target="_blank" rel="noreferrer">https://github.com/casey/just</a></li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:astriaorg/astria-cli-go.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-cli-go</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># run the cli in the repo directory</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR you can move the binary to a location in your PATH if you&#39;d like</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./bin/astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre></div><h2 id="commands-used-in-this-tutorial" tabindex="-1">Commands Used in this Tutorial <a class="header-anchor" href="#commands-used-in-this-tutorial" aria-label="Permalink to &quot;Commands Used in this Tutorial&quot;">​</a></h2><p>For more details on the avaliable commands and other cli features, see the <a href="./../references/astria-go/cli-commands">cli resources</a>.</p><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>version</code></td><td>Prints the cli version.</td></tr><tr><td><code>help</code></td><td>Show help.</td></tr><tr><td><code>dev init</code></td><td>Downloads binaries and initializes the local environment.</td></tr><tr><td><code>dev run</code></td><td>Runs a minimal, local Astria stack.</td></tr><tr><td><code>sequencer blockheight</code></td><td>Get the current block height of the sequencer.</td></tr><tr><td><code>sequencer createaccount</code></td><td>Create a new sequencer account.</td></tr></tbody></table>`,12),n=[l];function h(r,p,d,o,k,c){return i(),a("div",null,n)}const u=s(e,[["render",h]]);export{F as __pageData,u as default};
