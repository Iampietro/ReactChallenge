import { Album } from '../../../../types/band.model';
import './AlbumDetails.style.css';

type AlbumsDetailsProps = {
  albums: Album[];
};

const AlbumsDetails: React.FC<AlbumsDetailsProps> = ({ albums }) => {
  const length = albums.length;
  return (
    <div className='wrapper'>
      <span>We currently know about <b>{length}</b> published records from this group.</span>
      {length > 0 ?
        <div>
          <ul>
            {albums.map((album: Album, index) => (
              <li key={album.id+index}><i>{album.name}</i>, from {album.year}</li> // id should be unique but since it is not i used the index too.
            ))}
          </ul>
        </div>
        : <span style={{ marginTop: 10 }}>Sorry, we hope to catch up soon.</span>
      }
    </div>
  );
}

export default AlbumsDetails;