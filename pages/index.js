import React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";

export default function Home() {
  const [accessToken, setAccessToken] = React.useState(null);

  React.useEffect(() => {
    const urlHash = window.location.hash.substring(1);
    const urlHashObj = {};

    urlHash.split("&").forEach((chunk) => {
      const [key, value] = chunk.split("=");
      urlHashObj[key] = value;
    });

    setAccessToken(urlHashObj.access_token);
  }, []);

  React.useEffect(() => {
    if (accessToken) {
      window.sessionStorage.setItem("access_token", accessToken);
    }
  }, [accessToken]);

  return <Layout>{!accessToken ? <Login /> : <UserProfile />}</Layout>;
}
