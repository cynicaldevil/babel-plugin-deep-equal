// this file takes the deep_equal function from deep_equal_fn.js
// and inserts the string 'BINARYEXPR' in place of all binary
// expressions, and stores the left and right nodes in a separate object
// These left and right nodes will be inserted into a template later

import * as fs from 'fs';
import * as babel from 'babel-core';

const fileName = './src/deep_equal_fn.js';

let deep_equal_code;
let nodes = [];

const convert_deep_equal = (babel) => {
  const t = babel.types;

  return {
    visitor: {
      BinaryExpression(path) {

        if(path.node.operator !== '===')
          return;
        else {
          nodes.push({
            left: path.node.left,
            right: path.node.right
          });
        }

        path.replaceWith(t.identifier('BINARYEXPR'));
      }
    }
  }
};

let src = fs.readFileSync(require('path').resolve(fileName));

if(src)
  src = src.toString();

const out = babel.transform(src, {
  plugins: [convert_deep_equal]
});

deep_equal_code = out.code;

export {deep_equal_code, nodes};
