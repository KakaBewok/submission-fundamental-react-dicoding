import React from 'react';
import Swal from 'sweetalert2';

class NotesInput extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);

    this.state = {
      title: '',
      body: '',

      title_length: 0,
      content_length: 0,
      maxLength_title: 35,
      maxLength_content: 750,
    };
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
  onBlurTitle(event) {
    document.querySelector('#TitleCount').style.color = 'black';
    document.querySelector('.InputTitle').style.color = 'black';
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
  onBlurContent(event) {
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

    Swal.fire('Berhasil', 'Catatan anda tersimpan', 'success');
  }

  render() {
    return (
      <div>
        <div class="input-container">
          <form onSubmit={this.onSubmit}>
            <h2>Input Notes</h2>
            <input
              className="InputTitle"
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={this.onChangeTitle}
              onBlur={this.onBlurTitle}
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
              placeholder="Write your notes"
              onChange={this.onChangeContent}
              onBlur={this.onBlurContent}
              maxLength="750"
              minLength="10"
              required
            />
            <span id="ContentCount">
              {this.state.content_length}/{this.state.maxLength_content}
            </span>
            <button type="submit" className="AddNotes">
              Add Notes
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NotesInput;
