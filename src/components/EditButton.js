import React from 'react';
import PropTypes from 'prop-types';

function EditButton({ id, onEdit }) {
  return (
    <div>
      <button className="EditButton" onClick={() => onEdit(id)}>
        Edit
      </button>
    </div>
  );
}

EditButton.propTypes = {
  id: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditButton;
