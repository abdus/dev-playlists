import React from "react";
import Layout from "../components/Layout";
import Grid from "../components/Grid";

export default function Home() {
  const [accessToken, setAccessToken] = React.useState(null);

  React.useEffect(() => {
    setAccessToken(window.sessionStorage.getItem("access_token"));
  }, []);

  let playlists;
  try {
    playlists = window.sessionStorage.getItem("playlists");

    if (playlists) playlists = JSON.parse(playlists);
  } catch (err) {
    console.log(err.message);
  }

  return (
    <Layout>
      <Grid>
        {Array.isArray(playlists) &&
          playlists.map((p, i) => (
            <div
              style={{ textAlign: "center", lineHeight: 1 }}
              background={p.images[0].url}
              key={i}
            >
              <strong>{p.name}</strong>
            </div>
          ))}
      </Grid>
    </Layout>
  );
}
