# Astria APIs

Astria uses Proto-Buf for its API definitions. These APIs are used throughout
the Astria stack for communication between different services.

See the Astria Proto-Buf API definitions [here](https://buf.build/astria).

## Primitives

The Primitives Proto-Bufs defined the different types that are used within all
other Astria APIs. This includes types such as:

- [Address](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Address):
  An Astria address type
- [Denom](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Denom):
  A denom type used by the Astria Sequencer
- [Proof](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Proof):
  A proof that a node is included in a Merkle tree.
- [RollupId](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.RollupId):
  An Id for the sequencer to identify a rollup namespace.
- [TransactionId](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.TransactionId):
  A unique identifier for transaction source tracking.
- [Uint128](https://buf.build/astria/primitives/docs/main:astria.primitive.v1#astria.primitive.v1.Uint128):
  An unsigned 128bit integer type for numerical values.

See the Astria `primitives` Proto-Buf definitions
[here](https://buf.build/astria/primitives/docs/main:astria.primitive.v1).

## Protocol-APIs

The Protocol APIs are used by services communicating directly with the Astria
Sequencer. This includes message definitions for things like:

- [Balance
  response](https://buf.build/astria/protocol-apis/docs/main:astria.protocol.accounts.v1#astria.protocol.accounts.v1.BalanceResponse):
  For returning the balance(s) of an account.
- [Nonce
  response](https://buf.build/astria/protocol-apis/docs/main:astria.protocol.accounts.v1#astria.protocol.accounts.v1.NonceResponse):
  For returning the nonce of an account.
- [Genesis
  information](https://buf.build/astria/protocol-apis/docs/main:astria.protocol.genesis.v1)
- [Deposit and Withdrawal
  Memos](https://buf.build/astria/protocol-apis/docs/main:astria.protocol.memos.v1)
- [Sequencer Block
  Actions](https://buf.build/astria/protocol-apis/docs/main:astria.protocol.transaction.v1)

See the Astria `protocol-apis` Proto-Buf definitions
[here](https://buf.build/astria/protocol-apis).

## Sequencerblock-APIs

The Sequencerblock APIs are used by the [Astria
Conductor](https://github.com/astriaorg/astria/tree/main/crates/astria-conductor),
[Astria Bridge
Withdrawer](https://github.com/astriaorg/astria/tree/main/crates/astria-bridge-withdrawer),
to retrieve sequencer block information from the Astria Sequencer. The main
methods defined are:

- [GetSequencerBlock](https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetSequencerBlock):
  Query the Astria Sequencer for a sequencer block.
- [GetFilteredSequencerBlock](https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetFilteredSequencerBlock):
  Query the Astria Sequencer for a sequencer block only containing the subset of
  transactions relevant to a specific rollup.
- [GetPendingNonce](https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1#astria.sequencerblock.v1.SequencerService.GetPendingNonce):
  Return the pending nonce for a specific sequencer account.

See the Astria `sequencerblock-apis` Proto-Buf definitions
[here](https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1).

## Composer-APIs

The Composer APIs are used for passing new transactions that have been submitted
to the rollup, and passing them on to the Composer. The main method used here
is:

- [SubmitRollupTransaction](https://buf.build/astria/composer-apis/docs/main:astria.composer.v1#astria.composer.v1.GrpcCollectorService.SubmitRollupTransaction)

See the Astria `composer-apis` Proto-Buf definitions
[here](https://buf.build/astria/composer-apis/docs/main:astria.composer.v1).

## Execution-APIs

The Execution APIs are used to drive deterministic production of blocks for any
rollup that utilizes The Astria Sequencer and is connected to the [Astria
Conductor](../overview/components/conductor.md). This includes methods such as:

- [GetGenesisInfo](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetGenesisInfo):
  For the Conductor to get the necessary genesis information from the rollup.
- [GetBlock](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetBlock):
  Retrieves information about a block from the sequencer.
- [BatchGetBlocks](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.BatchGetBlocks):
  Retrieve the information about a collection of blocks from the sequencer.
- [ExecuteBlock](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.ExecuteBlock):
  Get all the transaction information required to create a new rollup block for execution.
- [GetCommitmentState](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.GetCommitmentState):
  Retrieve the current commitment state of the rollup.
- [UpdateCommitmentState](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1#astria.execution.v1.ExecutionService.UpdateCommitmentState):
  Pass the updated commitment state to the rollup.

See the Astria `execution-apis` Proto-Buf definitions
[here](https://buf.build/astria/execution-apis/docs/main:astria.execution.v1).
