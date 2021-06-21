import React from 'react';


export function User(props){

    console.log(props)

    return(
        <div id="user1"> 
        { props.prvobjekt &&
            <div>
                <p>Showing User 1</p>
            <h2>User Name: {props.user1.name} </h2>
            <h2>User Address: {props.user1.address} </h2>
            <h2>User Age: {props.user1.age} </h2>
            </div>   }
            {props.vtorobjekt === true ?
            <div id="user1">
                 <p>Showing User 1</p>
        <h2>User Name: {props.user1.name} </h2>
        <h2>User Address: {props.user1.address} </h2>
        <h2>User Age: {props.user1.age} </h2>
        </div> :
        <div id="user2">
             <p>Showing User 2</p>
        <h2>User Name: {props.user2.name} </h2>
        <h2>User Address: {props.user2.address} </h2>
        <h2>User Age: {props.user2.age} </h2>
        </div>
        }
        </div>

    )
}


export function User2(props){
     console.log(props)
     return(
        <div id="user2">
        <h2>User Name: {props.vtorobjekt.name} </h2>
        <h2>User Address: {props.vtorobjekt.address} </h2>
        <h2>User Age: {props.vtorobjekt.age} </h2>
        </div>
     )
}

