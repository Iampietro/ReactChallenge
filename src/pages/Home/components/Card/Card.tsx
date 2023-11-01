import { Band } from '../../../../types/band.model';
import './Card.styles.css';

type Props = {
  band: Band;
  handleClick: (band: Band) => any;
};

const Card: React.FC<Props> = ({ band, handleClick }) => {
  const { name, country } = band;
  return(
    <div className='cardContainer' onClick={() => handleClick(band)}>
      <span>Band's name: {name}</span>
      <p>Band's Country: {country}</p>
    </div>
  );
}

export default Card;