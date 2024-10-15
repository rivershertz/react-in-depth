import {useState} from 'react';

export function useRef(initialValue) {
  return useState({current: initialValue})[0];
}
