import React from 'react';
import { addDocument } from './http';

class InputBox extends React.Component {
  state = {
    inputText: '',
    isAdded: false,
    isLoading: false,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoading: true });
    addDocument(this.state.inputText)
      .then((res) => {
        this.setState({ inputText: '', isAdded: true, isLoading: false });
        setTimeout(() => {
          this.setState({ isAdded: false });
        }, 2000);
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
      <div className="inputBoxContainer py-4">
        <div className="card inputBox">
          <div className="card-title inputBoxTitle">Enter a document</div>
          <div className="cardBody">
            {this.state.isAdded && (
              <div className="alert alert-success my-2">
                Document added successfully
              </div>
            )}
            <textarea
              name="document"
              placeholder="Enter the document here..."
              className="form-control mb-2"
              onChange={this.handleChange}
              value={this.state.inputText}
            ></textarea>
            <button
              className="btn btn-primary"
              onClick={this.onSubmit}
              disabled={this.state.isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputBox;
