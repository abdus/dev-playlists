import React from "react";
import { spotifyUrl } from "../../config/index.js";

const Login = (props) => {
  return (
    <>
      <div>
        <p className="text">
          <span>SIGN-IN TO START SHARING</span>
          <span>AWESOMENESS</span>
        </p>
        <p>
          <button
            onClick={() => {
              window.location.href = spotifyUrl;
            }}
          >
            Login Using Spotify
          </button>
        </p>
      </div>

      <style jsx>{`
        div {
          font-size: 1.5em;
          font-weight: 600;
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        div p button {
          padding-left: 4rem;
          padding-right: 4rem;
        }

        p.text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: right;
          font-weight: 900;
        }

        p.text span:last-child {
          font-size: 2.5em;
        }

        @media (max-width: 900px) {
          div {
            font-size: 1em;
            flex-direction: column;
            justify-content: center;
            min-height: 60vh;
          }

          p.text {
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};

export default React.memo(Login);
