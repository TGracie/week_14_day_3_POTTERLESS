import React from 'react';
import Profile from './Profile.js';

const CharacterList = (props) => {
  if(props.characters == null || props.characters.length === 0){
    return <p>LOADING..... HURRY UP!!!</p>
  }
  let people = [];

  if(props.house == null || props.house == "default"){
   people = props.characters;
  }else{
   props.characters.forEach((character) => {
     if(character.house === props.house){
       people.push(character);
     }
   })
 }

  return (
    <>
    <h2 className="character-heading">Characters</h2>
    <div className="character-list">
    {people.map((character, index) => {
      return (
        <Profile
        key={index}
        name={character.name}
        house={character.house}
        image={character.image}
        actor={character.actor}
        />
      )
    })}
    </div>
    </>
  );
};

export default CharacterList;
