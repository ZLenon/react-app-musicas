import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      apiSounds: [],
      firstINFO: {},
    };
  }

  componentDidMount() {
    this.loadMusic();
  }

  loadMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const returnAPI = await getMusics(id);
    const spredAPI = [...returnAPI]; // espalha os objetos
    const shifAPI = spredAPI.shift();// retorna um objeto, so o primeiro
    // const spliceAPI = spredAPI.splice(0, 1);// retorna um array com 1 objeto, somente o primeiro
    // console.log(returnAPI);
    // console.log(spredAPI);
    // console.log(shifAPI);
    // console.log(spliceAPI);
    this.setState({ apiSounds: spredAPI, firstINFO: shifAPI });
  };

  render() {
    const { apiSounds, firstINFO } = this.state;
    return (
      <div data-testid="page-album">
        <h1>🗃️ ALBUM 🔊</h1>
        <Header />
        <h2 data-testid="artist-name">{ firstINFO.artistName}</h2>
        <h3 data-testid="album-name">{firstINFO.collectionName}</h3>
        {
          apiSounds.map((sound) => (
            <MusicCard
              key={ sound.trackId }
              trackName={ sound.trackName }
              previewUrl={ sound.previewUrl }
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
