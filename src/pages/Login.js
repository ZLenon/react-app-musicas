import React from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      loading: true,
      redirect: false,
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleClick = async () => {
    const { name } = this.state;
    this.setState({ loading: false });
    await createUser({ name });
    this.setState({
      loading: true,
      redirect: true,
    });
  };

  render() {
    const { name, loading, redirect } = this.state;
    const MAGIC_NUMBER = 3;
    const disabilit = name.length >= MAGIC_NUMBER;
    return (
      <div data-testid="page-login">
        <h1>LOGIN</h1>
        <label htmlFor="name-input">
          Usuario:-
          <input
            data-testid="login-name-input"
            id="input-login"
            type="text"
            placeholder="Login de usuario"
            name="name"
            onChange={ this.handleChange }
          />
        </label>

        <button
          data-testid="login-submit-button"
          type="button"
          onClick={ this.handleClick }
          disabled={ !disabilit }
        >
          Entrar
        </button>
        { !loading && <Loading /> }
        { redirect && <Redirect to="/search" />}
      </div>
    );
  }
}

export default Login;
