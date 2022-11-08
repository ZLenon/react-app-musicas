import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { trackName, collectionName, previewUrl, trackId, artworkUrl60 } = this.props;
    return (
      <div key={ trackId }>
        <div data-testid="artist-name">{ trackName }</div>
        <div data-testid="album-name">{ collectionName }</div>
        <img src={ artworkUrl60 } alt={ trackId } />
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </div>

    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  collectionName: PropTypes.string,
  previewUrl: PropTypes.string,
  trackId: PropTypes.string,
  artworkUrl60: PropTypes.string,
}.isRequired;

export default MusicCard;
