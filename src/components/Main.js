import React from 'react';
import Bio from './Bio';
import Notification from './Notification';
import PostContact from './Contact';

export default function Body() {
    return (
        <main>
            <Bio />
            <Notification />
            <PostContact />
        </main>
    );
}