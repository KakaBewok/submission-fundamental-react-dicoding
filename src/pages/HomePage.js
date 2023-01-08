import React from 'react';
import NotesList from '../components/NotesList';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { getAllNotes, deleteNote } from '../utils/local-data';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const navigate = useNavigate();

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage
      defaultKeyword={keyword}
      keywordChange={changeSearchParams}
      navigate={navigate}
    />
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getAllNotes(),
      keyword: props.defaultKeyword || '',
    };
    // tambahkan edit dan detail
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah anda yakin menghapus catatan ini?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        this.setState(() => {
          return {
            notes: getAllNotes(),
          };
        });
        Swal.fire('Berhasil', 'Catatan anda terhapus', 'danger');
      }
    });
  }
  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="HomeWrapper">
        <h3 className="NotesList_title">Notes List</h3>
        <p className="NumberofNotes">
          Number of Notes: {this.state.notes.length}
        </p>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={notes} onDelete={this.onDeleteHandler} />
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

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default HomePageWrapper;
