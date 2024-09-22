// import {createElement} from 'react';
// const E = createElement;

// function cre(type, props, ...children) {
//   if (!type) throw Error('you must provide a type to the element');

//   if (
//     typeof type === 'number' ||
//     (typeof type === 'string' && !props && !children)
//   ) {
//     return;
//   }

//   if (typeof type === 'boolean') {
//     return;
//   }

//   if (typeof children === 'string') {
//     return;
//   }
//   renderE(type, props);
//   return {type, props: {props, children}};
// }

// function renderE(type, props) {
//   const el = document.createElement(type);
//   for (const prop in props) {
//     el.setAttribute(prop, props[prop]);
//   }
//   return el;
// }

export function Header() {
  // return E(
  //   'header',
  //   {
  //     style: {
  //       display: 'flex',
  //       justifyContent: 'space-between',
  //       alignItems: 'center',
  //     },
  //   },
  //   E('img', {src: '/logo.png', style: {width: '100%', maxWidth: '200px'}}),
  //   E(
  //     'nav',
  //     {style: {display: 'flex', gap: '1rem'}},
  //     E('a', {href: '/about'}, 'some link'),
  //     E('a', {href: '/contact-us'}, 'some link'),
  //     E('a', {href: '#packages-section'}, 'some link')
  //   )
  // );
}
