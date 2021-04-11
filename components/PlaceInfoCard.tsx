import { useContext } from "react";
import Loader from "react-loader-spinner";
import LoadingContext from "../contexts/loadingContext";

interface Props {
  k: string;
  v: string;
}

export const PlaceInfoCard: React.FC<Props> = ({ k, v }) => {
  const { loading } = useContext(LoadingContext);

  // if (loading) return <Loader type="TailSpin" color="#969696" height={70} width={70} />;

  return (
    <div className="card">
      {loading ? (
        <Loader type="TailSpin" color="#969696" height={70} width={70} />
      ) : (
        <>
          <div className="key">{k}</div>
          <div className="value">{v}</div>
        </>
      )}
    </div>
  );
};
