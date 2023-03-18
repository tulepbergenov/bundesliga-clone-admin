const key = "ACCESS_TOKEN";

export const getToken = () => {
  const token = localStorage.getItem(key);

  return token;
};

export const setToken = (value: string) => {
  localStorage.setItem(key, value);
};

export const removeToken = () => {
  localStorage.removeItem(key);
};
