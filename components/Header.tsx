import { PlaceInfo } from "./PlaceInfo";
import { SearchForm } from "./SearchForm";

export const Header: React.FC = () => {
  return (
    <header style={{ background: 'url("images/pattern-bg.png")' }}>
      <h1>IP Address Tracker</h1>
      <SearchForm />
      <PlaceInfo />
    </header>
  );
};
