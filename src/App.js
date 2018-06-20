import React, { Component } from 'react';
import {Header} from './components/Header';
import {Counter} from './components/Counter';
import {Persons} from './components/Persons';
import {Hide} from './components/Hide';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {"name":"dragos", isConfirmed: false}
      ],
      hide: false
    };
    this.hideUnconfirmed = this.hideUnconfirmed.bind(this);
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson(name) {
    let newPerson = {
      name: name,
      isConfirmed: false
    };
    this.setState(prevState=>{
      return {
        persons:prevState.persons.concat(newPerson)
      }
    },()=>console.log(this.state.persons));
  }

  hideUnconfirmed(e) {
    this.setState({
      hide: !this.state.hide
    });
  }

  render() {
    return (
      <div className="App">
        <Header addPerson={this.addPerson}/>
        <div className="main">
          <Hide hideUnconfirmed={this.hideUnconfirmed}/>
          <Counter persons={this.state.persons}/>
          <Persons persons={this.state.persons}/>
        </div>
      </div>
    );
  }
}

export default App;
