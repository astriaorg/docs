import{_ as r,c as t,a3 as a,o as i}from"./chunks/framework.ohJJpums.js";const h=JSON.parse('{"title":"Astria APIs","description":"","frontmatter":{},"headers":[],"relativePath":"developer/apis.md","filePath":"developer/apis.md","lastUpdated":1729701864000}'),o={name:"developer/apis.md"};function s(n,e,c,l,u,p){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="astria-apis" tabindex="-1">Astria APIs <a class="header-anchor" href="#astria-apis" aria-label="Permalink to &quot;Astria APIs&quot;">​</a></h1><p>Astria uses Protobuf for its API definitions. These APIs are used throughout the Astria stack for communication between different services.</p><p>See the Astria Protobuf API definitions <a href="https://buf.build/astria" target="_blank" rel="noreferrer">here</a>.</p><h2 id="primitives" tabindex="-1">Primitives <a class="header-anchor" href="#primitives" aria-label="Permalink to &quot;Primitives&quot;">​</a></h2><p>The Primitives Protobufs defined the different types that are used within all other Astria APIs. This includes types such as:</p><ul><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Address" target="_blank" rel="noreferrer">Address</a>: An Astria address type</li><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Denom" target="_blank" rel="noreferrer">Denom</a>: A denom type used by the Astria Sequencer</li><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Proof" target="_blank" rel="noreferrer">Proof</a>: A proof that a node is included in a Merkle tree.</li><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.RollupId" target="_blank" rel="noreferrer">RollupId</a>: An Id for the sequencer to identify a rollup namespace.</li><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.TransactionId" target="_blank" rel="noreferrer">TransactionId</a>: A unique identifier for transaction source tracking.</li><li><a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Uint128" target="_blank" rel="noreferrer">Uint128</a>: An unsigned 128bit integer type for numerical values.</li></ul><p>See the Astria <code>primitives</code> Protobuf definitions <a href="https://buf.build/astria/primitives/docs/main:astria.primitive.v1" target="_blank" rel="noreferrer">here</a>.</p><h2 id="protocol-apis" tabindex="-1">Protocol-APIs <a class="header-anchor" href="#protocol-apis" aria-label="Permalink to &quot;Protocol-APIs&quot;">​</a></h2><p>The Protocol APIs are used by services communicating directly with the Astria Sequencer. This includes message definitions for things like:</p><ul><li><a href="https://buf.build/astria/protocol-apis/docs/main:astria.protocol.accounts.v1#astria.protocol.accounts.v1.BalanceResponse" target="_blank" rel="noreferrer">Balance response</a>: For returning the balance(s) of an account.</li><li><a href="https://buf.build/astria/protocol-apis/docs/main:astria.protocol.accounts.v1#astria.protocol.accounts.v1.NonceResponse" target="_blank" rel="noreferrer">Nonce response</a>: For returning the nonce of an account.</li><li><a href="https://buf.build/astria/protocol-apis/docs/main:astria.protocol.genesis.v1" target="_blank" rel="noreferrer">Genesis information</a></li><li><a href="https://buf.build/astria/protocol-apis/docs/main:astria.protocol.memos.v1" target="_blank" rel="noreferrer">Deposit and Withdrawal Memos</a></li><li><a href="https://buf.build/astria/protocol-apis/docs/main:astria.protocol.transaction.v1" target="_blank" rel="noreferrer">Sequencer Block Actions</a></li></ul><p>See the Astria <code>protocol-apis</code> Protobuf definitions <a href="https://buf.build/astria/protocol-apis" target="_blank" rel="noreferrer">here</a>.</p><h2 id="sequencerblock-apis" tabindex="-1">Sequencerblock-APIs <a class="header-anchor" href="#sequencerblock-apis" aria-label="Permalink to &quot;Sequencerblock-APIs&quot;">​</a></h2><p>The Sequencerblock APIs are used by the <a href="https://github.com/astriaorg/astria/tree/main/crates/astria-conductor" target="_blank" rel="noreferrer">Astria Conductor</a>, <a href="https://github.com/astriaorg/astria/tree/main/crates/astria-bridge-withdrawer" target="_blank" rel="noreferrer">Astria Bridge Withdrawer</a>, to retrieve sequencer block information from the Astria Sequencer. The main methods defined are:</p><ul><li><a href="https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetSequencerBlock" target="_blank" rel="noreferrer">GetSequencerBlock</a>: Query the Astria Sequencer for a sequencer block.</li><li><a href="https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetFilteredSequencerBlock" target="_blank" rel="noreferrer">GetFilteredSequencerBlock</a>: Query the Astria Sequencer for a sequencer block only containing the subset of transactions relevant to a specific rollup.</li><li><a href="https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetPendingNonce" target="_blank" rel="noreferrer">GetPendingNonce</a>: Return the pending nonce for a specific sequencer account.</li></ul><p>See the Astria <code>sequencerblock-apis</code> Protobuf definitions <a href="https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1" target="_blank" rel="noreferrer">here</a>.</p><h2 id="composer-apis" tabindex="-1">Composer-APIs <a class="header-anchor" href="#composer-apis" aria-label="Permalink to &quot;Composer-APIs&quot;">​</a></h2><p>The Composer APIs are used for passing new transactions that have been submitted to the rollup, and passing them on to the Composer. The main method used here is:</p><ul><li><a href="https://buf.build/astria/composer-apis/docs/main:astria.composer.v1#astria.composer.v1.GrpcCollectorService.SubmitRollupTransaction" target="_blank" rel="noreferrer">SubmitRollupTransaction</a></li></ul><p>See the Astria <code>composer-apis</code> Protobuf definitions <a href="https://buf.build/astria/composer-apis/docs/main:astria.composer.v1" target="_blank" rel="noreferrer">here</a>.</p><h2 id="execution-apis" tabindex="-1">Execution-APIs <a class="header-anchor" href="#execution-apis" aria-label="Permalink to &quot;Execution-APIs&quot;">​</a></h2><p>The Execution APIs are used to drive deterministic production of blocks for any rollup that utilizes The Astria Sequencer and is connected to the <a href="./../overview/components/conductor">Astria Conductor</a>. This includes methods such as:</p><ul><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetGenesisInfo" target="_blank" rel="noreferrer">GetGenesisInfo</a>: For the Conductor to get the necessary genesis information from the rollup.</li><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetBlock" target="_blank" rel="noreferrer">GetBlock</a>: Retrieves information about a block from the sequencer.</li><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.BatchGetBlocks" target="_blank" rel="noreferrer">BatchGetBlocks</a>: Retrieve the information about a collection of blocks from the sequencer.</li><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.ExecuteBlock" target="_blank" rel="noreferrer">ExecuteBlock</a>: Get all the transaction information required to create a new rollup block for execution.</li><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetCommitmentState" target="_blank" rel="noreferrer">GetCommitmentState</a>: Retrieve the current commitment state of the rollup.</li><li><a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.UpdateCommitmentState" target="_blank" rel="noreferrer">UpdateCommitmentState</a>: Pass the updated commitment state to the rollup.</li></ul><p>See the Astria <code>execution-apis</code> Protobuf definitions <a href="https://buf.build/astria/execution-apis/docs/main:astria.execution.v1" target="_blank" rel="noreferrer">here</a>.</p>',23)]))}const f=r(o,[["render",s]]);export{h as __pageData,f as default};