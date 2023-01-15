import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import Swal from 'sweetalert2';
import LocaleContext from '../contexts/LocaleContext';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registration success!',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/');
    }
  };

  return (
    <section className="register-page" style={{ marginTop: '7rem' }}>
      <h2>{locale === 'id' ? 'Daftar' : 'Sign Up'}</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
        <Link to="/">
          {locale === 'id' ? 'Masuk sekarang! ' : 'Login now! '}
        </Link>
      </p>
    </section>
  );
};

export default RegisterPage;
