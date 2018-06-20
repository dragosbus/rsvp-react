import React from 'react';


export const Person = props =>{
    return(
        <li className={props.isConfirmed? "responded" : ''}><span>{props.name}</span>
          <label>
            <input type="checkbox" onChange={props.confirmAttend}/> Confirmed
            </label>
            <button>edit</button>
            <button>remove</button>
        </li>
    );
};
