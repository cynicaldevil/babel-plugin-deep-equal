import * as fs from 'fs';
import * as babel from 'babel-core';
import deep_equal from '../src/index.js';

const fileName = process.argv[2];

fs.readFile(fileName, (err, data) => {
  if(err) throw err;

  const src = data.toString();

  const out = babel.transform(src, {
    plugins: [deep_equal]
  });

  console.log(out.code);
});