export const loginInputDebounce = (delay, setInput) => {
  let timer;
  return (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      setInput((preData) => {
        return {
          ...preData,
          [e.target.name]: e.target.value,
        };
      });
    }, delay);
  };
};
