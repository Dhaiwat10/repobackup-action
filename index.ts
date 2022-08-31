import { Web3Storage, getFilesFromPath } from 'web3.storage';
import core from '@actions/core';

// please dont steal
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGE4MkJCMTcxODFFQmMyZTMxMUQ2ZGU1MjA1RTNDYzg0NzdlNThBNUQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjE5NjEzNDU0NTUsIm5hbWUiOiJnaXQtYmFja3VwLXRlc3QifQ.Qhk_dWL8kKDuUSbAtjkdEa_ZZeTTZv-eqJXBBwcACNk';

const client = new Web3Storage({ token: API_TOKEN });

async function storeFiles(path = '.') {
  const files = await getFilesFromPath(path);
  for (const f of files) {
    console.log(f);
    // { name: '/path/to/me', stream: [Function: stream] }
  }

  // const cid = await client.put(files);
  // console.log(`stored ${files.length} files. cid: ${cid}`);
  // core.setOutput('cid', cid);
}

try {
  storeFiles();
} catch (error: any) {
  core.setFailed(error.message);
}
