export const serverGet = (url, userOptions = {}) => {
  const options = {
    method: 'GET',
    ...userOptions,
  };

  return fetch(url, options)
    .then((response) => response.json())
    .then(
      (data) => {
        if (data.errors) {
          throw new Error[data.errors[0]]();
        }
        return data;
      },
      (error) => error,
    );
};
