import * as React from 'react';
import { Socket } from './Socket';
import FacebookLogin from 'react-facebook-login';

function handleSubmit(response) {
    // TODO replace with name from oauth
    console.log(response);
    let name = "John Doe";
    Socket.emit('new facebook user', {
        'name': name,
    });
    
    console.log('Sent the name ' + name + ' to server!');
}

export function FacebookButton() {
    return (
      <FacebookLogin
        appId="341378700407972"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleSubmit} />
    );
}
