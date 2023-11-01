import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { BandsContext } from '../../store/bandsContext';
import { Band, BandContextType } from '../../types/band.model';

import Card from './components/Card/Card';
import './index.styles.css';

const BASE_URL = 'https://my-json-server.typicode.com/improvein/dev-challenge/';

const Home = () => {
  const navigate = useNavigate();
  const { bands, setBands, setSelectedBand, setAlbumsFromSelectedBand } = useContext(BandsContext) as unknown as BandContextType;

  const getBands = async () => {
    const bandsFromApi = await fetch(`${BASE_URL}bands`).then(res => res.json());
    setBands(bandsFromApi);
  }

  useEffect(() => {
    bands?.length === 0 && getBands();
  }, []);

  const handleClick = async (band: Band) => {
    const { id } = band;
    const albumsFromApi = await fetch(`${BASE_URL}albums?bandId=${id}`).then(res => res.json());
    setSelectedBand(band);
    setAlbumsFromSelectedBand(albumsFromApi);
    navigate('details');
  }

  return (
    <>
      <h1>Home</h1>
      <div className="container">
        {bands?.length > 0 && bands.map((band: any) => (
          <Card band={band} handleClick={handleClick} key={band.id}/>
        ))}
      </div>
    </>
  );
};
  
export default Home;