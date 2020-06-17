export const beersUrl = (page = 1, perPage = 18) => `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;
export const beersSearchUrl = (value) => `https://api.punkapi.com/v2/beers?beer_name=${value}`;
