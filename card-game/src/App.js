import React, { Component } from 'react';
//import CharacterCard from './CharacterCard';
import './App.css';
import WordCard from './WordCard';
//const word = "Hello";

class App extends Component {
 render() {
 return (
    <div>
    
    <WordCard value="hello"/>
    
    
    {//<CharacterCard value="h"/>
     //<CharacterCard value="i"/>
     //Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
    }
    
    </div>
   
 );
 }
}
export default App;
