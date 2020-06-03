export const serverGet = (url) => fetch(url).then((response) => response.json());
