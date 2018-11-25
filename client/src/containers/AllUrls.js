import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AllUrls extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: true
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/v1/monitorURL')
      .then((res) => {
        return res.json()
      }).then((data) => {
        const Data = data.data;
        console.log(Data);
        if (Data.success) {
          this.setState({ data: Data.data, loading: false })
        }
      })

  }
  render() {
    const { data, loading } = this.state;
    let content;
    if (loading) {
      content = <div style={{ marginLeft: '40%', marginTop: '25%' }}>Loading Data.......</div>
    } else {
      content = data.map((item) => {
        return (<div className="card" key={item._id}>
          <div className="container">
            <h4><b>{item.website}</b></h4>
            <Link to={`/url/${item._id}`}>Click to see complete info</Link>
          </div>

        </div>)
      })
    }
    return (
      <div >
        {content}
      </div>

    )
  }
}

export default AllUrls;