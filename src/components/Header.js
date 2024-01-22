import React from 'react';
import CustomLink from './Links';

export default function Header() {
    return (
        <header>
            <nav class="nav-bar">
                <CustomLink href="#" id="home" text="Home"/>
                <CustomLink href="#" id="notifications" text="Notifications"/>
                <CustomLink href="#" id="message" text="Message"/>
            </nav>
            <div id='search-bar'>
                <input placeholder="Search" />
                <button>TWEET</button>
            </div>
        </header>
    );
}