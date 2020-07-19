function hyperscript(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

const benefits = [
  "Better understanding",
  "More control over what is happening",
];

/** @jsx hyperscript */
let vnode = (
  <div id="jsx">
    <h1>Building a JSX renderer</h1>
    <h2>By Diego lopes - Front end developer</h2>

    <p>
      This is an HTML page with a single babel-transpiled JS file and no
      dependencies. It is rendering DOM via JSX without any frameworks.
    </p>

    <h2>Benefits:</h2>
    <ul>
      {benefits.map((ability) => (
        <li>{ability}</li>
      ))}
    </ul>
  </div>
);

function render(vnode) {
  if (vnode.split) return document.createTextNode(vnode);
  const node = document.createElement(vnode.nodeName);
  const attributes = vnode.attributes || {};
  Object.keys(attributes).forEach((key) =>
    node.setAttribute(key, attributes[key])
  );
  (vnode.children || []).forEach((child) => node.appendChild(render(child)));
  return node;
}

const dom = render(vnode);
document.body.appendChild(dom);

let json = JSON.stringify(vnode, null, 4);
document.body.appendChild(render(<pre id="vdom">{json}</pre>));
