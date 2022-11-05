import React from 'react';
import Header from '../components/Header';
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
    const { match: { params: { id } } } = this.props; /* No componetes do navegador da para ver isso */
    const returnAPI = await getMusics(id);
    // console.log(returnAPI);
    returnAPI.shift(); /* Remove o primeiro item da lista de obj api */
    this.setState({ apiSounds: returnAPI });
  };

  render() {
    const { apiSounds } = this.state;
    return (
      <div data-testid="page-album">
        <h1>🗃️ ALBUM 🔊</h1>
        <Header />
        {apiSounds.map((sound) => (
          <div key={ sound.trackId }>
            <div data-testid="artist-name">{sound.artistName}</div>
            <div data-testid="album-name">{sound.collectionName}</div>
            <sound>
              {sound.previewUrl}
            </sound>
          </div>
        ))}
      </div>
    );
  }
}
export default Album;
