function hyperscript(nodeName, attributes, ...args) {
  let children = args.length ? [].concat(...args) : null;
  return { nodeName, attributes, children };
}

/** @jsx hyperscript */
let vnode = (
  <div id="jsx">
    <h1>Building a JSX renderer</h1>
    <h2>By Diego lopes - Front end developer</h2>

    <p>
      This is an HTML page with a single babel-transpiled JS file and no
      dependencies. It is rendering DOM via JSX without any frameworks.
    </p>
  </div>
);
