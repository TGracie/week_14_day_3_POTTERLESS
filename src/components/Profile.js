import React, {Component} from 'react';

class Profile extends Component {

  render(){
    return(
      <div className="profile">
      <h3>Name: {this.props.name}</h3>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={this.props.image} className="image" alt="Character profile"/></a>
      <ul>
        <li>House: {this.props.house}</li>
        <li>Actor: {this.props.actor}</li>
      </ul>
      </div>
    )
  }
}

export default Profile;
