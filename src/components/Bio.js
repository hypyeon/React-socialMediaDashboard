import React from 'react';
import userIcon from '../img/user-icon.png';

export default function Bio() {
    return (
        <div id="bio">
            <div class="div" id="bio-1">
                <div id="cover"></div>
                <div id="info">
                    <div id="icon-name">
                        <div>
                            <img src={userIcon} alt="User"/>
                        </div>
                        <h3>Jim Harpert</h3>
                    </div>
                    <ul>
                        <li>TWEETS 0</li>
                        <li>FOLLOWING 12</li>
                        <li>FOLLOWERS 31</li>
                    </ul>
                </div>
            </div>
            <div class="div" id="bio-2">
                <p>
                    "Any topics are welcome but about paper."
                </p>
            </div>
        </div>
    )
}