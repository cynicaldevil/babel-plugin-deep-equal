const immutable_rust = (babel) => {
  const t = babel.types;
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name;
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('');
      }
    }
  }
};

export default immutable_rust;
