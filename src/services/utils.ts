export function debounce(fn: () => void, timeout = 300): () => void {
  let timer = 0;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn.apply(this, ...args);
    }, timeout);
  };
}
