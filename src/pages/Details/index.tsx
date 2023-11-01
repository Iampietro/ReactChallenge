import { useEffect, useContext } from "react";
import './index.styles.css';

import { BandsContext } from '../../store/bandsContext';
import { Album, Member, BandContextType } from '../../types/band.model';

import AlbumsDetails from './components/AlbumDetails/AlbumDetails'; 

type MemberProps = {
  members: Member[];
};

const MembersDetails: React.FC<MemberProps> = ({ members }) => {
  return (
  <>
    <span><b>Current formation:</b></span>
    <ul>
      {members?.length > 0 && members.map((member: Member, index) => (
        <li key={index}>{member.name}</li> //should avoid using index as a key in general.
      ))}
    </ul>
  </>
  );
}

const Details = () => {
  const { selectedBand, albumsFromSelectedBand } = useContext(BandsContext) as unknown as BandContextType;
  const { name, members } = selectedBand;
  return (
    <div className="detailsContainer">
      <h2>{name}'s details</h2>
      <MembersDetails members={members}/>
      <AlbumsDetails albums={albumsFromSelectedBand}/>
    </div>
  );
};
    
export default Details;