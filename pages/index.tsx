import Head from "next/head";
import { Header } from "../components/Header";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const Home: React.FC = () => {
  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        />

        <title>Frontend Mentor | IP Address Tracker</title>
      </Head>
      <Header />

      <Map />
    </div>
  );
};

export default Home;
