import React, {Component} from 'react';
import CharacterList from '../components/CharacterList.js'


export default class Page extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
  }

    componentDidMount(){
      this.loadData(this.props.categories[0].url)
    }

    loadData(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const characterList = JSON.parse(jsonString);
        console.log("Character List Data", characterList);
        this.setState({characters: characterList});
      }
    };
    request.send();
  }

  render(){
    return(
      <div className="container">
        <CharacterList characters={this.state.characters}/>
      </div>
    )
  }
}
