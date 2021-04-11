import { LoadingProvider } from "../contexts/loadingContext";
import { LocationProvider } from "../contexts/locationContext";
import "../styles/App.scss";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <LocationProvider>
        <Component {...pageProps} />
      </LocationProvider>
    </LoadingProvider>
  );
}

export default MyApp;
