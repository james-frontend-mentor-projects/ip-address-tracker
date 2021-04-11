import { AppProps } from "next/dist/next-server/lib/router/router";
import { LoadingProvider } from "../contexts/loadingContext";
import { LocationProvider } from "../contexts/locationContext";
import "../styles/App.scss";
import "../styles/index.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <LoadingProvider>
      <LocationProvider>
        <Component {...pageProps} />
      </LocationProvider>
    </LoadingProvider>
  );
};

export default MyApp;
