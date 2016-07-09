const deep_equal = (babel) => {
  const t = babel.types;

  const deep_equal_sourceString = `
    (function test() {
      return true;
    })()
  `;

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
        path.replaceWithSourceString(deep_equal_sourceString);
      }
    }
  }
};

export default deep_equal;
