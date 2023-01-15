import React from 'react';
import PropTypes from 'prop-types';

const NotesItemDate = ({ createdAt }) => {
  return (
    <div className="NotesItem_date">
      <p className="date">{createdAt}</p>
      <hr />
      <br />
    </div>
  );
};

NotesItemDate.propTypes = {
  createdAt: PropTypes.string.isRequired,
};

export default NotesItemDate;
