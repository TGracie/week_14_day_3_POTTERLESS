import React from 'react';
import Profile from './Profile.js';

const CharacterList = (props) => {
  if(props.characters == null || props.characters.length === 0){
    return <p>LOADING..... HURRY UP!!!</p>
  }

  return (
    // So drop down of houses
    // limits the data being passed in to the map
    //SIMPLE
    <>
    <h2>Characters</h2>
    <div className="character-list">
    {props.characters.map((character, index) => {
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
