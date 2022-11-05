import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import NotingAlbum from '../components/NotingAlbum';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      saveName: '',
      loadingAPI: false,
      api: [],
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { name } = this.state;
    this.setState({ loadingAPI: true });
    const returnAPI = await searchAlbumsAPI(name);
    this.setState({ loadingAPI: false, saveName: name, api: returnAPI, name: '' });
  };

  render() {
    const { name, loadingAPI, api, saveName } = this.state;
    const NUMBER_MAGIC = 2;
    const valid = name.length < NUMBER_MAGIC;
    return (
      <div data-testid="page-search">
        <h1>SEARCH🔍</h1>
        <Header />
        {loadingAPI ? <Loading />
          : (
            <>
              <label htmlFor="input-band">
                <input
                  id="input-login"
                  name="name"
                  type="text"
                  placeholder="Banda ou Artista"
                  data-testid="search-artist-input"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="search-artist-button"
                onClick={ this.handleClick }
                disabled={ valid }
              >
                Pesquisar
              </button>
              <div>
                {`Resultado de álbuns de: ${saveName}`}
              </div>
              {api.length === 0 ? <NotingAlbum />
                : (api.map((album) => (
                  <Link
                    key={ album.artistId }
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    <img src={ album.artworkUrl100 } alt={ album.collectionId } />
                    <div>
                      Coleção :
                      {album.collectionName}
                    </div>
                    <div>
                      Artista :
                      {album.artistName}
                    </div>
                  </Link>

                ))
                )}
            </>
          )}
      </div>
    );
  }
}
export default Search;
