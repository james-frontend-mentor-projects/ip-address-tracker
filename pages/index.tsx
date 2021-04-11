import Head from "next/head";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="App">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png" />

        <title>Frontend Mentor | IP Address Tracker</title>
      </Head>
      <Header />
    </div>
  );
}
