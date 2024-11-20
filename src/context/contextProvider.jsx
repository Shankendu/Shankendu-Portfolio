/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Context } from "./context";



const ContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const contextValue = {
    loading,
    setLoading,
  };
  useEffect(() => {
    if (loading) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [loading]);
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
