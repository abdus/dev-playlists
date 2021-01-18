import React from "react";
import Grid from "../Grid";

const UserProfile = (props) => {
  const [user, setUser] = React.useState(null);
  const [playlists, setPlaylists] = React.useState(null);
  const btnRef = React.useRef();

  React.useEffect(() => {
    const access_token = window.sessionStorage.getItem("access_token");

    if (access_token) {
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      })
        .then((res) => res.json())
        .then((user) => {
          setUser(user);
        });
    }
  }, []);

  return (
    <>
      <div className="root">
        <section className="flex">
          <h2>
            <a
              href={user && user.external_urls.spotify}
              title={user && user.display_name + "'s Spotify Profile"}
              target="_blank"
              rel="noopener"
            >
              {user && user.display_name}
            </a>
          </h2>
          <span>{user && user.followers.total} Followers</span>
        </section>
        <button
          ref={btnRef}
          onClick={() => {
            const access_token = window.sessionStorage.getItem("access_token");
            btnRef.current.innerText = "SYNCING...";

            fetch("https://api.spotify.com/v1/me/playlists", {
              headers: {
                Authorization: "Bearer " + access_token,
              },
            })
              .then((d) => d.json())
              .then((d) => {
                console.log(d);
                if (d.error) {
                  btnRef.current.innerText = "Failed";
                  setPlaylists(null);
                } else {
                  btnRef.current.innerText = "DONE";
                  setPlaylists(d.items);
                }
              })
              .catch((err) => {
                btnRef.current.innerText = "Failed!";
                setPlaylists(null);
              });
          }}
        >
          SYNC Playlists
        </button>

        <Grid>
          {Array.isArray(playlists) &&
            playlists.map((p, i) => (
              <a
                href={p.external_urls.spotify}
                style={{ textAlign: "center", lineHeight: 1.1 }}
                background={p.images[0].url}
                key={i}
              >
                <strong>{p.name}</strong>
              </a>
            ))}
        </Grid>
      </div>

      <style jsx>{`
        div.root {
          margin-top: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
          flex-direction: column;
        }

        .flex {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
        }

        .flex > * {
          line-height: 1;
          margin: 0;
          margin-right: 1.3rem;
        }
      `}</style>
    </>
  );
};

export default React.memo(UserProfile);
