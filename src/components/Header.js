import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const nome = await getUser();
    this.setState({ loading: false, user: nome });
  }

  render() {
    const { user, loading } = this.state;
    return (
      <header data-testid="header-component">
        {loading ? <Loading /> : <h3 data-testid="header-user-name">{user.name}</h3> }

        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link to="/album/:id" data-testid="link-to-album">Album</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favorites</Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        <Link to="/profile/edit" data-testid="link-to-edit">Profile Edit</Link>
      </header>
    );
  }
}
export default Header;
