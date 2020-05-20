import React from 'react';

function NavItem(props) {
    return(
        <div>
            <h1>hello, {props.name}</h1>
            <h1>I am {props.age} years old</h1>
        </div>
        
    )
}

export default NavItem;