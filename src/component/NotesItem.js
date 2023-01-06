import React from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import NotesItemTitle from './NotesItemTitle';
import NotesItemDate from './NotesItemDate';
import NotesItemContent from './NotesItemContent';

function NotesItem({ title, createdAt, body, id, onDelete, onEdit }) {
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
export default NotesItem;
