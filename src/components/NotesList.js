import React from 'react';
import NotesItem from './NotesItem';

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
            <NotesItem
              key={note.id}
              id={note.id}
              onDelete={onDelete}
              onEdit={onEdit}
              {...note}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NotesList;
