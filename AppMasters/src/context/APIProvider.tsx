import APIContext from "./APIContext";
import { useState, useEffect } from 'react';
import axios from 'axios';
import APIProviderProps from "../interfaces/props";
import APIData from "../types/api.type";

const EMAIL_ADDRESS = 'email@email.com';
const URL_API = 'https://games-test-api-81e9fb0d564a.herokuapp.com/api/data';


function APIProvider(props: APIProviderProps) {
  const { children } = props;
  const [apiData, setApiData] = useState<APIData[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const errorStatusCode = [500, 502, 503, 504, 507, 508, 509];

  useEffect(() => {

    const fetchData = async () => {
      try {
        const headers = { "dev-email-address": EMAIL_ADDRESS };
        const { data } = await axios.get<APIData[]>(URL_API, { headers, timeout: 5000 });
        setApiData(data);

      } catch (error: any) {

        if (error.code === 'ECONNABORTED') {
          return setErrorMessage('O servidor demorou para responder, tente mais tarde');

        } else if (errorStatusCode.includes(error.response.status)) {
          return setErrorMessage('O servidor falhou em responder, tente recarregar a página');

        } else {
          return setErrorMessage('O servidor não conseguiu responder por agora, tente voltar novamente mais tarde');
        }
      }
    };

    fetchData();
  }, []);

  const objContext = {
    apiData,
    errorMessage
  };

  return (
    <APIContext.Provider value={ objContext }>
      { children }
    </APIContext.Provider>
  );
}

export default APIProvider;
