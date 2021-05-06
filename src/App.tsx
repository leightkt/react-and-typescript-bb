import React, { Component } from 'react';
import './App.css';
import CharacterCard from './Components/CharacterCard';
import { ICharacter } from './types'

interface IAppState {
  name: string;
  characters: ICharacter[];
  // someFunction: (name: string) => number
  // someFunction: (name: string) => void 
  // no return value
}

class App extends Component<{}, IAppState> {

  constructor(props: {}){
    super(props)
    this.state = {
      name: "Bryan",
      characters: [],
      // someFunction: (name) => 4
    }
  }

  // fetchCharacters = (url: string, id: number) => {}

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      // no matter what comes back from your fetch request, it's an ANY type by default
      // .then(( result: [] )  => {})
      .then(({ results })  => this.setState({ characters: results as ICharacter[] }))
  }

  showCharacters = () => this.state.characters.map(character => <CharacterCard key={ character.id } character={ character }/>)

  render(){
    return (
      <div className="App">
        { this.showCharacters() }
      </div>
    );
  }
}

export default App;
