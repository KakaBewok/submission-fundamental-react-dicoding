import React from 'react';
import { addNote } from '../utils/network-data';
import NotesInput from '../components/NotesInput';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const AddPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate('/');
  };

  return (
    <section className="AddWrapper">
      <NotesInput addNotes={onAddNoteHandler} />
      <Footer />
    </section>
  );
};

export default AddPage;
