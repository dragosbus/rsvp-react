import React, { Component } from 'react';


export const Person = props =>{
    return(
        <li className={props.isConfirmed? "responded" : ''}><span>{props.name}</span>
          <label>
            <input type="checkbox"/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
    );
};
