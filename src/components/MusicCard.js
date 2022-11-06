import React from "react";

class MusicCard extends React.Component {
  render() {
    const { apiSounds } = this.props;
    return (
      { apiSounds.map((sound) => (
        <div key={ sound.trackId }>
          <div data-testid="artist-name">{sound.artistName}</div>
          <div data-testid="album-name">{sound.collectionName}</div>
          <audio data-testid="audio-component" src="{previewUrl}" controls>
            <track kind="captions" />
            O seu navegador não suporta o elemento
            <code>audio</code>
          </audio>
        </div>
      ))}
    );
  }
}
export default MusicCard;