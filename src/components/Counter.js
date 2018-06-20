import React, { Component } from 'react';


export const Counter = props =>{

    let attend = props.persons.filter(person=>person.isConfirmed).length;
    let unconfirmed = props.persons.filter(person=>!person.isConfirmed).length;
    let total = props.persons.length;

    return(
        <table class="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>{attend}</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>{unconfirmed}</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>{total}</td>
            </tr>
          </tbody>
        </table>
    );
};
