# Astria APIs

Astria uses Proto-Buf for its API definitions. These APIs are used throughout
the Astria stack for communication between different services.

See the Astria Proto-Buf API definitions [here](https://buf.build/astria).

## Primitives

The Primitives Proto-Bufs defined the different types that are used within all
other Astria APIs. This includes types such as:
- Address: An Astria address type
- Denom: A denom type used by the Astria Sequencer
- Proof: 
- RollupId: An Id for the sequencer to identify a rollup namespace.
- Uint128: An unsigned 128bit integer type for numerical values.

See the Astria `primitives` Proto-Buf definitions
[here](https://buf.build/astria/primitives).

## Protocol-APIs

The Protocol APIs are used when communicating with the Astria Sequencer. This
includes message definitions for things like:
- Balance response: For returning 

See the Astria `protocol-apis` Proto-Buf definitions
[here](https://buf.build/astria/protocol-apis).

## Sequencerblock-APIs

See the Astria `sequencerblock-apis` Proto-Buf definitions
[here](https://buf.build/astria/sequencerblock-apis).

## Composer-APIs

See the Astria `composer-apis` Proto-Buf definitions
[here](https://buf.build/astria/composer-apis).

## Execution-APIs

See the Astria `execution-apis` Proto-Buf definitions
[here](https://buf.build/astria/execution-apis).
