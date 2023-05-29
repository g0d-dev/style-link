import { useRef } from "react";

export default function useDebounce() {
  const timeoutRef = useRef(null);

  function debounce(fn, ...args) {
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, 500);
  }

  return debounce;
}
