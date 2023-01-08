import React from 'react';
import PropTypes from 'prop-types';

function NotesItemContent({ body }) {
  return (
    <div className="NotesItem_content">
      <p className="content">{body}</p>
    </div>
  );
}

NotesItemContent.propTypes = {
  body: PropTypes.string.isRequired,
};

export default NotesItemContent;
