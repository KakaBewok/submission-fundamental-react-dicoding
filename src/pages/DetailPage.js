import React from 'react';
import NotesItem from '../components/NotesItem';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: ,
      keyword: ,
    };
  }

  render() {
    return (
      <section className="DetailWrapper">
        <h3 className="NotesList_title">Notes Detail</h3>
        <NotesItem
          key={}
          id={}
          onDelete={}
          onEdit={}
          {}
        />
        <Link to="/notes/new" className="AddFloat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-circle-plus"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#0081c9"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </Link>
        <Footer />
      </section>
    );
  }
}

DetailPage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default DetailPage;
