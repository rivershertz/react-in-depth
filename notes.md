# React From Scratch with Nir Kaufman

## What is react?

#### Definition #1 of react

A diff engine - a program that uses a diff engine in order to construct UI in a declarative manner.
react creates a structure that defines UI.

UI - user interface
GUI - graphical user interface

the output of react is an object that is structured using specific keywords based on the target environment (website, IOT, terminal...)

React doesn't know HTML or the DOM or anything passed this structured object.

`createElement()` - a function that takes `type, props, children` and returns an object with the parameters passed. The reason it is a function and not just a straight up object is for us to call the elements (functions) whenever we need and rebuild the structure.

`renderElement()` (react-dom) - iterates through the object created by `createElement()` and uses DOM APIs to create DOM nodes by the structure provided.

**the definition of a react component (element)** is a function that returns a valid react element which is an object with `type, props, children` (and other keys)

a function in JS can return a single element. therefore a function in react (component) must return a single element

#### Definition #2 of react

for any `state => element`

_About props mutation: the props object is being passed as an argument to a component. under the hood react performs a freeze on that object `Object.freeze(props)` in order to protect the developer from accidentally mutating them. React actually throws an error if we try to mutate props. A common convention is to destructure props `function Hero ({someProp}) {}` - that is a problem because destructuring creates a copy of an object, that way we bypass reacts safety mechanism and duplicate data in memory_

Recalling functions will override all values and will reconstruct all of the structure from the called function down its tree.

**Optimization:** strive to return from a function as soon as possible, we don't want synchronous code to block our component tree.

useState:
<u>is for values I need on the screen</u> if I don't need them on the screen there is no need for rerenders

- accepts an initial value
- saves the value in a protected space where rerenders wont effect it
- returns a tuple that includes a var with the value itself and an update function that updates the initial value and triggers a render on the function that useState is called in.

```js
export const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
	setCount(count+1) // will force a rerender
  }
  return (
 	<span>{count}</span> // count will persist the value even after rerenders
 	<button onClick={handleClick}>increment</button>
  )
};
```

_\*\* useStates best use case is handling primitives and not more complex data structures_

useRef:

- accepts a parameter
- uses useState under the hood and passes an object `{current: <parameter>}`
- returns only the value and not the set function - that way when the value is changed it doesn't call the rerender.
- if I set the returned value of `useRef` as the value of a `ref` attribute of an element in JSX it will hold the value of the HTML element it self:

```js
export const App = () => {

  const inputV = useRef();

  const handleClick = () => {
  	console.log(input.current.value) // will log the value present in the input
  }

  return (
  	<input ref={inputV} />
	<button onClick={handleClick}>submit</button>
  );
};
```

memo:

- basic cache mechanism that caches based on props, saves the functions output for each input

useReducer:
