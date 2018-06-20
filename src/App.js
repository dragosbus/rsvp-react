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
        {"name":"dragos", isConfirmed: false, toggleEdit: false}
      ],
      hide: false
    };
    this.hideUnconfirmed = this.hideUnconfirmed.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.confirmAttend = this.confirmAttend.bind(this);
    this.editPerson = this.editPerson.bind(this);
    this.savePerson = this.savePerson.bind(this);
  }

  addPerson(name) {
    let newPerson = {
      name: name,
      isConfirmed: false,
      toggleEdit: false
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

  confirmAttend(index) {
    let persons = this.state.persons;
    persons.forEach((person, i)=>{
      if(i===index) {
        person.isConfirmed = !person.isConfirmed;
      }
    });

    this.setState({
      persons: persons
    });
  }

  editPerson(e, index) {
    let persons = this.state.persons;
    persons.forEach((person, i)=>{
      if(i===index) {
        person.toggleEdit = !person.toggleEdit;
      }
    });

    this.setState({
      persons: persons
    });
  }

  savePerson(newName, index) {
    let persons = this.state.persons;
    persons.forEach((person, i)=>{
      if(i===index) {
        person.toggleEdit = !person.toggleEdit;
        person.name = newName
      }
    });

    this.setState({
      persons: persons
    });
  }

  render() {
    return (
      <div className="App">
        <Header addPerson={this.addPerson}/>
        <div className="main">
          <Hide hideUnconfirmed={this.hideUnconfirmed}/>
          <Counter persons={this.state.persons}/>
          <Persons persons={this.state.persons} confirmAttend={this.confirmAttend} hide={this.state.hide} editPerson={this.editPerson} toggleEdit={this.state.toggleEdit} savePerson={this.savePerson}/>
        </div>
      </div>
    );
  }
}

export default App;
