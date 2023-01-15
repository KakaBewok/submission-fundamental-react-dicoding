import React, { useState, useEffect, useContext } from 'react';
import NotesList from '../components/NotesList';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getActiveNotes, deleteNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  const [isLoading, setIsLoading] = useState(false);

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });

    return () => {
      setIsLoading(true);
    };
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    // update the contacts state from network.js
    const { data } = await getActiveNotes();
    setNotes(data);
  }

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const notesList = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  if (isLoading) {
    return (
      <>
        <p style={{ marginTop: '20rem', textAlign: 'center' }}>
          LOADING . . . . . . . . . . . . . .
        </p>
      </>
    );
  }

  return (
    <section className="HomeWrapper">
      <h3 className="NotesList_title">
        {locale === 'id' ? 'Daftar Catatan' : 'Notes List'}
      </h3>
      <p className="NumberofNotes">
        {locale === 'id' ? 'Jumlah Catatan' : 'Number of Notes'}: {notes.length}
      </p>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NotesList notes={notesList} onDelete={onDeleteHandler} />
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
};

export default HomePage;
