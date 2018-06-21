import React from 'react';
import {Person} from './Person';


export const Persons = props =>{
    return(
        <ul>
          {props.persons.map((person, i)=> <Person key={i} name={person.name} isConfirmed={person.isConfirmed} confirmAttend={()=>props.confirmAttend(i)} hide={props.hide} editPerson={event=>props.editPerson(event,i)} toggleEdit={person.toggleEdit} savePerson={props.savePerson} index={i} removePerson={()=>props.removePerson(i)}/>)}
        </ul>
    );
};
