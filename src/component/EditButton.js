import React from 'react';

function EditButton({ id, onEdit }) {
  return (
    <div>
      <button className="EditButton" onClick={() => onEdit(id)}>
        Edit
      </button>
    </div>
  );
}

export default EditButton;
