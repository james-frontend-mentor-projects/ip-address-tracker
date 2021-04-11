import React, { useEffect, useState } from "react";

export interface LoadingProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoadingContext = React.createContext<LoadingProps>(null);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);

  function sl(e) {
    setLoading(e);
  }

  return <LoadingContext.Provider value={{ loading, setLoading: sl }}>{children}</LoadingContext.Provider>;
};

export default LoadingContext;
