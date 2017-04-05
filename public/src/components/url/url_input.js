import React, {Component} from 'react';

class UrlInput extends Component {
  constructor(props) {
    super(props);
    this.state = {url: ''};

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({url: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();
    // Add action that will:
    // call the backend api point to shorten and add to the database
    this.setState({url: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Place the URL here"
          className="form-control"
          value={this.state.url}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Make it short</button>
        </span>
      </form>
    );
  }
}

export default UrlInput;