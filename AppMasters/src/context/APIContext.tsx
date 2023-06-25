import { createContext, Context } from 'react';
import APIContextProps from '../interfaces/context';

const APIContext: Context<APIContextProps> = createContext<APIContextProps>({
  apiData: [],
  errorMessage: '',
});

export default APIContext;
