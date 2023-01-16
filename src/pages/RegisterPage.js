import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/network-data';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegisterHandler = async (user) => {
    const { error } = await register(user);
    if (!error) {
      Swal.fire('Success', 'Registration success!', 'success');
      navigate('/');
    }
  };

  return (
    <section>
      <RegisterInput register={onRegisterHandler} />
      <Footer />
    </section>
  );
};

export default RegisterPage;
