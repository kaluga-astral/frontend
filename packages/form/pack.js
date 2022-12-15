const { buildTs, rmDist } = require('@astral/commander');

rmDist();

buildTs({
  releaseTag: process.env.RELEASE_TAG,
});
