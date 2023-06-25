import './index.css';
import logo from '../../assets/App_Masters_listgames-removebg-preview.png';

function SearchBox({ handleSearchInputChange, handleGenreChange }: {
  handleSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  handleGenreChange: (genre: string) => void;
}) {
  const genres = [
    'Todos',
    'shooter',
    'mmoarpg',
    'arpg',
    'fighting',
    'action rpg',
    'battle royale',
    'mmorpg',
    'moba',
    'sports',
    'racing',
    'card game',
    'strategy',
    'mmo',
    'social',
    'fantasy'
  ];

  const handleSelectChange = ({ target }: React.ChangeEvent<EventTarget>) => {
    const genre = (target as HTMLSelectElement).value;
    handleGenreChange(genre);
  };

  return (
    <form className="input-search">
      <select onChange={ handleSelectChange }>
        { genres.map((genre) => (
          <option key={ genre } value={ genre }>
            { genre }
          </option>
        )) }
      </select>
        <img src={logo} alt='imagem-logo' />
        <input
          type="text"
          onChange={ handleSearchInputChange }
          placeholder="Pesquisar..."
        />
    </form>
  );
}

export default SearchBox;
