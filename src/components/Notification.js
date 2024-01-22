import React from 'react';
import CreateUserPost from './Users';
import talkIcon from '../img/talk-icon.png';

export default function Notification() {
    return (
        <div id='notification'>
            <div id="post-header">
                <div id='talk-icon'>
                    <img src={talkIcon} alt="Talk"/>
                </div>
                <div id='post-input'>
                    <input type="text" placeholder="What's happening?"></input>
                </div>
            </div>
            <div>
                <CreateUserPost name="Michael Scott" element="p" content="I'm not superstitious, but I am a little stitious." color="yellow" />
                <CreateUserPost name="Dwight K. Schrute" element="p" content="Before I do anything, I ask myself, 'Would an idiot do that?' And if the answer is yes, I do not do that thing." color="blue" />
                <CreateUserPost name="Stanley Hudson" element="p" content="Boy have you lost your mind? I'll help you find it." color="green" />
                <CreateUserPost name="Michael Scott" element="p" content="Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it's not like this compulsive need to be liked, like my need to be praised." color="yellow" />
            </div>
        </div>
    )
}