function hyperscript(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

/** @jsx hyperscript */
let node = <div id="Diego">Front end developer</div>;
console.log("Node", node);
