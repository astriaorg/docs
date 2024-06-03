# The Astria Sequencer Network

The Astria sequencer network uses CometBFT (formerly Tendermint) as its
consensus algorithm. At a minimum, the sequencer network needs to implement a
decentralized leader selection algorithm which rotates between proposers.
Ideally, it is also able to provide single-slot (“fast”) finality, which
prevents forks from occurring, allowing for simplified chain derivation logic on
the rollups which use it. CometBFT is able to provide both of these.
Additionally, CometBFT is battle-tested and has been used in production, on many
chains, for years. It allows blockchain applications (application, in this case,
meaning the chain’s execution logic) which implement ABCI (Application
Blockchain Interface) to easily use it as their consensus layer. Additionally,
CometBFT-enabled chains have the ability to support IBC (inter-blockchain
communication), meaning they have the potential to bridge between many other
chains.

Astria sequencer’s execution logic is implemented as a CometBFT application,
written in Rust. The application logic allows for three main functions:

* sequencing of rollup data
* value transfers
* validator set changes

During the consensus phase of the sequencer network, the proposer decides on the
transactions for the block and creates a commitment to the rollup data for each
rollup_id. This is then verified and only finalized if agreed upon by the
majority of other nodes. This allows for rollups to only pull the data necessary
for their rollup, checking that the commitment to it matches what was finalized
by the sequencer chain, without needing to pull the entire sequencer block’s
data.

The sequencer network also needs to make its block data available to rollup
nodes. During the consensus process, the block data needs to be made available
to all validators, so that they can verify and vote on the rollup data
commitments (ie. they need to ensure the commitments match the block data).
After the consensus process, the data is made more widely available via a data
availability layer. Celestia is used for DA, as it supports data availability
sampling via light nodes, meaning a light node is able to check if data was made
available.
