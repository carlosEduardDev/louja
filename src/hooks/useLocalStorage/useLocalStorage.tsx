import React from "react";

const useLocalStorage = (key: string, inicial: string) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [key, state]);

  return { state, setState } as const;
};

export default useLocalStorage;
