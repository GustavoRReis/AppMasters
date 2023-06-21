import APIContext from "./APIContext";
import { useState, useEffect } from 'react';
import axios from 'axios';
import APIProviderProps from "../interfaces/props";

const EMAIL_ADRESS = 'email@email.com';
const URL_API = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data';


function APIProvider(props: APIProviderProps) {
  const { Provider } = APIContext;
  const { children } = props;
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { "dev-email-address": EMAIL_ADRESS };
        const { data } = await axios.get(URL_API, { headers });
        setApiData(data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <Provider value={ apiData }>
      { children }
    </Provider>
  );
}

export default APIProvider;

