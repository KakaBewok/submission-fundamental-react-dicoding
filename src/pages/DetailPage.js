import React from 'react';
import DetailNote from '../components/DetailNote';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote, deleteNote } from '../utils/local-data';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id),
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }

  onDeleteHandler(id) {
    Swal.fire({
      title: 'Apakah anda yakin menghapus catatan ini?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        Swal.fire('Berhasil', 'Catatan anda terhapus');
        this.props.navigate('/');
      }
    });
  }

  render() {
    return (
      <section className="DetailWrapper">
        <h2 className="DetailTitle">Notes Detail</h2>
        <DetailNote
          onDelete={this.onDeleteHandler}
          id={this.props.id}
          {...this.state.note}
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
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
