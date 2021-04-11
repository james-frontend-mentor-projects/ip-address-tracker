import { useContext } from "react";
import LocationContext from "../contexts/locationContext";
import { PlaceInfoCard } from "./PlaceInfoCard";

export const PlaceInfo: React.FC = () => {
  const { location } = useContext(LocationContext);
  return (
    <div className="place-info">
      <div className="pos-rel">
        <PlaceInfoCard k="IP ADDRESS" v={location.ipAddress} />
        <PlaceInfoCard k="LOCATION" v={location.location} />
        <PlaceInfoCard k="TIMEZONE" v={location.timezone} />
        <PlaceInfoCard k="ISP" v={location.isp} />
      </div>
    </div>
  );
};
