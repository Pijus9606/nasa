import React from 'react';

const URL = "https://api.nasa.gov/planetary/apod";

const API_KEY = "?api_key=tHiwRhBbKEcrarVQgMikSYVugkHyygZ3ydzQaekZ";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      img: "",
      date: "",
      explanation: "",
      isloading: true
    };
  }

  componentDidMount() {
    fetch(URL + API_KEY)
    .then(response => response.json())
    .then(data => {
      this.setState({title: data.title, img: data.url, date: data.date, explanation: data.explanation, isloading: false})
    });
  }

  render() {
    if (this.state.isloading) {
      return <div>loading</div>
    }
    return (
      <div>
        <h1>Hello, world! This is Spacestagram.</h1>
        <h2>This picture is called "{this.state.title}".</h2>
        <h4>It was taken on {this.state.date}</h4>
        <img src={this.state.img}/>
        <p>{this.state.explanation}</p>
      </div>
    )
  }
}