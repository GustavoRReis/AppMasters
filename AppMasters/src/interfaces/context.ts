import APIData from "../types/api.type";

export default interface APIContextProps {
  apiData: APIData[];
  errorMessage: string;
}
