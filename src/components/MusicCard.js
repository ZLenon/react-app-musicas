import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { previewUrl, trackName } = this.props;
    return (
      <>
        <div>{trackName}</div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
      </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
}.isRequired;

export default MusicCard;
