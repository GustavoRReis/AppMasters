import { useContext } from "react";
import APIContext from "../context/APIContext";


function Home() {
  const apiData = useContext(APIContext);
  console.log(apiData);
 

  return (
    <div>oi</div>
  );
}

export default Home
