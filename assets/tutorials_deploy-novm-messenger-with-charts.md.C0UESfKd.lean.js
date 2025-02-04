import{_ as a,c as s,a3 as t,o as i}from"./chunks/framework.ohJJpums.js";const u=JSON.parse('{"title":"Deploy a noVM Messenger Rollup using the Astria Deployment Charts","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/deploy-novm-messenger-with-charts.md","filePath":"tutorials/deploy-novm-messenger-with-charts.md","lastUpdated":1738689260000}'),n={name:"tutorials/deploy-novm-messenger-with-charts.md"};function l(o,e,r,h,p,d){return i(),s("div",null,e[0]||(e[0]=[t(`<h1 id="deploy-a-novm-messenger-rollup-using-the-astria-deployment-charts" tabindex="-1">Deploy a <code>noVM</code> Messenger Rollup using the Astria Deployment Charts <a class="header-anchor" href="#deploy-a-novm-messenger-rollup-using-the-astria-deployment-charts" aria-label="Permalink to &quot;Deploy a \`noVM\` Messenger Rollup using the Astria Deployment Charts&quot;">​</a></h1><p>The primary difference between this tutorial and the <a href="./novm-messenger-rollup">Run a noVM-messenger Rollup</a> tutorial is that we are shifting from a rapid development workflow using the <a href="./../developer/astria-go/astria-go-installation">astria-go cli</a> with minimal dependencies and a subset of all software required for running in production, to containerizing the software for a more realistic production simulation. While the previous guide emphasized quick, iterative development with fewer components, this version incorporates additional software dependencies to better mimic a production environment while utilizing those tools to simplify the deployment process with significantly fewer commands.</p><h2 id="dependencies" tabindex="-1">Dependencies <a class="header-anchor" href="#dependencies" aria-label="Permalink to &quot;Dependencies&quot;">​</a></h2><p>Running the Deployment Charts requires the following dependencies:</p><ul><li><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">docker</a></li><li><a href="https://kubernetes.io/docs/tasks/tools/" target="_blank" rel="noreferrer">kubectl</a></li><li><a href="https://helm.sh/docs/intro/install/" target="_blank" rel="noreferrer">helm</a></li><li><a href="https://kind.sigs.k8s.io/docs/user/quick-start/#installation" target="_blank" rel="noreferrer">kind</a></li><li><a href="https://just.systems/man/en/chapter_4.html" target="_blank" rel="noreferrer">just</a></li></ul><h2 id="clone-build-and-run-the-novm-chat-rollup" tabindex="-1">Clone, Build, and Run the noVM Chat Rollup <a class="header-anchor" href="#clone-build-and-run-the-novm-chat-rollup" aria-label="Permalink to &quot;Clone, Build, and Run the noVM Chat Rollup&quot;">​</a></h2><p>Make sure that the Docker daemon is running, then run the following commands:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-IQlOV" id="tab-KUB3P3h" checked><label data-title="SSH" for="tab-KUB3P3h">SSH</label><input type="radio" name="group-IQlOV" id="tab-RW5Q2YM"><label data-title="HTTP" for="tab-RW5Q2YM">HTTP</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:astriaorg/noVM-messenger.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noVM-messenger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy-astria-chat</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/noVM-messenger.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noVM-messenger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy-astria-chat</span></span></code></pre></div></div></div><p>Then open <a href="http://chat.astria-chat.localdev.me/" target="_blank" rel="noreferrer">http://chat.astria-chat.localdev.me/</a> in your browser to use the UI and send messages.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The deployment should take less than 5 minutes, but this will depend on the speed of your machine and/or download times for images.</p></div><h2 id="cleanup" tabindex="-1">Cleanup <a class="header-anchor" href="#cleanup" aria-label="Permalink to &quot;Cleanup&quot;">​</a></h2><p>When you want to stop the local cluster you can run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> delete-all</span></span></code></pre></div>`,13)]))}const g=a(n,[["render",l]]);export{u as __pageData,g as default};
