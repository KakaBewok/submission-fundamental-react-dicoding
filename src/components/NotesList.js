import React from 'react';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';

function NotesList({ notes, onDelete }) {
  if (notes.length === 0) {
    return (
      <div>
        <h4 className="NotesEmpty">Notes Empty</h4>
      </div>
    );
  } else {
    return (
      <div>
        <div className="NotesList">
          {notes.map((note) => (
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              {...note}
            />
          ))}
        </div>
      </div>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default NotesList;
