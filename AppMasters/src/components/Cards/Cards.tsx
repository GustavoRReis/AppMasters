import APIData from "../../types/api.type";
import './index.css';


function Cards({ dataCards }: { dataCards: APIData[] }) {

  return (
    <div className="card-container">
      { dataCards.map((data, index) => (
        <div key={ index } className="card">
          <img src={ data.thumbnail } alt={ data.title } />
          <h3>{ data.title }</h3>
          <p>{ data.developer }</p>
          <p>{ data.platform }</p>
          <p>{ data.genre }</p>
        </div>
      )) }
    </div>
  );
}

export default Cards;
