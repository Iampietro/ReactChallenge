import * as React from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const BandsContext = React.createContext(null);

const defaultValueForSelectedBand = {
  id: '',
  name: '',
  country: '',
  members: [{
    name: ''
  }]
};

const defaultValueForAlbums = [{
  id: '',
  name: '',
  year: ''
}];

const defaultValueForBands = [{
  id: '',
  name: '',
  country: '',
  members: [{
    name: ''
  }]
}];

export const BandsProvider = ({ children }) => {
  const [bands, setBands] = useLocalStorage("bands", defaultValueForBands);
  const [selectedBand, setSelectedBand] = useLocalStorage("selectedBand", defaultValueForSelectedBand);
  const [albumsFromSelectedBand, setAlbumsFromSelectedBand] = useLocalStorage("albumsFromSelectedBand", defaultValueForAlbums);

  return (<BandsContext.Provider value={{
    bands, setBands, selectedBand, setSelectedBand,
    albumsFromSelectedBand, setAlbumsFromSelectedBand
  }}>
      {children}
  </BandsContext.Provider>)
};