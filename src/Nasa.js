import React from 'react';
import SpacePost from './SpacePost'

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
       <SpacePost title={this.state.title} date={this.state.date} img={this.state.img} explanation={this.state.explanation}/>
      </div>
    )
  }
}