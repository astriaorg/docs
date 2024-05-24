# The Astria Composer

To use a rollup on Astria, users need to somehow submit rollup transactions as
sequencer transactions to the sequencer network. However, this requires having
access to two different nodes (rollup and sequencer), as well as having tokens
for fees on both networks. This is not ideal for UX.

A solution to this is to have a dedicated service that wraps rollup transactions
as a sequencer transaction and submits them on a rollup user’s behalf. In the
Astria stack, we have a service called the composer that performs this function.
The composer only needs sequencer tokens, while the user only needs rollup
tokens. The user submits transactions as normal to a rollup node. The composer
picks up these transactions and ensures they are sequenced.

The incentive for the composer is the ability to make bundles of rollup
transactions, ensuring they are included in a specific order. In this regard,
the composer can be thought of as a MEV searcher.

The current implementation of the composer is naive and doesn’t perform any
searching or bundling, although it could be extended to do so. Our hope is that
the Composer serves as a starting point for searchers and block builders
interested in collecting end user order flow for one or more rollups and
submitting it to the shared sequencer as bundles or blocks.
