# React From Scratch with Nir Kaufman

## What is react?

A diff engine - a program that uses a diff engine in order to construct UI in a declarative manner.
react creates a structure that defines UI.

UI - user interface
GUI - graphical user interface

the output of react is an object that is structured using specific keywords based on the target environment (website, IOT, terminal...)

`createElement()` - a function that takes `type, props, children` and returns an object with the parameters passed. The reason it is a function and not just a straight up object is for us to call the elements (functions) whenever we need and rebuild the structure.

`renderElement()` (react-dom) - iterates through the object created by `createElement()` and uses DOM APIs to create DOM nodes by the structure provided.

**the definition of a react element** is a function that returns a react element which is an object with `type, props, children`

a function in JS can return a single element. therefore a function in react (component) must return a single element
