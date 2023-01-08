import React from 'react';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NotesList({ notes, onDelete, onEdit }) {
  if (notes.length === 0) {
    return (
      <div>
        <h4 className="NotesEmpty">Notes Empty</h4>
      </div>
    );
  } else {
    return (
      <div>
        {/* <h3 className="NotesList_title">Notes List</h3> */}
        <div className="NotesList">
          {notes.map((note) => (
            <Link to={`/notes/${note.id}`}>
              <NotesItem
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onEdit={onEdit}
                {...note}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default NotesList;
