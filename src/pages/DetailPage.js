/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react';
import DetailNote from '../components/DetailNote';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const [note, setNote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNoteFunc = async () => {
      const { data } = await getNote(id);

      setNote(() => {
        return {
          note: data,
        };
      });
    };

    getNoteFunc();

    return () => {
      setIsLoading(true);
    };
  }, []);

  const onDeleteHandler = async (id) => {
    await deleteNote(id);

    navigate('/');
  };

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
    <section className="DetailWrapper">
      <h2 className="DetailTitle">
        {locale === 'id' ? 'Detil Catatan' : 'Detail Notes'}
      </h2>
      <DetailNote onDelete={onDeleteHandler} id={id} {...note.note} />
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

export default DetailPage;
