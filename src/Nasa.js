import React from 'react';
import SpacePost from './SpacePost'
import './Nasa.css';


const URL = "https://api.nasa.gov/planetary/apod";

const API_KEY = "?api_key=tHiwRhBbKEcrarVQgMikSYVugkHyygZ3ydzQaekZ&thumbs=true";

const DATE = "&start_date="
const DATETWO = "&end_date=";

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var yesterday = new Date(new Date().setDate(new Date().getDate() - 10));
var yesterdayDate = yesterday.getFullYear() + '-' + (yesterday.getMonth() + 1) + '-' + yesterday.getDate();


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
        this.setState({ isloading: false, spacePosts: data })
      });
  }

  render() {
    if (this.state.isloading) {
      return <div>...loading...</div>
    }

    return (
      <div id="body">
        <h1>Hello, world! This is Spacestagram.</h1>
        <h2>"Only in the darkness can you see the stars"</h2>
        <br></br>
        <br></br>
        {this.state.spacePosts.map((post) => {
          return (
            <SpacePost
              title={post.title}
              date={post.date}
              img={post.url}
              explanation={post.explanation}
              thumbnail={post.thumbnail_url}
              mediatype={post.media_type}
            />
          );
        })}
      </div>
    )
  }
}