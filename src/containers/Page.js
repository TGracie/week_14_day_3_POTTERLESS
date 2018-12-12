import React, {Component} from 'react';
import CharacterList from '../components/CharacterList.js'


export default class Page extends Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      house: null
    }
    // this.getCharacters = this.getCharacters.bind(this)
    this.getStaff = this.getStaff.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getStudents = this.getStudents.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

    // getCharacters(){
    //   const button = document.querySelector()
    //   this.loadData(this.props.categories[button.id.to_i].url)
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

  handleChange(event){
    const selectedHouse = event.target.value;
    this.setState({house: selectedHouse})
  }

  render(){
    return(
      <div className="container">
        <div className="filters">
          <button id="0" onClick={this.getAll}>All Characters</button>
          <button id="1" onClick={this.getStudents}>Students</button>
          <button id="2" onClick={this.getStaff}>Staff</button>
        </div>
        <select className="dropdown" id="house-select" defaultValue="default" onChange={this.handleChange}>
         <option value="default">Choose a house....</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <CharacterList characters={this.state.characters} house={this.state.house}/>
      </div>
    )
  }
}
