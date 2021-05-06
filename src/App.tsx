import React, { Component } from 'react';
import './App.css';

interface IAppState {
  name: string;
  characters: [];
}

class App extends Component<{}, IAppState> {

  constructor(props: {}){
    super(props)
    this.state = {
      name: "Bryan",
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json());
      // no matter what comes back from your fetch request, it's an ANY type by default
      // .then(( result: [] )  => {})
      .then(({ results })  => this.setState({ characters: results as [] }));
  }

  render(){
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
