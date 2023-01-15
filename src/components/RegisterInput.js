import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const RegisterInput = ({ register }) => {
  const [name, setName] = useInput('');
  const [email, setEmail] = useInput('');
  const [password, setPassword] = useInput('');
  const [confirmPassword, setConfirmPassword] = useInput('');

  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Password and confirm password doesn't match",
        footer: 'Please check your password again!',
      });
      return;
    }

    register({
      name,
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="register-input">
      <input
        type="text"
        placeholder={locale === 'id' ? 'Nama' : 'Name'}
        value={name}
        onChange={setName}
        required
      />
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
        autoComplete="current-password"
        value={password}
        onChange={setPassword}
        required
      />
      <input
        type="password"
        placeholder={
          locale === 'id' ? 'Konfirmasi kata sandi' : 'Confirm Password'
        }
        autoComplete="current-password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        required
      />
      <button>{locale === 'id' ? 'Daftar' : 'Register'}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
