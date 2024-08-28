import{_ as s,c as a,o as i,a5 as e}from"./chunks/framework.-Zveb6AF.js";const t="/assets/dusk-10-go-cli-remote-sequencer.5qdwqet7.png",y=JSON.parse('{"title":"Run a Local Rollup against a Remote Sequencer","description":"","frontmatter":{},"headers":[],"relativePath":"developer/tutorials/run-local-rollup-against-remote-sequencer.md","filePath":"developer/tutorials/run-local-rollup-against-remote-sequencer.md","lastUpdated":1724887298000}'),n={name:"developer/tutorials/run-local-rollup-against-remote-sequencer.md"},l=e(`<h1 id="run-a-local-rollup-against-a-remote-sequencer" tabindex="-1">Run a Local Rollup against a Remote Sequencer <a class="header-anchor" href="#run-a-local-rollup-against-a-remote-sequencer" aria-label="Permalink to &quot;Run a Local Rollup against a Remote Sequencer&quot;">​</a></h1><p>This guide will walk you through running a local Geth rollup against a remote Astria sequencer, using the <code>astria-go</code> cli to run the required components of the Astria stack locally on your machine.</p><h2 id="setup-a-geth-rollup" tabindex="-1">Setup a Geth Rollup <a class="header-anchor" href="#setup-a-geth-rollup" aria-label="Permalink to &quot;Setup a Geth Rollup&quot;">​</a></h2><h3 id="build-geth" tabindex="-1">Build Geth <a class="header-anchor" href="#build-geth" aria-label="Permalink to &quot;Build Geth&quot;">​</a></h3><p>Requires <code>Go</code>, <code>just</code>, and <code>Foundry</code>:</p><ul><li><a href="https://go.dev/doc/install" target="_blank" rel="noreferrer">Go</a></li><li><a href="https://github.com/casey/just" target="_blank" rel="noreferrer">just</a></li><li><a href="https://book.getfoundry.sh/getting-started/installation" target="_blank" rel="noreferrer">Foundry</a></li></ul><p>Open a new terminal window and clone and build Geth.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ARIkM" id="tab-LT1tld_" checked="checked"><label for="tab-LT1tld_">SSH</label><input type="radio" name="group-ARIkM" id="tab-CDacwtb"><label for="tab-CDacwtb">HTTPS</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:astriaorg/astria-geth.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-geth</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/astriaorg/astria-geth.git</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astria-geth</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local-dev</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean</span></span></code></pre></div></div></div><h3 id="configure-the-geth-genesis-information" tabindex="-1">Configure the Geth Genesis Information <a class="header-anchor" href="#configure-the-geth-genesis-information" aria-label="Permalink to &quot;Configure the Geth Genesis Information&quot;">​</a></h3><p>Once you have built the Geth node, you will need to update some additional genesis information to work with the remote sequencer.</p><p>Run the following using the Astira cli:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> blockheight</span></span></code></pre></div><p>Then, open the <code>geth-genesis-local.json</code> file and update the <code>chainId</code> and <code>astriaRollupName</code> to something of your choosing, as well as updating <code>astriaSequencerInitialHeight</code> using the block height from the previous command to choose which sequencer block the first block of your rollup will be in:</p><p>Create a new genesis account for your Geth rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cast</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> w</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span></span></code></pre></div><p>Also in the <code>geth-genesis-local.json</code> file, update the <code>&quot;alloc&quot;</code> account with your new one:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;config&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;chainId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> digit</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> number&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;astriaRollupName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your rollup name&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;astriaSequencerInitialHeight&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;sequencer</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> block</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> height&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;alloc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;&lt;your new address&gt;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;balance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;300000000000000000000&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Keep the <code>chainId</code> and <code>astriaRollupName</code> you chose on hand, as they will also be needed for running the <a href="./test-transactions">test transactions</a> and <a href="#configure-the-local-astria-components">configuring the Astria composer</a> later on.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When starting a new rollup, it is always best to use the most recent height of the remote Sequencer for your rollup&#39;s initial sequencer height. The Astria Conductor will always start syncing the rollup from the <code>&quot;astriaSequencerInitialHeight&quot;</code> provided. Using older block heights will work but will cause your rollup to sync potentially millions of blocks that have no relevant data for your new rollup.</p></div><p>You will use the private key for your new account to send <a href="./test-transactions">test transactions</a> later on.</p><h2 id="start-geth" tabindex="-1">Start Geth <a class="header-anchor" href="#start-geth" aria-label="Permalink to &quot;Start Geth&quot;">​</a></h2><p>In your Geth terminal window, run the following to initialize and run the Geth rollup:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># in astria-geth dir</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>If you need to restart the rollup, you can stop the program with <code>Ctrl+C</code> and restart with:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>If you need to restart the rollup and want to also clear the state data, you can use:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">just</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clean-restart</span></span></code></pre></div><h2 id="configure-the-local-astria-components" tabindex="-1">Configure the Local Astria components <a class="header-anchor" href="#configure-the-local-astria-components" aria-label="Permalink to &quot;Configure the Local Astria components&quot;">​</a></h2><p>Open a new terminal window and initialize the cli:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><p>When running against the remote sequencer, you will also need to create a new sequencer account.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequencer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> createaccount</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --insecure</span></span></code></pre></div><p>Navigate to the <code>~/.astria</code> directory. If you have run the commands shown above, you should find a <code>default</code> directory.</p><p>Open the <code>~/.astria/default/networks-config.toml</code> file and update the <code>rollup_name</code> variable in the <code>[networks.dusk]</code> sections using the same <code>&quot;astriaRollupName&quot;</code> you used when <a href="#setup-a-geth-rollup">setting up your Geth rollup</a>.</p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dusk</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequencer_chain_id = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;astria-dusk-10&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequencer_grpc = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://grpc.sequencer.dusk-10.devnet.astria.org/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sequencer_rpc = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://rpc.sequencer.dusk-10.devnet.astria.org/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rollup_name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&lt;your rollup name&gt;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # update this value</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">default_denom = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;nria&#39;</span></span></code></pre></div><p>Then open the <code>~/.astria/default/config/composer_dev_priv_key</code> and replace dev private key in that file with your private key from the sequencer account you just created.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>If you skip updating the priv key the Astria services will still start correctly but your Composer will not be able to submit transactions to the sequencer.</p></div><p>You can then use the <a href="https://faucet.sequencer.dusk-10.devnet.astria.org/" target="_blank" rel="noreferrer">Sequencer Faucet</a> to fund the account you just created using the account address.</p><h2 id="run-the-local-astria-components-against-the-remote-sequencer" tabindex="-1">Run the local Astria components against the Remote Sequencer <a class="header-anchor" href="#run-the-local-astria-components-against-the-remote-sequencer" aria-label="Permalink to &quot;Run the local Astria components against the Remote Sequencer&quot;">​</a></h2><p>Run the local Astria components against the remote sequencer:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">astria-go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --network</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dusk</span></span></code></pre></div><p>When running against the remote sequencer, you will see a TUI that displays the logs of the Astria Conductor and Composer: <img src="`+t+`" alt="Running against a remote sequencer using the Astria
cli"></p><h2 id="test-your-rollup" tabindex="-1">Test your Rollup <a class="header-anchor" href="#test-your-rollup" aria-label="Permalink to &quot;Test your Rollup&quot;">​</a></h2><p>To test that your rollup and the sequencer are configured and running correctly, you can follow the <a href="./test-transactions">Test Transactions instructions here</a>.</p>`,44),h=[l];function o(p,r,c,k,d,u){return i(),a("div",null,h)}const F=s(n,[["render",o]]);export{y as __pageData,F as default};
