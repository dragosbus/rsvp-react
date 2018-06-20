import React from 'react';


export const Person = props =>{
  let template, newName;
  if(props.toggleEdit) {
      template = <li className={props.isConfirmed? "responded" : ''} style={{display: props.hide ? props.isConfirmed ? 'block' : 'none' : 'block'}}>
        <input type="text" defaultValue={props.name} ref={n=>newName=n}/>
        <label>
          <input type="checkbox" onChange={props.confirmAttend}/> Confirmed
        </label>
        <button onClick={()=>props.savePerson(newName.value, props.index)}>Save</button>
        <button>remove</button>
      </li>
  } else {
    template = <li className={props.isConfirmed? "responded" : ''} style={{display: props.hide ? props.isConfirmed ? 'block' : 'none' : 'block'}}><span>{props.name}</span>
      <label>
        <input type="checkbox" onChange={props.confirmAttend}/> Confirmed
      </label>
      <button onClick={props.editPerson}>edit</button>
      <button>remove</button>
    </li>
  }

  return template;
};
