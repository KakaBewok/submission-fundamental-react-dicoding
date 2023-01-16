import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
    <div className="login-wrapper">
      <p className="login-title">
        {locale === 'id' ? 'Silahkan Masuk' : 'Please Login'}
      </p>
      <form onSubmit={onSubmitHandler}>
        <label className="label-username">Email</label>
        <input
          type="email"
          value={email}
          onChange={setEmail}
          required
          className="form_login"
        />

        <label className="label-password">
          {locale === 'id' ? 'Kata sandi' : 'Password'}
        </label>
        <input
          type="password"
          value={password}
          onChange={setPassword}
          required
          className="form_login"
        />

        <button type="submit" className="btn-login">
          {locale === 'id' ? 'Masuk' : 'Login'}
        </button>

        <br />
        <center>
          <p>
            {locale === 'id' ? 'Belum punya akun? ' : "Don't have an account? "}
            <Link to="/register" className="regist">
              {locale === 'id' ? 'Daftar sekarang!' : 'Register now!'}
            </Link>
          </p>
        </center>
      </form>
    </div>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
