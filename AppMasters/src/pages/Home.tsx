import { useContext, useState } from "react";
import APIContext from "../context/APIContext";
import Cards from "../components/Cards/Cards";
import APIData from "../types/api.type";
import Loading from "../components/Loading/Loading";

function Home() {
  const apiData = useContext<APIData[]>(APIContext);

  return (
    <div>
      { apiData.length > 0 ? (
        <Cards dataCards={ apiData } />
      ) : <Loading /> }
    </div>
  );
}

export default Home;
