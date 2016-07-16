import * as babel from 'babel-core';
import template from "babel-template";

import { deep_equal_code, nodes } from './convert_deep_equal';

const deep_equal = (babel) => {
  const t = babel.types;

  const deep_equal_sourceString = deep_equal_fn.toString();
  const ast = buildRequire({
    BINARYEXP: modifiedBinaryExpr(),
  });

  return {
    visitor: {
      BinaryExpression(path) {

        // return if this expression is not satisfied
        // deep-equal does not perform operation on literals
        const returnExp = path.node.operator=== '===' &&
        t.isIdentifier(path.node.right) &&
        t.isIdentifier(path.node.left);
        if(!returnExp)
          return;
        path.replaceWith(ast);
      }
    }
  }
};

export default deep_equal;
