# Astria APIs

Astria uses Protobuf for its API definitions. These APIs are used throughout
the Astria stack for communication between different services.

See the Astria Protobuf API definitions [here](https://buf.build/astria).

## Primitives

The Primitives Protobufs defined the different types that are used within all
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

See the Astria `primitives` Protobuf definitions
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

See the Astria `protocol-apis` Protobuf definitions
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

See the Astria `sequencerblock-apis` Protobuf definitions
[here](https://buf.build/astria/sequencerblock-apis/docs/main:astria.sequencerblock.v1).

## Composer-APIs

The Composer APIs are used for passing new transactions that have been submitted
to the rollup, and passing them on to the Composer. The main method used here
is:

- [SubmitRollupTransaction](https://buf.build/astria/composer-apis/docs/main:astria.composer.v1#astria.composer.v1.GrpcCollectorService.SubmitRollupTransaction)

See the Astria `composer-apis` Protobuf definitions
[here](https://buf.build/astria/composer-apis/docs/main:astria.composer.v1).

## Execution-API

The Execution API is used to drive deterministic production of blocks for any
rollup that utilizes The Astria Sequencer and is connected to the [Astria
Conductor](../overview/components/conductor.md). It includes the following methods:

- [CreateExecutionSession](https://buf.build/astria/execution-apis/docs/main:astria.execution.v2#astria.execution.v2.ExecutionService.CreateExecutionSession):
  Requests a new execution session from the rollup. See the
  [Execution API Spec](https://github.com/astriaorg/astria/blob/b0bd4025bfb7702b99e79e23cc6bc2c5d2b10db2/specs/execution-api.md#execution-sessions)
  for more details on Execution Sessions.
- [ExecuteBlock](https://buf.build/astria/execution-apis/docs/main:astria.execution.v2#astria.execution.v2.ExecutionService.ExecuteBlock):
  Drives block execution on rollup, returning its metadata once execution is complete.
- [GetExecutedBlockMetadata](https://buf.build/astria/execution-apis/docs/main:astria.execution.v2#astria.execution.v2.ExecutionService.GetExecutedBlockMetadata):
  Retrieves information about a previously executed block from the rollup.
- [UpdateCommitmentState](https://buf.build/astria/execution-apis/docs/main:astria.execution.v2#astria.execution.v2.ExecutionService.UpdateCommitmentState):
  Passes the updated commitment state to the rollup.

See the Astria `execution-apis` Protobuf definitions
[here](https://buf.build/astria/execution-apis/docs/main:astria.execution.v2).
