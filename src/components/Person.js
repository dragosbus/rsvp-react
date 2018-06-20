import React from 'react';


export const Person = props =>{
    return(
        <li className={props.isConfirmed? "responded" : ''} style={{display: props.hide ? props.isConfirmed ? 'block' : 'none' : 'block'}}><span>{props.name}</span>
          <label>
            <input type="checkbox" onChange={props.confirmAttend}/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
    );
};
