import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemContent from './NotesItemContent';
import PropTypes from 'prop-types';

function DetailNote({ title, createdAt, body, id, onDelete, onEdit }) {
  return (
    <div className="NotesItem">
      <NotesItemTitle title={title} />
      <NotesItemDate createdAt={createdAt} />
      <NotesItemContent body={body} />
      <div className="Button_group">
        <DeleteButton id={id} onDelete={onDelete} />
        <EditButton id={id} onEdit={onEdit} />
      </div>
    </div>
  );
}

DetailNote.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DetailNote;
