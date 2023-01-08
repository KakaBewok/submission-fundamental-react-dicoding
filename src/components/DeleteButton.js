import React from 'react';
import PropTypes from 'prop-types';

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className="DeleteButton" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
