import React from 'react';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/network-data';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const LoginPage = ({ loginSuccess }) => {
  const navigate = useNavigate();
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      Swal.fire('Success', 'Login success!', 'success');
      loginSuccess(data);
      navigate('/');
    }
  };

  return (
    <section>
      <LoginInput login={onLogin} />
      <Footer />
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
