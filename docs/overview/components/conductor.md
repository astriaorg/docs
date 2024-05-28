# The Astria Conductor

The Conductor can be thought of as the consensus implementation of a rollup full
node, similar to op-node within the OP Stack. The conductor is run as one half
on a rollup full node, where the other half is the execution engine. Its role is
to connect the sequencer and DA layers to the rollup execution layer by deriving
the relevant rollup transactions for each block and passing them to the
execution layer.

The conductor’s flow looks like:
![Astria Conductor](../assets/astria-conductor.png)

For each sequencer block, parse the relevant rollup data it needs validate the
batch of rollup data; this includes verifying that the corresponding sequencer
block was finalized, as well as verifying that the rollup data it extracted is
complete (there are no rollup transactions missing), correct (there are no
rollup transactions in the batch that shouldn’t be), and properly-ordered (the
ordering of the rollup transactions matches what was finalized by the sequencer
chain). It is able to do this by verifying the data against the rollup data
commitment included in the sequencer block. Once it has validated the rollup
data, it turns it into a list of transactions, which are passed to the execution
engine.

Note that the conductor, like the sequencer, is agnostic to the rollup’s
transaction format and execution engine; it simply treats transactions as an
arbitrary byte array.

## Data verification

The conductor needs to verify the data it receives before passing it to the
rollup. Specifically, it needs to verify that the data is actually what was
sequenced by the sequencer in the correct order, that there is no data missing,
and that there is no additional data added. The conductor wishes to do this
without pulling the entire set of sequenced data or the entire sequencer block,
as this is additional data it doesn’t need.

This is achieved by placing a commitment to the entire set of sequenced data in
every sequencer block. This commitment is the Merkle root of a tree where each
leaf is a commitment to the data for one specific rollup. This commitment is
checked by every validator node on the sequencer network, thus has the majority
of stake backing it. Then, the conductor can verify the rollup data received is
correct by validating:

* the commitment to the entire set of sequenced data was committed by the
  network, via the set of validator signatures on the block
* the commitment to its specific rollup data is included in that, via a merkle
  proof of inclusion
* the rollup data it receives corresponds to the commitment for that rollup
  data, via recalculating the commitment

After all of these steps are done, the conductor can be certain that the rollup
data is actually what was sequenced.

There is an additional verification step needed: since the conductor doesn’t
pull an entire block’s data, there needs to be consensus over what rollup IDs
were sequenced in a sequencer block. It’s possible that a sequencer node doesn’t
advertise that a rollup ID was included (i.e. by not posting it to DA). Then,
the conductor would think that it simply had no sequenced data in a certain
block when it actually did.

This is fixed by having a commitment to all the rollup IDs sequenced inside each
sequencer block, which is checked and voted on by every validator. Then, the
conductor receives a list of all the rollup IDs sequenced in a block and
verifies that against the rollup IDs commitment to be certain as to whether a
block had data for it or not.