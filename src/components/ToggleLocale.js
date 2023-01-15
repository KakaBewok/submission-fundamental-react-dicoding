import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const ToggleLocale = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  return (
    <button className="btn-locale" onClick={toggleLocale}>
      {locale === 'id' ? 'en' : 'id'}
    </button>
  );
};

export default ToggleLocale;
