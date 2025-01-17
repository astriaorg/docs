import{_ as i,c as a,a3 as e,o as t}from"./chunks/framework.ohJJpums.js";const c=JSON.parse('{"title":"Run a noVM Messenger Rollup on Astria","description":"","frontmatter":{},"headers":[],"relativePath":"tutorials/novm-messenger-rollup.md","filePath":"tutorials/novm-messenger-rollup.md","lastUpdated":1737133488000}'),l={name:"tutorials/novm-messenger-rollup.md"};function n(h,s,p,r,k,o){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="run-a-novm-messenger-rollup-on-astria" tabindex="-1">Run a <code>noVM</code> Messenger Rollup on Astria <a class="header-anchor" href="#run-a-novm-messenger-rollup-on-astria" aria-label="Permalink to &quot;Run a \`noVM\` Messenger Rollup on Astria&quot;">​</a></h1><p>Rollups on Astria are virtual machine (VM) agnostic, which means that they can function without relying on a VM — a concept we refer to as a <strong>noVM rollup</strong>.</p><p>Using <a href="./../developer/apis#execution-apis">Astria&#39;s Execution API</a>, developers can build rollups tailored to any application type that operates on transactions, messages, and blocks.</p><p>The following tutorial demonstrates running a simplified noVM messenger rollup app which users can interact with using <a href="#install-the-rollup-cli">a cli</a> to submit messages and access message history from the rollup.</p><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>You will need the following installed to complete the tutorial:</p><ul><li><a href="https://www.rust-lang.org/tools/install" target="_blank" rel="noreferrer">Cargo and Rust</a></li><li><a href="https://docs.astria.org/developer/astria-go/astria-go-installation" target="_blank" rel="noreferrer"><code>astria-go</code> cli</a></li><li><a href="https://github.com/casey/just" target="_blank" rel="noreferrer">just</a></li></ul><h2 id="clone-the-novm-messenger-rollup-repo" tabindex="-1">Clone the <code>noVM-messenger</code> Rollup Repo <a class="header-anchor" href="#clone-the-novm-messenger-rollup-repo" aria-label="Permalink to &quot;Clone the \`noVM-messenger\` Rollup Repo&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5DnGm" id="tab-ttBzD6A" checked><label data-title="SSH" for="tab-ttBzD6A">SSH</label><input type="radio" name="group-5DnGm" id="tab-vmWLWTC"><label data-title="HTTPS" for="tab-vmWLWTC">HTTPS</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:astriaorg/noVM-messenger.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noVM-messenger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/noVM-messenger.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> noVM-messenger</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div></div></div><h2 id="configure-the-astria-go-cli" tabindex="-1">Configure the <code>astria-go</code> cli <a class="header-anchor" href="#configure-the-astria-go-cli" aria-label="Permalink to &quot;Configure the \`astria-go\` cli&quot;">​</a></h2><p>Create a new instance with the cli:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --instance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> novm</span></span></code></pre></div><p>Go to <code>~/.astria/</code> and update the <code>tui-config.toml</code> to have the following:</p><p>This step is optional but will make viewing the running rollup much easier in the TUI.</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">auto_scroll = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wrap_lines = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">borderless = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">override_instance_name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;novm&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cometbft_starts_minimized = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conductor_starts_minimized = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">composer_starts_minimized = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequencer_starts_minimized = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">generic_starts_minimized = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">generic_start_position = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;after&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">highlight_color = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;blue&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">border_color = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;gray&#39;</span></span></code></pre></div><p>Navigate to <code>~/.astria/novm/sequencer-networks-config.toml</code>. Scroll through the file to find the following heading:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>Continue scrolling through that section until you pass the last service heading within the local services:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sequencer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>Add the following at the end of that section. Make sure that the <code>local_path</code> is set to point at the <code>target</code> dir within the example transfer rollup directory. This dir should already be present in the repo once you have run <code>cargo build</code>.</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">local</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rollup&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;v0.1.0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">download_url = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">local_path = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;your local path to&gt;/noVM-messenger/target/debug/chat-rollup&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">args = []</span></span></code></pre></div><p>Then open <code>~/.astria/novm/config/base-config.toml</code> and add the following to that file. You will need to manually update the <code>db_filepath</code>:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">metrics_http_listener_addr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://127.0.0.1:50053&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">log = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;debug&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">composer_addr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;http://127.0.0.1:50052&#39;</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">db_filepath = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;absolute path of your home dir&gt;/.astria/novm/data/rollup_data&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">execution_grpc_addr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0.0.0.0:50051&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">force_stdout = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pretty_print = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_otel = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no_metrics = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;true&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollup_name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;astria-chat&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequencer_genesis_block_height = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">celestia_genesis_block_height = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">celestia_block_variance = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100&#39;</span></span></code></pre></div><p>You will also need to update the <code>astria_composer_grpc_addr</code> already present in the <code>base-config.toml</code> to match the <code>composer_addr</code> address you just added above.</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">astria_composer_grpc_addr = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;127.0.0.1:50052&#39;</span></span></code></pre></div><p>And remove the rollups list from <code>astria_composer_rollups</code> variable to enable generic submissions to the Composer:</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">astria_composer_rollups = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span></span></code></pre></div><h2 id="run-the-rollup" tabindex="-1">Run the rollup <a class="header-anchor" href="#run-the-rollup" aria-label="Permalink to &quot;Run the rollup&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --instance</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> novm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span></span></code></pre></div><h2 id="install-the-rollup-cli" tabindex="-1">Install the <code>rollup-cli</code> <a class="header-anchor" href="#install-the-rollup-cli" aria-label="Permalink to &quot;Install the \`rollup-cli\`&quot;">​</a></h2><p>In the <code>noVM-messenger</code> repo run the following:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install-cli</span></span></code></pre></div><p>Export some environment variables to make the following commands easier:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PRIV_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2bd806c97f0e00af1a1fc3328fa763a9269723c8db8fac4f93af71db186d6e90&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ROLLUP_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:3030&quot;</span></span></code></pre></div><h2 id="submit-new-messages" tabindex="-1">Submit New Messages <a class="header-anchor" href="#submit-new-messages" aria-label="Permalink to &quot;Submit New Messages&quot;">​</a></h2><p>Send a transfer on the rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> transfer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --amount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2</span></span></code></pre></div><p>Submit new text to the rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --private-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $PRIV_KEY </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;a new message&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;username&quot;</span></span></code></pre></div><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>You may see an <code>ERROR astria_composer::metrics:</code> error in the Composer when submitting new messages. This results from setting <code>astria_composer_rollups = &#39;&#39;</code> to an empty value and can be ignored when testing the rollup.</p></div><h2 id="query-the-rollup" tabindex="-1">Query the Rollup <a class="header-anchor" href="#query-the-rollup" aria-label="Permalink to &quot;Query the Rollup&quot;">​</a></h2><p>To view recent messages that have been submitted to the rollup you can use:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> texts</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL</span></span></code></pre></div><p>See the balance of an account:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> balance</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm</span></span></code></pre></div><p>See the nonce of an account:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nonce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">astria1yf56efahcq786pe5t7paknat40g6q4tsvqtql2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rollup-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nonce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rollup-url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ROLLUP_URL </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">astria1rsxyjrcm255ds9euthjx6yc3vrjt9sxrm9cfgm</span></span></code></pre></div>`,47)]))}const g=i(l,[["render",n]]);export{c as __pageData,g as default};
