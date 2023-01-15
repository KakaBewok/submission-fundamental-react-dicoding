/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut } from 'react-icons/fi';
import PropTypes from 'prop-types';

const Navigation = ({ logout, name }) => {
  const { locale, toggleLocale } = useContext(LocaleContext);

  return (
    <nav className="navigation">
      <h1 className="Brand">
        <a href="https://www.linkedin.com/in/noprizal/" target="_blank">
          NotesApp
        </a>
      </h1>
      <ul className="navlink">
        <li>
          <button className="btn-locale" onClick={toggleLocale}>
            {locale === 'id' ? 'en' : 'id'}
          </button>
        </li>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>
        <li>
          <button className="btn-logout" onClick={logout}>
            {name}
            <FiLogOut />
          </button>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
