import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.callback(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="form-control mx-sm-2" id="quarterInput" name="nameInput" placeholder="" name="name" value={this.state.name} onChange={this.handleInputChange} />
          <br />
          <button id="post-btn" type="submit" className="btn btn-primary my-1">Calculate</button>
        </form>
      </div>
    )
  }
}
