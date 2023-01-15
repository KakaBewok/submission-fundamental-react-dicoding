import React from 'react';
import DeleteButton from './DeleteButton';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemContent from './NotesItemContent';
import PropTypes from 'prop-types';

const DetailNote = ({ title, createdAt, body, id, onDelete }) => {
  return (
    <div className="NotesItem DetailNote">
      <NotesItemTitle title={title} />
      <NotesItemDate createdAt={createdAt} />
      <NotesItemContent body={body} />
      <div className="Button_group">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

DetailNote.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailNote;
