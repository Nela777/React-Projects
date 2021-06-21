import React from 'react';
import {User} from './User';

const firstUser = {
  name:"Nela",
  address:"Prilep",
  age:28
}

const secondUser = {
  name:"Ana",
  address:"Bitola",
  age:30
}

export function App(){

  return(

    <div id="app">
      <h1>Users</h1>
      <User prvobjekt = {false}
            vtorobjekt = {false}
            user1 ={firstUser}
            user2 = {secondUser}
              />
   </div>
  )
}