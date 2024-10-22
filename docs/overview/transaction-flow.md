<!-- markdownlint-disable MD029 -->

# Transaction Flow

The full transaction flow through the Astria Stack is as follows:

![Astria Transaction Flow](./assets/transaction-flow.png)

## Write Path: Transaction Submission

1. Users connect to the Geth rollup using standard Ethereum tooling such as
   Metamask or Foundry and sign and submit transactions which land in the
   rollup’s mempool.

2. The Composer retrieves pending transactions from the rollup’s mempool in the
   order in which they were received (ie. first come, first serve), wraps them
   in an Astria transaction, and submits them to Astria’s CometBFT mempool. In
   the current architecture, an instance of the Composer is run alongside each
   individual rollup.

    Our hope is that the Composer serves as a starting point for searchers and block
    builders interested in collecting end user order flow for one or more rollups
    and submitting it to the shared sequencer as bundles or blocks.

3. The Astria Shared Sequencer Network creates a single “meta block” consisting
   of transactions submitted to its mempool by one or more rollups.

    The development cluster relies on a single Astria sequencer node. In a live
    network, a decentralized set of nodes would use CometBFT to reach consensus.
    Note that Astria is a lazy sequencer, it provides a guarantee on the
    ordering of transactions in a block, but it doesn’t execute the state
    transition function (STF) of any given rollup.

4. The ordered blocks from the sequencer are retrieved by the Relayer, which
   sends them to both the Conductor and the data availability layer, Celestia.

    In the default development cluster configuration, Astria’s block time is
    ~1-second, while Celestia’s is ~11-seconds. At each Astria block time, blocks
    are sent to the Conductor and added to a queue of pending blocks waiting to be
    written to Celestia. At each Celestia block time these pending blocks are
    aggregated into a single batch which is submitted as one transaction to
    Celestia.

    A batch of sequencer blocks are included as a transactions in a Celestia block,
    at this point we consider the ordering of transactions to be finalized.

## Read Path: Block Retrieval and Execution

5. Each rollup runs its own instance of the Conductor. The Conductor receives
   individual blocks with Astria sequencer soft commitments at ~1-second Astria
   block times, and batches of blocks with firm commitments from Celestia at
   ~11-second Celestia block times. The Conductor filters these blocks, or
   batches of blocks, to contain only the data for its particular rollup’s
   namespace. Filtered blocks are passed to the rollup to be executed, resulting
   in an updated rollup state and state root.

    When the Conductor receives a batch of blocks from Celestia that it has
    previously seen from Astria, it informs the rollup that these blocks are
    finalized.
