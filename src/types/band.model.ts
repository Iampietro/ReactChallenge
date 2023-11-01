export interface Member {
  name: string;
}

export interface Album {
  id: string;
  name: string;
  year: string;
}

export interface Band {
  id: string;
  name: string;
  country: string;
  members: Member[];
}

export type BandContextType = {
  bands: Band[];
  filteredBands: Band[];
  setBands: (bands: Band[]) => void;
  selectedBand: Band;
  setSelectedBand: (band: Band) => void;
  albumsFromSelectedBand: Album[];
  setAlbumsFromSelectedBand: (albums: Album[]) => void;
}