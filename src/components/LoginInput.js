import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';

const LoginInput = ({ login }) => {
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');

  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        required
      />
      <input
        type="password"
        placeholder={locale === 'id' ? 'Kata sandi' : 'Password'}
        value={password}
        onChange={setPassword}
        required
      />
      <button>{locale === 'id' ? 'Masuk' : 'Login'}</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
