function cec(type, props, ...children) {
  if (!type) throw Error('you must provide a type to the element');

  if (
    typeof type === 'number' ||
    (typeof type === 'string' && !props && children.length === 0)
  ) {
    return {type: null, props: null, children: type};
  }

  if (typeof type === 'boolean') {
    return {type: null, props: null, children: null};
  }
  if (typeof type === 'function') {
    return type(props);
  }
  return {type, props, children};
}

function renderE({type, props, children}) {
  if (!type) {
    return document.createTextNode(children || '');
  }
  const el = document.createElement(type);
  for (const prop in props) {
    if (prop === 'style') {
      const arr = [];
      for (const style in props[prop]) {
        arr.push(`${camelToKebab(style)}: ${props[prop][style]};`);
      }
      el.setAttribute('style', arr.join(''));
      continue;
    }
    el.setAttribute(prop, props[prop]);
  }
  for (const child of children) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(renderE(child));
    }
  }
  return el;
}

function Title({text}) {
  return cec('h1', {}, text);
}

function App() {
  return cec(
    'main',
    {},
    cec(
      'header',
      {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      },
      cec('img', {
        src: '/logo.png',
        style: {width: '100%', maxWidth: '200px'},
      }),
      cec(
        'nav',
        {style: {display: 'flex', gap: '1rem'}},
        cec('a', {href: '/about'}, 'some link'),
        cec('a', {href: '/contact-us'}, 'some link'),
        cec('a', {href: '#packages-section'}, 'some link')
      )
    ),
    cec(Title, {text: 'main text'})
  );
}
console.log(App());

document.body.appendChild(renderE(App()));

function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
