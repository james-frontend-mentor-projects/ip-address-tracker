import { useContext, useState } from "react";
import LoadingContext, { LoadingProps } from "../contexts/loadingContext";
import LocationContext, { generatePlaceInfo, LocationProps } from "../contexts/locationContext";

export const SearchForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const { setLocation } = useContext<LocationProps>(LocationContext);
  const { setLoading } = useContext<LoadingProps>(LoadingContext);

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    setLoading(true);
    e.preventDefault();

    const key = /^([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})?$/.test(inputText) ? "location" : "domain";

    fetch(`/api/ipify?${key}=${inputText}`)
      .then((res) => res.json())
      .then((res) => {
        // message should only be present in error scenarios
        if (!res.message) setLocation(generatePlaceInfo(res));
        else throw new Error(res.message);
      })
      .catch((e) => {
        console.log(e);
        setLocation(generatePlaceInfo({}));
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" onChange={handleOnChange} />
      <input type="submit" style={{ backgroundImage: "url(images/icon-arrow.svg)" }} value="" />
    </form>
  );
};
