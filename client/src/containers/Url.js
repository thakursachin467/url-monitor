import React, { Component } from 'react'

class Url extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/api/v1/monitorURL/${id}`)
      .then((result) => {
        return result.json()
      }).then((data) => {
        console.log(data)
        this.setState({ data: data.data })

      })
  }
  render() {
    const { data } = this.state;
    console.log(data);
    let content;
    content = <div>Loading.....</div>
    if (data.website) {
      content = (<div className="card" >
        <div className="container">
          <h4><b>{data.website}</b></h4>
          <ul>
            <p>Percentile</p>
            {
              data.percentile.map((item, i) => {
                return <li key={i}>{item.percentile} {item.timeStamp}</li>
              })
            }
          </ul>

          <ol style={{ marginBottom: '150px' }}>
            <p>Time Stamps</p>
            {
              data.timeStamps.map((item, i) => {
                return <li key={i}>{item}</li>
              })
            }
          </ol>

        </div>

      </div>)
    }
    return (
      <div>
        {content}
      </div>

    )
  }
}

export default Url;