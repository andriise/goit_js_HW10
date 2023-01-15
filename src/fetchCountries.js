export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=,name,capital,population,flags,languages`
  )
    .then(resp => {
      if (!resp.ok) {
        if (resp.status === 404) {
          return [];
        }
        throw new Error(resp.statusText);
      }
      return resp.json();
    })
    .catch(error => {
      console.error(error);
    });
};
