import React, {Component} from 'react';

class Profile extends Component {

  render(){
    return(
      <div className="profile">
      <p>Name: {this.props.name}</p>
      </div>
    )
  }
}

export default Profile;
