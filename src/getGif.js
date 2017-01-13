const axios = require('axios');
// sample: http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=oops
const GIPHY_API_URL = `https://api.giphy.com`;
const GIPHY_PUB_KEY = `dc6zaTOxFJmzC`;

module.exports = function getSticker (tagName) {
  const url = `${GIPHY_API_URL}/v1/gifs/random?api_key=${GIPHY_PUB_KEY}&tag=${tagName}`;
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then((response) => {
        // axios wraps the response in a 'data' key, and so does the giphy response
        const data = response.data.data;
        resolve({
          url: data.fixed_width_downsampled_url,
          width: data.fixed_width_downsampled_width,
          sourceUrl: data.url
        })
      })
      .catch(reject);
  })
}
