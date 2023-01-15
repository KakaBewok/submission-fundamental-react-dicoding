import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import PropTypes from 'prop-types';

const DeleteButton = ({ id, onDelete }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <div>
      <button className="DeleteButton" onClick={() => onDelete(id)}>
        {locale === 'id' ? 'HAPUS' : 'DELETE'}
      </button>
    </div>
  );
};

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
