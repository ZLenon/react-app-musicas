import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      apiSounds: [],
      firstInfoAlbum: {},
      favSound: [],
    };
  }

  componentDidMount() {
    this.loadMusic();
  }

  loadMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const returnAPI = await getMusics(id);
    const [firsInfo, ...restodaApi] = returnAPI; // tratamento de array (destructuring assignment)
    // const spredAPI = [...returnAPI]; // espalha os objetos
    // const shifAPI = spredAPI.shift();// retorna um objeto, so o primeiro
    // o test so passa se retornar a primeira musica em "objeto", os metodos a baixo retorna em "array"
    // const spliceAPI = spredAPI.splice(0, 1);// retorna um array com 1 objeto, somente o primeiro
    // const [fistItem] = spredAPI; // array
    // const firsItem = spredAPI[0]; // array
    const favSounds = await getFavoriteSongs(); // musicas favoritas salvas exportar a const para MusicCar linha 58
    this.setState({
      apiSounds: restodaApi,
      firstInfoAlbum: firsInfo,
      favSound: favSounds });
  };

  render() {
    const { apiSounds,
      firstInfoAlbum: { artistName, collectionName },
      favSound } = this.state;
    return (
      <div data-testid="page-album">
        <h1>🗃️ ALBUM 🔊</h1>
        <Header />
        <h2 data-testid="artist-name">{ artistName }</h2>
        <h3 data-testid="album-name">{ collectionName }</h3>
        {
          apiSounds.map((sound) => (
            <MusicCard
              key={ sound.trackId }
              trackName={ sound.trackName }
              previewUrl={ sound.previewUrl }
              sound={ sound } // prop passada para o component music card
              trackId={ sound.trackId }// prop passada para o component music card
              favSound={ favSound }// prop com as musicasa favoritas
            />
          ))
        }
        )
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Album;
