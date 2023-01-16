import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
    <div className="regist-wrapper">
      <p className="regist-title">
        {locale === 'id' ? 'Silahkan Daftar' : 'Please Regist'}
      </p>
      <form onSubmit={onSubmitHandler}>
        <label className="label-name">
          {locale === 'id' ? 'Nama' : 'Name'}
        </label>
        <input
          type="text"
          value={name}
          onChange={setName}
          required
          className="form_regist"
        />

        <label className="label-username-regist">Email</label>
        <input
          type="email"
          value={email}
          onChange={setEmail}
          required
          className="form_regist"
        />

        <label className="label-password">
          {locale === 'id' ? 'Kata sandi' : 'Password'}
        </label>
        <input
          type="password"
          value={password}
          onChange={setPassword}
          required
          className="form_regist"
        />

        <label className="label-password">
          {locale === 'id' ? 'Konfirmasi kata sandi' : 'Confirm Password'}
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          required
          className="form_regist"
        />

        <button type="submit" className="btn-regist">
          {locale === 'id' ? 'Daftar' : 'Regist'}
        </button>

        <br />
        <center>
          <p>
            {locale === 'id'
              ? 'Sudah punya akun? '
              : 'Already have an account? '}
            <Link to="/login" className="login">
              {locale === 'id' ? 'Masuk sekarang!' : 'Login now!'}
            </Link>
          </p>
        </center>
      </form>
    </div>
  );
};

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
