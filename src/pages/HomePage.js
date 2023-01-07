import React from 'react';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  getAllNotes,
  getNote,
  editNote,
  deleteNote,
} from '../utils/local-data';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
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
    deleteNote(id);

    // update the contact state from data.js
    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
    });

    Swal.fire('Berhasil', 'Catatan anda terhapus', 'danger');
  }
  onEditHandler({ id, title, body }) {
    editNote({ id, title, body });

    this.setState(() => {
      return {
        notes: getAllNotes(),
      };
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
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList
          notes={notes}
          onEdit={this.onEditHandler}
          onDelete={this.onDeleteHandler}
        />
        <Link to="/add" className="AddFloat">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-circle-plus"
            width="52"
            height="52"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#0081c9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="12" y1="9" x2="12" y2="15" />
          </svg>
        </Link>
      </section>
    );
  }
}

export default HomePageWrapper;
