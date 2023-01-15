import React from 'react';
import DeleteButton from './DeleteButton';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemContent from './NotesItemContent';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotesItem = ({ title, createdAt, body, id, onDelete }) => {
  return (
    <div className="NotesItem">
      <Link to={`/notes/${id}`}>
        <NotesItemTitle title={title} />
        <NotesItemDate createdAt={createdAt} />
        <NotesItemContent body={body} />
      </Link>
      <div className="Button_group">
        <DeleteButton id={id} onDelete={onDelete} />
      </div>
    </div>
  );
};

NotesItem.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesItem;
