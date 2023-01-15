import React, { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import NotesItem from './NotesItem';
import PropTypes from 'prop-types';

const NotesList = ({ notes, onDelete }) => {
  const { locale } = useContext(LocaleContext);

  if (notes.length === 0) {
    return (
      <div>
        <h4 className="NotesEmpty">
          {locale === 'id' ? 'Catatan Kosong' : 'Notes Empty'}
        </h4>
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
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
};

export default NotesList;
