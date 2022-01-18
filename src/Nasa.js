import React from 'react';
import SpacePost from './SpacePost'

const URL = "https://api.nasa.gov/planetary/apod";

const API_KEY = "?api_key=tHiwRhBbKEcrarVQgMikSYVugkHyygZ3ydzQaekZ";

const DATE = "&start_date="
const DATETWO = "&end_date=";

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var yesterday = new Date(new Date().setDate(new Date().getDate()-10));
var yesterdayDate = yesterday.getFullYear()+'-'+(yesterday.getMonth()+1)+'-'+yesterday.getDate();


const startDay = yesterdayDate;
const endDay = date;


export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      spacePosts: []
    };
  }

  componentDidMount() {
    fetch(URL + API_KEY + DATE + startDay + DATETWO + endDay)
    .then(response => response.json())
    .then(data => {
      this.setState({isloading: false, spacePosts: data})
    });
  }

  render() {
    console.log(this.state)
    if (this.state.isloading) {
      return <div>loading</div>
    }

    return (
      <div>
        <h1>Hello, world! This is Spacestagram.</h1>
       {this.state.spacePosts.map((post) => {
         return <SpacePost title={post.title} date={post.date} img={post.url} explanation={post.explanation}/>
       })}
      </div>
    )
  }
}