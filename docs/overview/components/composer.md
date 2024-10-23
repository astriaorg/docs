# The Astria Composer

As a sequencing layer, Astria is designed to provide lazy sequencing for multiple
rollups. This requires abstracting rollup-specific order flow via the sequencer
network's transactions, which operate on opaque bytes that are not executed. By
remaining agnostic to rollup-specific transaction formats, the sequencer network
is able to provide a robust MEV supply chain for rollups built on top of it,
with features like native bundle support.

While the sequencing layer provides a powerful tool for sophisticated users,
supporting a wider range of users requires additional tooling. The Astria Composer
is "gas station" side car that makes it easier for ordinary users to easily
use rollups that support more complex order flow mechanisms.

## The Composer as a UX solution

While sophisticated users, such as arbitrageurs, can leverage the sequencing layer
directly to pay for better transaction ordering guarantees, most users will not
require (or be interested) in this level of control. Specifically, interacting
directly with the sequencing layer requires users to hold sequencer tokens and
to maintain a sequencer wallet, both of which result in a poor user experience.

Instead, we provide rollup operators with tooling to abstract this complexity
away using the Astria Composer. Rollup operators run the Composer as side-car
software to their nodes. The Composer can be described as a "gas station",
underwriting the sequencing costs for users' rollup transactions.

This allows order-agnostic users to simply pay for transaction execution in the
rollup's native gas token without needing to maintain a sequencer wallet, as long
as the operator keeps the Composer funded. The Composer then bundles these
transactions and submits them to the sequencer network on the user's behalf.

## Heterogenous order flow support

This allows Astria-based rollups to support a wide range of users, from those
who want to pay for better transaction ordering to those with no explicit
sequencing preferences.

Sophisticated users can submit their transactions directly to the sequencing
layer, controlling the order by which their transactions are bundled and the
fees they pay for bundle ordering.

In contrast, regular users are able to route their transactions through the
rollup node, which will run the Composer as a sidecar to underwrite the cost
of inclusion but with no control over the ordering.

## Naive ordering preferences

The Composer provides users with no ordering guarantees, bundling transactions
by the order they are received. Bundles are capped in size to ensure they fit
in a sequencer block, and are submitted to the sequencer network in a timely
manner to ensure they can be included in the next sequencer block.
