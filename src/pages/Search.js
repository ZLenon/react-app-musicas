import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { name } = this.state;
    const NUMBER_MAGIC = 2;
    const valid = name.length < NUMBER_MAGIC;
    return (
      <div data-testid="page-search">
        <h1>SEARCH🔍</h1>
        <Header />
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
          onClick=""
          disabled={ valid }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}
export default Search;
