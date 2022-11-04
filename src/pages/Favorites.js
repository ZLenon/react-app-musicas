import React from 'react';
import Header from '../components/Header';

class Favorites extends React.Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <h1>FAVORITES</h1>
        <Header />
      </div>
    );
  }
}
export default Favorites;
