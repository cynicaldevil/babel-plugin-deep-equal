import * as babel from 'babel-core';
import template from "babel-template";

import { deep_equal_code, nodes } from './convert_deep_equal';

const deep_equal = (babel) => {
  const t = babel.types;

  const buildRequire = template(deep_equal_code);
  let counter = 0;

  const modifiedBinaryExpr = () => {
    const exp = t.binaryExpression("===", nodes[counter].left, nodes[counter].right);
    counter++;
    exp.isClean = true;
    return exp;
  }

  const ast = buildRequire({
    BINARYEXPR: modifiedBinaryExpr(),
  });

  return {
    visitor: {
      BinaryExpression(path) {
        if(path.node.isClean) return;

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
