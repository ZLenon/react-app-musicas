import React from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      check: false,
      waitAddSond: false,
    };
  }

  async componentDidMount() {
    const { trackId, favSound } = this.props;
    console.log(favSound);
    const musicaIgual = favSound.some((music) => (music.trackId === trackId));// retorna quando o 1 for verdadeiro
    if (musicaIgual === true) { // quando a musica for igual o checked vira true
      this.setState({ check: true });
    } else {
      this.setState({ check: false });
    }
  }

  handleCheck = async ({ target: { checked } }) => {
    const { sound } = this.props;
    // console.log(sound);
    this.setState({ waitAddSond: true });
    await addSong(sound); // apenas chamar essa func tem a logica de add a musica a outra func getFavoriteSongs
    this.setState({ waitAddSond: false });
    if (checked === true) {
      this.setState({ check: checked });
    } else {
      this.setState({ check: checked });
    }
  };

  render() {
    const { previewUrl, trackName, trackId } = this.props;
    const { check, waitAddSond } = this.state;
    return (
      <>
        {waitAddSond && <Loading />}
        <div>{trackName}</div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          htmlFor={ `checkbox-music-${trackId}` }
          data-testid={ `checkbox-music-${trackId}` }
        >
          <input
            type="checkbox"
            id={ `checkbox-music-${trackId}` }
            onChange={ this.handleCheck }
            checked={ check }
          />
          Favorita
        </label>
      </>

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  trackId: PropTypes.string,
}.isRequired;

export default MusicCard;
