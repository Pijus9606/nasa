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
    
    return this.props.thumbnail
  }

  render() {

    return (
      <div>
        <h2>This picture is called "{this.props.title}".</h2>
        <h4>It was taken on {this.props.date}</h4>
        <img src={this.getImageSource()} />
        <button onClick={this.like}>Like</button>
        <button onClick={this.unlike}>Unlike</button>
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