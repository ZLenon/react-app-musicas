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
    const { match: { params: { id } } } = this.props; /* No componetes Album do navegador da para ver isso */
    const returnAPI = await getMusics(id);
    // console.log(returnAPI);
    returnAPI.shift(); /* Remove o primeiro item da lista de obj api */
    this.setState({ apiSounds: returnAPI });
  };

  render() {
    return (
      <div data-testid="page-album">
        <h1>🗃️ ALBUM 🔊</h1>
        <Header />
      </div>
    );
  }
}
export default Album;
