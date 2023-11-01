import * as React from 'react';

export const BandsContext = React.createContext(null);

export const BandsProvider = ({ children }) => {
  const [bands, setBands] = React.useState([]);
  const [selectedBand, setSelectedBand] = React.useState({});
  const [albumsFromSelectedBand, setAlbumsFromSelectedBand] = React.useState([]);

  return (<BandsContext.Provider value={{
    bands, setBands, selectedBand, setSelectedBand,
    albumsFromSelectedBand, setAlbumsFromSelectedBand
  }}>
      {children}
  </BandsContext.Provider>)
};