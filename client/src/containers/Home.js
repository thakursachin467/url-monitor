import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    }
  }
  onChange = (e) => {
    console.log('object')
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const url = this.state.url;
    fetch('http://localhost:5000/api/v1/monitorURLs/save', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
      .then((res) => {
        console.log(res);
        this.setState({ url: '' })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Enter Url"
            name="url"
            onChange={this.onChange}
            value={this.state.url} />
          <button type="submit">Start Monitoring</button>
        </form>
      </div>
    )
  }
}

export default Home;