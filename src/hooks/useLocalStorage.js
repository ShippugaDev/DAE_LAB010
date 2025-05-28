import { useState, useEffect } from "react";

/**
 * useLocalStorage - Custom hook para sincronizar un estado con localStorage
 * @param {string} key - La clave de localStorage
 * @param {any} initialValue - Valor inicial si no hay nada en localStorage
 * @returns {[any, function]} - [valor, setValor]
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Puede fallar en modo privado o sin permisos
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
