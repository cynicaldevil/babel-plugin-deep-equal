const deep_equal = (babel) => {
  const t = babel.types;
  return {
    visitor: {
      BinaryExpression(path) {
        let name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      }
    }
  }
};

export default deep_equal;
