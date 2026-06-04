const PREFIX = 'rkix3:';

export function readStorage(key, fallback) {
  const value = localStorage.getItem(`${PREFIX}${key}`);
  return value ? JSON.parse(value) : fallback;
}

export function writeStorage(key, value) {
  localStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
  return value;
}
