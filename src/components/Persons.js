import React, { Component } from 'react';
import {Person} from './Person';


export const Persons = props =>{
    return(
        <ul>
          {props.persons.map((person, i)=> <Person key={i} name={person.name} isConfirmed={person.isConfirmed} confirmAttend={()=>props.confirmAttend(i)}/>)}
        </ul>
    );
};
