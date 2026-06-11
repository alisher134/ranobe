export const StorageService = {
  get: (key: string): string | null => {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem(key);
  },
  set: (key: string, value: string) => {
    if (typeof localStorage === 'undefined') return null;

    localStorage.setItem(key, value);
  },
  remove: (key: string) => {
    if (typeof localStorage === 'undefined') return null;

    localStorage.removeItem(key);
  },
};
