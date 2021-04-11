import { useContext, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { useWindowSize } from "../hooks/useWindowSize";
import LocationContext from "../contexts/locationContext";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map: React.FC = () => {
  const { height } = useWindowSize();
  const { location } = useContext(LocationContext);

  // this needs to be in its own place because a lot of react-leaflet props are immutable - e.g. the marker position
  // it's hacky but it works
  const container = useMemo(
    () => (
      <MapContainer
        center={[location.lat, location.lng]}
        zoom={13}
        scrollWheelZoom={false}
        markerZoomAnimation={true}
        className="map"
      >
        <ChangeView center={[location.lat, location.lng]} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[location.lat, location.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    ),
    [location]
  );

  return (
    <>
      <style>
        {`
      .map {
        height: ${height - 250}px !important;
      }`}
      </style>
      {container}
    </>
  );
};

export default Map;
