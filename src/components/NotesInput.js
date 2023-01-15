import React from 'react';
import { LocaleConsumer } from '../contexts/LocaleContext';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

// const NotesInput = ({ addNotes }) => {
//   const { locale } = useContext(LocaleContext);

//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [title_length, setTitle_length] = useState(0);
//   const [content_length, setContent_length] = useState(0);
//   const maxLength_title = 35;
//   const maxLength_content = 750;
//   const minLength_title = 5;
//   const minLength_content = 10;

//   const onChangeTitle = (event) => {
//     setTitle_length(() => {
//       return {
//         title_length: event.target.value.length,
//       };
//     });
//     setTitle(() => {
//       return {
//         title: event.target.value,
//       };
//     });

//     if (title_length === maxLength_title) {
//       document.querySelector('#TitleCount').style.color = 'red';
//       document.querySelector('.InputTitle').style.color = 'red';
//     } else {
//       document.querySelector('#TitleCount').style.color = 'black';
//       document.querySelector('.InputTitle').style.color = 'black';
//     }
//   };

//   const onChangeBody = (event) => {
//     setContent_length(() => {
//       return {
//         body_length: event.target.value.length,
//       };
//     });
//     setBody(() => {
//       return {
//         body: event.target.value,
//       };
//     });

//     if (content_length === maxLength_content) {
//       document.querySelector('#ContentCount').style.color = 'red';
//       document.querySelector('.InputContent').style.color = 'red';
//     } else {
//       document.querySelector('#ContentCount').style.color = 'black';
//       document.querySelector('.InputContent').style.color = 'black';
//     }
//   };

//   const onBlur = (event) => {
//     document.querySelector('#TitleCount').style.color = 'black';
//     document.querySelector('.InputTitle').style.color = 'black';

//     document.querySelector('#ContentCount').style.color = 'black';
//     document.querySelector('.InputContent').style.color = 'black';
//   };

//   const onSubmit = (event) => {
//     event.preventDefault();

//     const addNotesInput = {
//       title,
//       body,
//     };
//     addNotes(addNotesInput);

//     setTitle(() => {
//       return {
//         title: '',
//       };
//     });

//     setBody(() => {
//       return {
//         body: '',
//       };
//     });

//     Swal.fire('Success', 'Your notes are saved!', 'success');
//   };

//   return (
//     <div className="input-container">
//       <form onSubmit={onSubmit}>
//         <h2>Input Notes</h2>
//         <input
//           className="InputTitle"
//           type="text"
//           value={title}
//           placeholder="Title"
//           onChange={onChangeTitle}
//           onBlur={onBlur}
//           maxLength={maxLength_title}
//           minLength={minLength_title}
//           required
//         />
//         <span id="TitleCount">{/* {title_length}/{maxLength_title} */}</span>
//         <textarea
//           className="InputContent"
//           type="textarea"
//           value={body}
//           placeholder="Write your notes"
//           onChange={onChangeBody}
//           onBlur={onBlur}
//           maxLength={maxLength_content}
//           minLength={minLength_content}
//           required
//         />
//         <span id="ContentCount">
//           {/* {content_length}/{maxLength_content} */}
//         </span>
//         <button type="submit" className="AddNotes">
//           Add Notes
//         </button>
//       </form>
//     </div>
//   );
// };

// NotesInput.propTypes = {
//   addNotes: PropTypes.func.isRequired,
// };

// export default NotesInput;

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',

      title_length: 0,
      content_length: 0,
      maxLength_title: 35,
      maxLength_content: 750,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
  }
  // TITLE
  onChangeTitle(event) {
    this.setState(() => {
      return {
        title: event.target.value,
        title_length: event.target.value.length,
      };
    });

    if (this.state.title_length === 34) {
      document.querySelector('#TitleCount').style.color = 'red';
      document.querySelector('.InputTitle').style.color = 'red';
    } else {
      document.querySelector('#TitleCount').style.color = 'black';
      document.querySelector('.InputTitle').style.color = 'black';
    }
  }
  // CONTENT
  onChangeContent(event) {
    this.setState(() => {
      return {
        body: event.target.value,
        content_length: event.target.value.length,
      };
    });

    if (this.state.content_length === 749) {
      document.querySelector('#ContentCount').style.color = 'red';
      document.querySelector('.InputContent').style.color = 'red';
    } else {
      document.querySelector('#ContentCount').style.color = 'black';
      document.querySelector('.InputContent').style.color = 'black';
    }
  }
  //ONBLUR
  onBlur() {
    document.querySelector('#TitleCount').style.color = 'black';
    document.querySelector('.InputTitle').style.color = 'black';
    document.querySelector('#ContentCount').style.color = 'black';
    document.querySelector('.InputContent').style.color = 'black';
  }
  // SUBMIT
  onSubmit(event) {
    event.preventDefault();

    const addNotes = {
      title: this.state.title,
      body: this.state.body,
    };
    this.props.addNotes(addNotes);

    this.setState(() => {
      return {
        title: '',
        body: '',

        title_length: 0,
        content_length: 0,
        maxLength_title: 35,
        maxLength_content: 750,
      };
    });

    Swal.fire('Success', 'Your notes are saved!', 'success');
  }

  render() {
    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <div>
              <div className="input-container">
                <form onSubmit={this.onSubmit}>
                  <h2>{locale === 'id' ? 'Buat Catatan' : 'Input Notes'}</h2>
                  <input
                    className="InputTitle"
                    type="text"
                    value={this.state.title}
                    placeholder={locale === 'id' ? 'Judul' : 'Title'}
                    onChange={this.onChangeTitle}
                    onBlur={this.onBlur}
                    maxLength="35"
                    minLength="5"
                    required
                  />
                  <span id="TitleCount">
                    {this.state.title_length}/{this.state.maxLength_title}
                  </span>
                  <textarea
                    className="InputContent"
                    type="textarea"
                    value={this.state.body}
                    placeholder={
                      locale === 'id' ? 'Catatan kamu' : 'Your notes'
                    }
                    onChange={this.onChangeContent}
                    onBlur={this.onBlur}
                    maxLength="750"
                    minLength="10"
                    required
                  />
                  <span id="ContentCount">
                    {this.state.content_length}/{this.state.maxLength_content}
                  </span>
                  <button type="submit" className="AddNotes">
                    {locale === 'id' ? 'Tambahkan Catatan' : 'Add Notes'}
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </LocaleConsumer>
    );
  }
}

NotesInput.propTypes = {
  addNotes: PropTypes.func.isRequired,
};

export default NotesInput;
