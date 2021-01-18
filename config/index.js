const config = {
  spotify: {
    client_id: "92310422a9174e5b8245aa1e4893a890",
    scope: "playlist-read-private,playlist-read-collaborative",
    response_type: "token",
    redirect_uri: "http://localhost:3000",
  },
};

const cfgSpotify = config.spotify;
let spotifyUrl = "https://accounts.spotify.com/authorize?";

spotifyUrl += `client_id=${cfgSpotify.client_id}`;
spotifyUrl += `&scope=${cfgSpotify.scope}`;
spotifyUrl += `&redirect_uri=${cfgSpotify.redirect_uri}`;
spotifyUrl += `&response_type=${cfgSpotify.response_type}`;

export default config;
export { spotifyUrl };
