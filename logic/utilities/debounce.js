export function debounce(func, timeout = 500) {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
