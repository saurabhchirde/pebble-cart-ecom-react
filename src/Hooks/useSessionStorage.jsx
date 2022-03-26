import { useEffect } from "react";

const useSessionStorageSet = (key, value) =>
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [value]);

const useSessionStorageGet = (key) => JSON.parse(sessionStorage.getItem(key));

export { useSessionStorageGet, useSessionStorageSet };
