import React, {Component} from 'react';

class Profile extends Component {

  render(){
    return(
      <div className="profile">
      <h3>Name: {this.props.name}</h3>
      <img src={this.props.image} className="image" alt="Character profile"/>
      <ul>
        <li>House: {this.props.house}</li>
        <li>Actor: {this.props.actor}</li>
      </ul>
      </div>
    )
  }
}

export default Profile;
