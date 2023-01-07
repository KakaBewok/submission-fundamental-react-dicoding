import React from 'react';

function NotesItemDate({ createdAt }) {
  return (
    <div className="NotesItem_date">
      <p className="date">{createdAt}</p>
    </div>
  );
}
export default NotesItemDate;
