import { useEffect, useState } from 'react';
import { readStorage, writeStorage } from '../services/storage.js';

export function useTheme() {
  const [theme, setTheme] = useState(() => readStorage('theme', 'dark'));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeStorage('theme', theme);
  }, [theme]);

  return { theme, setTheme, toggleTheme: () => setTheme((value) => (value === 'dark' ? 'blue' : 'dark')) };
}
