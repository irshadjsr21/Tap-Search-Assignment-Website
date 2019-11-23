import React from 'react';
import { search } from './http';
import moment from 'moment';

class SearchBox extends React.Component {
  state = {
    inputText: '',
    paragraphs: [],
    isLoading: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    search(this.state.inputText)
      .then((res) => {
        this.setState({ isLoading: false, paragraphs: res.paragraphs });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div className="inputBoxContainer">
        <div className="card inputBox">
          <div className="card-title inputBoxTitle">Enter a word to search</div>
          <div className="cardBody">
            <input
              name="word"
              placeholder="Enter the document here..."
              className="form-control mb-2"
              onChange={this.handleChange}
              value={this.state.inputText}
            ></input>
            <div className="my-2 text-muted">
              {this.state.paragraphs.length} paragraphs found.
            </div>
            <button
              className="btn btn-primary"
              onClick={this.onSubmit}
              disabled={this.state.isLoading}
            >
              Search
            </button>
          </div>
        </div>
        <ul className="list-group">
          {this.state.paragraphs.map((para) => {
            return (
              <li className="list-group-item" key={para.id}>
                <div>{para.body}</div>
                <small className="text-muted mt-2">
                  {moment(para.createdAt).format()}
                </small>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SearchBox;
