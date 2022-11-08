import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      apiSounds: [],
    };
  }

  componentDidMount() {
    this.loadMusic();
  }

  loadMusic = async () => {
    const { match: { params: { id } } } = this.props;
    const returnAPI = await getMusics(id);
    returnAPI.splice(0, 1);
    console.log(returnAPI);
    this.setState({ apiSounds: returnAPI });
  };

  render() {
    const { apiSounds } = this.state;
    return (
      <div data-testid="page-album">
        <h1>🗃️ ALBUM 🔊</h1>
        <Header />
        {
          apiSounds.map((sound) => (
            <MusicCard
              key={ sound.trackId }
              artistName={ sound.trackName }
              collectionName={ sound.collectionName }
              artworkUrl60={ sound.artworkUrl60 }
              previewUrl={ sound.previewUrl }
            />
          ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default Album;
