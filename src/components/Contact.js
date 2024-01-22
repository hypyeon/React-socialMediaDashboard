import React from 'react';
import CreateUserPost from './Users';

export default function PostContact() {
    return (
        <div id="contacts">
            <h2>Contacts</h2>
            <CreateUserPost name="Michael Scott" color="yellow" element="button" content="Send a message" />
            <CreateUserPost name="Dwight K. Schrute" color="blue" element="button" content="Send a message" />
            <CreateUserPost name="Stanley Hudson" color="green" element="button" content="Send a message" />
        </div>
    )
}