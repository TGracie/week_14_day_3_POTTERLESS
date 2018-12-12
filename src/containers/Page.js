import React, {Component} from 'react';
import CharacterList from '../components/CharacterList.js'


export default class Page extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
    // this.getCharacters = this.getCharacters.bind(this)
    this.getStaff = this.getStaff.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

    componentDidMount(){
      this.loadData(this.props.categories[0].url)
    }

    getAll(){
      this.componentDidMount()
    }

    getStudents(){
      this.loadData(this.props.categories[1].url)
    }
    getStaff(){
      this.loadData(this.props.categories[2].url)
    }

    // getCharacters(id){
    //   this.loadData(this.props.categories[id].url)
    // }

    loadData(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const characterList = JSON.parse(jsonString);
        // console.log("Character List Data", characterList);
        this.setState({characters: characterList});
      }
    };
    request.send();
  }

  render(){
    return(
      <div className="container">
      <div className="filters">
        <button onClick={this.getAll}>All Characters</button>
        <button onClick={this.getStudents}>Students</button>
        <button onClick={this.getStaff}>Staff</button>
        </div>
        <CharacterList characters={this.state.characters}/>
      </div>
    )
  }
}
