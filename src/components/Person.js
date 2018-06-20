import React, { Component } from 'react';


export const Person = props =>{
    return(
        <li className="responded"><span>{props.name}</span>
            <label>
              <input type="checkbox" checked/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
    );
};