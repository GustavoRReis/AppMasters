import { useContext, useEffect, useState } from "react";
import APIContext from "../context/APIContext";
import Cards from "../components/Cards/Cards";
import APIData from "../types/api.type";
import Loading from "../components/Loading/Loading";
import SearchBox from "../components/SearchBox/SearchBox";
import './index.css';

function Home() {
  const { apiData, errorMessage } = useContext(APIContext);

  const [filteredData, setFilteredData] = useState<APIData[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Todos');

  useEffect(() => {
    let filteredResult = apiData;

    if (selectedGenre !== 'Todos') {
      filteredResult = filteredResult.filter((item: APIData) =>
        item.genre.toLowerCase() === selectedGenre.toLowerCase()
      );
    }

    filteredResult = filteredResult.filter((item: APIData) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredData(filteredResult);
  }, [apiData, selectedGenre, searchValue]);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
  };

  return (
    <div className="home-container">
      { errorMessage ? (
        <h1 className="error-message">{ errorMessage }</h1>
      ) : (
        <>
          { apiData.length > 0 ? (
            <>
              <SearchBox
                handleSearchInputChange={ handleSearchInputChange }
                handleGenreChange={ handleGenreChange }
              />
              <Cards dataCards={ filteredData } />
            </>
          ) : (
            <Loading />
          ) }
        </>
      ) }
    </div>
  );
}

export default Home;
