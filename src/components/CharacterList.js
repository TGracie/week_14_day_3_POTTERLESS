import React from 'react';
import Profile from './Profile.js';

const CharacterList = (props) => {
  if(props.characters == null || props.characters.length === 0){
    return <p>LOADING..... HURRY UP!!!</p>
  }

  return (
    <div className="character-list">
    {props.characters.map((character, index) => {
      return (
        <Profile
        key={index}
        name={character.name}
        />
      )
    })}
    </div>
  );
};

export default CharacterList;
