import React, { useContext, useEffect, useState } from "react";
import LoadingContext from "./loadingContext";

type PlaceInfo = {
  ipAddress: string;
  location: string;
  lat: number;
  lng: number;
  timezone: string;
  isp: string;
};

const initialState: PlaceInfo = {
  ipAddress: "",
  location: "",
  lat: 0,
  lng: 0,
  timezone: "",
  isp: "",
};

export interface LocationProps {
  location: PlaceInfo;
  setLocation: React.Dispatch<React.SetStateAction<PlaceInfo>>;
}

const LocationContext = React.createContext<LocationProps>(null);

export function generatePlaceInfo(input): PlaceInfo {
  return {
    ipAddress: input?.ip || "",
    location: [input?.location?.city, input?.location?.region, input?.location?.postalCode]
      .filter((value) => value)
      .join(", "),
    lat: input?.location?.lat || 0,
    lng: input?.location?.lng || 0,
    timezone: input?.location?.timezone || "",
    isp: input?.isp || "",
  };
}

export const LocationProvider: React.FC = ({ children }) => {
  const { setLoading } = useContext(LoadingContext);
  const [location, setLocation] = useState(initialState);

  useEffect(() => {
    setLoading(true);
    fetch("/api/ipify")
      .then((res) => res.json())
      .then((res) => setLocation(generatePlaceInfo(res)))
      .finally(() => setLoading(false));
  }, []);

  return <LocationContext.Provider value={{ location, setLocation }}>{children}</LocationContext.Provider>;
};

export default LocationContext;
