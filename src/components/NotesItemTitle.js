import React from 'react';
import PropTypes from 'prop-types';

function NotesItemTitle({ title }) {
  return (
    <div className="NotesItem_title">
      <h4 className="title">{title}</h4>
    </div>
  );
}

NotesItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotesItemTitle;
