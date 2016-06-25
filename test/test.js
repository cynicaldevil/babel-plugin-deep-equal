import * as fs from 'fs';
import * as babel from 'babel-core';
import immutable_rust from '../src/index.js';

const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
  if(err) throw err;

  const src = data.toString();

  const out = babel.transform(src, {
    plugins: [immutable_rust]
  });

  console.log(out.code);
});