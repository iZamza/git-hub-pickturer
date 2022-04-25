const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');

const filesWithChanges = './gitter.json';

const makeCommit = (x, y) => {
  const commitDate = moment().subtract(1, 'y')
    .add(x, 'w')
    .add(y, 'd')
    .format();

  jsonfile.writeFile(
    filesWithChanges,
    { data: commitDate },
    () => {
      simpleGit()
        .add([filesWithChanges])
        .commit(commitDate, {'--date': commitDate })
        .push();
  });
}

// position of commit
makeCommit(1, 1);

