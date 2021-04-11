import { useContext, useRef, useState } from "react";
import LoadingContext, { LoadingProps } from "../contexts/loadingContext";
import LocationContext, { generatePlaceInfo, LocationProps } from "../contexts/locationContext";

export const SearchForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const { setLocation } = useContext<LocationProps>(LocationContext);
  const { setLoading } = useContext<LoadingProps>(LoadingContext);

  function clearInputs() {
    setInputText("");
    if (ref.current) ref.current.value = "";
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    setInputText(e.currentTarget.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    setLoading(true);
    e.preventDefault();

    fetch(`/api/ipify?location=${inputText}`)
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
        clearInputs();
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" onChange={handleOnChange} ref={ref} />
      <input type="submit" style={{ backgroundImage: "url(images/icon-arrow.svg)" }} value="" />
    </form>
  );
};
