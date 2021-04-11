import { useContext, useRef, useState } from "react";
import LoadingContext from "../contexts/loadingContext";
import LocationContext, { generatePlaceInfo } from "../contexts/locationContext";

export const SearchForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const { setLocation } = useContext(LocationContext);
  const { setLoading } = useContext(LoadingContext);

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
      .then((res) => setLocation(generatePlaceInfo(res)))
      .catch((e) => {});

    clearInputs();
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for any IP address or domain" onChange={handleOnChange} ref={ref} />
      <input type="submit" style={{ backgroundImage: "url(images/icon-arrow.svg)" }} value="" />
    </form>
  );
};
