import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);

  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login success!',
        showConfirmButton: false,
        timer: 1500,
      });
      loginSuccess(data);
    }
  };

  return (
    <section className="login-page" style={{ marginTop: '7rem' }}>
      <h2>{locale === 'id' ? 'Masuk' : 'Login'}</h2>
      <LoginInput login={onLogin} />
      <p>
        {locale === 'id' ? 'Belum punya akun? ' : "Don't have an account? "}
        <Link to="/register">
          {locale === 'id' ? 'Daftar sekarang!' : 'Register now!'}
        </Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
