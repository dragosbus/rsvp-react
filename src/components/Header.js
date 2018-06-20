import React, {Component} from 'react';


export class Header extends Component {
  render() {
    return(
      <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <form>
          <input type="text" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
    );
  }
}
