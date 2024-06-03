# Relayer

The relayer's responsibility is to fetch validated blocks from the sequencer and
pass them along to the DA layer. Because the sequencer's block times are much
faster than those of the DA, the relayer batches the ordered data from multiple
sequencer blocks before compressing it and submitting it to the DA.

The individual sequencer blocks can also be fetched by the Conductor before the
relayer has submitted them to the DA. This enables fast finality for an improved
UX, acting as soft commits for the execution layer. The collections of data sent
to the DA layer by the relayer are used as a source of truth and are ultimately
pulled from the DA to be used as firm commits for finality in the rollups.
