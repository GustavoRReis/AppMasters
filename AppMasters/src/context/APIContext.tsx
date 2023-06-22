import { createContext } from 'react';
import APIData from '../types/api.type';


const APIContext = createContext<APIData[]>([]);

export default APIContext;
