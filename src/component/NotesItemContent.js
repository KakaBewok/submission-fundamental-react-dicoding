import React from 'react';

function NotesItemContent({ body }) {
  return (
    <div className="NotesItem_content">
      <p className="content">{body}</p>
    </div>
  );
}
export default NotesItemContent;
