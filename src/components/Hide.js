import React from 'react';


export const Hide = props =>{
  return(
    <div>
      <h2>Invitees</h2>
      <label>
        <input type="checkbox" onChange={props.hideUnconfirmed}/> Hide those who haven't responded
      </label>
    </div>
  );
};
