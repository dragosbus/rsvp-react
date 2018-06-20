import React, {Component} from 'react';


export class Header extends Component {

  addPerson(e) {
    e.preventDefault();
    this.props.addPerson(this._name.value);
  }

  render() {
    return(
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form onSubmit={this.addPerson.bind(this)}>
          <input type="text" placeholder="Invite Someone" ref={name=>this._name=name}/>
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
    );
  }
}
