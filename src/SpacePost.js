import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isliked: false
    };
  }

  unlike = () => this.setState({ isliked: false });

  like = () => this.setState({ isliked: true });

  getImageSource = () => {
    if (this.props.mediatype === "image") {
      return this.props.img;
    } 
    
    return this.props.thumbnail;
  }

  render() {

    return (
      <div id="post">
        <img id="logo" src='http://assets.stickpng.com/images/58429400a6515b1e0ad75acc.png' />
        <br></br>
        <img id="pictures" src={this.getImageSource()} />
        <br></br>
        <button id="like" onClick={this.like}>Like</button>
        <button id="unlike" onClick={this.unlike}>Unlike</button>
        <h3>This picture is called "{this.props.title}".</h3>
        <h4>It was taken on {this.props.date}</h4>
        {this.state.isliked &&
          <p>
            I like this picture!
          </p>
        }
        <p>{this.props.explanation}</p>
      </div>
    )
  }
}