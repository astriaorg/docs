---
sidebar_position: 7
---

# Conductor

<!--@include: ./../../components/_deployment-instructions-redirect.md-->

<DeploymentsRedirect />

Conductor's role is to drive the deterministic execution of sequencer blocks to
rollups.

It abstracts away the logic required to read data from the DA and the
Sequencer, tracking firm and soft commitments, block and header shapes, as well
as verification of the data. The rollup implements the Execution API server, and
runs the Conductor alongside to drive deterministic execution. The Conductor is
effectively stateless but does ephemerally store some information about the
blocks it has seen and passed on to be executed.

It filters the transactions that are relevant to the given rollup it is running
along side, out of the sequencer blocks for execution. The data that it does store is
for sending commitment updates to the rollup.

As mentioned in the
[Relayer](/docs/overview/architecture/6-relayer.mdx) section, any data
received by the Conductor directly from the Relayer is considered a soft commit.
This data is filtered using the rollup's namespace and only transactions that
are relevant to the rollup are passed on as blocks for execution. These blocks
are also marked as "safe" withing the rollup. The Conductor regularly polls Celestia for new data
and when it sees the same blocks in Celestia that it has already seen from the
Relayer, it sends a firm commit message to the rollup to update that block to
"finalized."

See the [Conductor code
here.](https://github.com/astriaorg/astria/tree/main/crates/astria-conductor)
